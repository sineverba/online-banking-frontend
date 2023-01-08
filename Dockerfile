######################################
#
#       TESTER
#
######################################
FROM node:18.13.0-alpine3.17 AS tester
ENV CI=true
# Add a workdir directory
WORKDIR /app
# Copy necessary files and install dependencies
COPY src /app/src
COPY public /app/public
COPY package*.json .env.test .eslintrc.js /app/
# Update node
RUN npm install -g npm@9.2.0 && npm -v | grep "9.2.0" && npm install
RUN npm run eslint
RUN npm pkg set scripts.test="CI=true react-scripts test"
RUN npm run test

######################################
#
#       BUILDER
#
######################################
FROM node:18.13.0-alpine3.17 AS builder
# Add a workdir directory
WORKDIR /app
# Copy necessary files and install dependencies
COPY src /app/src
COPY public /app/public
COPY package*.json .env /app/
# Skip prepare
RUN npm pkg set scripts.prepare="echo no-prepare"
# Update node, npm install dependencies with ignore-scripts to skip prepare
RUN npm install -g npm@9.2.0 && npm -v | grep "9.2.0" && npm install --omit=dev
RUN npm run build

######################################
#
#       PRODUCTION
#
######################################

# Use NGINX
FROM nginx:1.23.2-alpine AS production
# Update and upgrade
RUN apk update --no-cache && apk upgrade
# Copy from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Copy nginx configuration
COPY dockerfiles/nginx/app.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]