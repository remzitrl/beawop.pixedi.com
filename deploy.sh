#!/bin/bash

# Beawop Deployment Script for CapRover
# Domain: beawop.pixedi.com

echo "🚀 Starting Beawop deployment to CapRover..."

# Check if caprover CLI is installed
if ! command -v caprover &> /dev/null; then
    echo "❌ CapRover CLI is not installed. Please install it first:"
    echo "npm install -g caprover"
    exit 1
fi

# Build the React app
echo "📦 Building React application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build completed successfully!"

# Deploy to CapRover
echo "🚀 Deploying to CapRover..."
caprover deploy --app beawop

if [ $? -eq 0 ]; then
    echo "✅ Deployment completed successfully!"
    echo "🌐 Your site should be available at: https://beawop.pixedi.com"
else
    echo "❌ Deployment failed. Please check the CapRover logs."
    exit 1
fi
