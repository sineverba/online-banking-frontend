######################################
#
#       TESTER
#
######################################
ARG NODE_VERSION
ARG NGINX_VERSION
FROM node:${NODE_VERSION}-alpine3.19 AS tester
ENV CI=true
ARG NPM_VERSION
# Add a workdir directory
WORKDIR /app
# Copy all files
COPY ./ .
# Update node
RUN npm install -g npm@$NPM_VERSION && npm -v | grep $NPM_VERSION && npm install
RUN npm run eslint
RUN npm pkg set scripts.test="CI=true jest"
RUN npm run test
######################################
#
#       BUILDER
#
######################################
FROM node:${NODE_VERSION}-alpine3.19 AS builder
# Add a workdir directory
WORKDIR /app
# Copy all files
COPY ./ .
# Set env
COPY .env.bak .env
# Remove tests
RUN rm -rf /app/src/__tests__/
# Skip prepare
RUN npm pkg set scripts.prepare="echo no-prepare"
# Update node, npm install dependencies with ignore-scripts to skip prepare
RUN npm install -g npm@$NPM_VERSION && npm install --omit=dev
RUN npm run build
######################################
#
#       PRODUCTION
#
######################################
# Use NGINX
FROM nginx:${NGINX_VERSION}-alpine3.18-slim AS production
# Update and upgrade
RUN apk update && \
    apk upgrade --available --no-cache && \
    rm -rf /var/cache/apk/*
# Copy from builder
COPY --from=builder /app/out /usr/share/nginx/html
# Set permissions to 644 for all files and directories recursively
RUN find /usr/share/nginx/html -type f -exec chmod 644 {} + && \
    find /usr/share/nginx/html -type d -exec chmod 755 {} +
# Copy nginx configuration
COPY dockerfiles/production/build/app.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]