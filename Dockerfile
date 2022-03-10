FROM node:16.14.0-alpine3.15 AS builder
# Add a workdir directory
WORKDIR /app
# Install dependencies
COPY . .
RUN npm install npm@8.5.3 && npm install --production && npm run build

# Use NGINX
FROM nginx:1.21.6-alpine AS production
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