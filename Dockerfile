# Use Node.js 18 as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Install serve to run the app
RUN npm install -g serve

# Set default port
ENV PORT=80

# Expose port
EXPOSE $PORT

# Start the application
CMD ["sh", "-c", "serve -s build -l ${PORT:-80} -a 0.0.0.0"]
