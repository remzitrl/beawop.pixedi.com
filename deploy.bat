@echo off
REM Beawop Deployment Script for CapRover (Windows)
REM Domain: beawop.pixedi.com

echo 🚀 Starting Beawop deployment to CapRover...

REM Check if caprover CLI is installed
where caprover >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ CapRover CLI is not installed. Please install it first:
    echo npm install -g caprover
    pause
    exit /b 1
)

REM Build the React app
echo 📦 Building React application...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed. Please fix the errors and try again.
    pause
    exit /b 1
)

echo ✅ Build completed successfully!

REM Deploy to CapRover
echo 🚀 Deploying to CapRover...
call caprover deploy --app beawop

if %errorlevel% equ 0 (
    echo ✅ Deployment completed successfully!
    echo 🌐 Your site should be available at: https://beawop.pixedi.com
) else (
    echo ❌ Deployment failed. Please check the CapRover logs.
    pause
    exit /b 1
)

pause
