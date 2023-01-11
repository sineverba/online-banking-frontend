# Use NGINX
FROM nginx:1.23.3-alpine
# Update and upgrade
RUN apk update --no-cache && apk upgrade
# Copy from builder
COPY build /usr/share/nginx/html
# Copy nginx configuration
COPY dockerfiles/nginx/app.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]