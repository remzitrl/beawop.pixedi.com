#!/bin/bash

# Beawop CapRover Deployment Script
echo "🚀 Starting Beawop deployment preparation..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building React application..."
npm run build

# Check if build was successful
if [ -d "build" ]; then
    echo "✅ Build successful!"
    echo "📁 Build directory created with $(du -sh build | cut -f1) of files"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Ready for CapRover deployment!"
echo "📋 Next steps:"
echo "1. Login to CapRover dashboard"
echo "2. Create app 'beawop'"
echo "3. Set domain to 'beawop.pixedi.com'"
echo "4. Upload this folder or connect via Git"
echo "5. Enable HTTPS and force HTTPS"
