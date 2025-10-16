# Beawop Deployment Checklist

## Pre-Deployment Checklist ✅

### 1. CapRover Setup
- [ ] CapRover server is running and accessible
- [ ] CapRover CLI is installed (`npm install -g caprover`)
- [ ] Logged in to CapRover (`caprover login`)

### 2. Application Setup
- [ ] Create new app in CapRover dashboard: `beawop`
- [ ] Set custom domain: `beawop.pixedi.com`
- [ ] Enable HTTPS/SSL certificate
- [ ] Configure environment variables (if any)

### 3. Code Preparation
- [ ] All dependencies installed (`npm install`)
- [ ] Application builds successfully (`npm run build`)
- [ ] No TypeScript/ESLint errors
- [ ] All assets are properly referenced

## Deployment Steps

### Option 1: Automated Deployment
```bash
# Windows
deploy.bat

# Linux/Mac
./deploy.sh
```

### Option 2: Manual Deployment
```bash
# 1. Build the application
npm run build

# 2. Deploy to CapRover
caprover deploy --app beawop
```

## Post-Deployment Verification

### 1. Basic Checks
- [ ] Site loads at `https://beawop.pixedi.com`
- [ ] All pages are accessible
- [ ] Images and assets load correctly
- [ ] No console errors

### 2. Performance Checks
- [ ] Page load speed is acceptable
- [ ] Gzip compression is working
- [ ] Static assets are cached properly

### 3. Security Checks
- [ ] HTTPS is working
- [ ] Security headers are present
- [ ] No sensitive files exposed

## Troubleshooting

### Common Issues

1. **Build Fails**
   ```bash
   npm install
   npm run build
   ```

2. **Deployment Fails**
   ```bash
   caprover logs --app beawop
   ```

3. **Domain Not Working**
   - Check CapRover dashboard settings
   - Verify DNS configuration
   - Check SSL certificate status

4. **404 Errors on Refresh**
   - Verify nginx.conf is properly configured
   - Check try_files directive

### Useful Commands

```bash
# Check CapRover status
caprover list

# View logs
caprover logs --app beawop

# Restart app
caprover restart --app beawop

# Check app info
caprover info --app beawop
```

## Monitoring

- Monitor application logs in CapRover dashboard
- Set up health checks using `/health` endpoint
- Monitor resource usage (CPU, Memory, Disk)

## Backup

- Keep local backup of source code
- Document any custom configurations
- Save CapRover app configuration
