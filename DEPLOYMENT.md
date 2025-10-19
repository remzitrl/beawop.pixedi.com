# CapRover Deployment Guide for beawop.pixedi.com

## Deployment Files Created

The following files have been created for CapRover deployment:

1. **captain-definition** - CapRover configuration file
2. **Dockerfile** - Docker configuration for building the React app
3. **.dockerignore** - Files to ignore during Docker build
4. **package.json** - Updated with serve dependency and serve script

## Deployment Steps

### 1. Prepare the Application
```bash
cd web
npm install
npm run build
```

### 2. Deploy to CapRover

1. Login to your CapRover dashboard
2. Create a new app named "beawop" (or your preferred name)
3. Set the domain to "beawop.pixedi.com"
4. Enable HTTPS and force HTTPS
5. Upload the entire `web` folder as a tar file or connect via Git

### 3. CapRover Configuration

- **App Name**: beawop
- **Domain**: beawop.pixedi.com
- **Port**: 3000 (internal)
- **Environment Variables**: None required for basic deployment

### 4. Build Process

The Dockerfile will:
1. Install Node.js 18
2. Install dependencies
3. Build the React application
4. Install serve globally
5. Serve the built application on port 3000

### 5. Verification

After deployment, visit:
- https://beawop.pixedi.com

## Troubleshooting

- If the app doesn't load, check CapRover logs
- Ensure the domain is properly configured in CapRover
- Verify HTTPS is enabled
- Check that the build process completed successfully

## File Structure

```
web/
├── captain-definition
├── Dockerfile
├── .dockerignore
├── package.json (updated)
├── src/
├── public/
└── DEPLOYMENT.md
```
