######################################
#
#       TESTER
#
######################################
ARG NODE_VERSION=latest
ARG NGINX_VERSION=latest
FROM --platform=$BUILDPLATFORM node:${NODE_VERSION}-alpine3.19 AS tester
ENV CI=true
ARG NPM_VERSION=latest
ENV NPM_VERSION $NPM_VERSION
# Add a workdir directory
WORKDIR /app
# Copy all files
COPY ./ .
# Update node
RUN npm install -g npm@$NPM_VERSION && npm -v | grep $NPM_VERSION && npm install
RUN npm run eslint
RUN npm pkg set scripts.test="CI=true react-scripts test"
RUN npm run test


######################################
#
#       BUILDER
#
######################################
FROM --platform=$BUILDPLATFORM node:${NODE_VERSION}-alpine3.19 AS builder
# Add a workdir directory
WORKDIR /app
# Copy all files
COPY ./ .
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
FROM --platform=$BUILDPLATFORM nginx:${NGINX_VERSION}-alpine3.18-slim AS production
# Update and upgrade
RUN apk update && \
    apk upgrade --available --no-cache && \
    rm -rf /var/cache/apk/*
# Copy from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Copy nginx configuration
COPY dockerfiles/production/build/nginx/app.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]