@echo off
REM Beawop CapRover Deployment Script for Windows
echo 🚀 Starting Beawop deployment preparation...

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Build the application
echo 🔨 Building React application...
npm run build

REM Check if build was successful
if exist "build" (
    echo ✅ Build successful!
    echo 📁 Build directory created
) else (
    echo ❌ Build failed!
    pause
    exit /b 1
)

echo 🎉 Ready for CapRover deployment!
echo 📋 Next steps:
echo 1. Login to CapRover dashboard
echo 2. Create app 'beawop'
echo 3. Set domain to 'beawop.pixedi.com'
echo 4. Upload this folder or connect via Git
echo 5. Enable HTTPS and force HTTPS
pause
