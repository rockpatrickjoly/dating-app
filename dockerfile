# Stage 1: Build the Angular Universal application
FROM node:18 as build-stage

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the Angular app for production
RUN npm run build -- --output-path=dist/dating-app

# Stage 2: Serve the built Angular app with Nginx
FROM nginx:1.21

# Copy the client-side assets to Nginx
COPY --from=build-stage /app/dist/dating-app/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
