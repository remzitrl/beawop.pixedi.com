# Beawop Deployment Guide

Bu proje CapRover kullanarak `beawop.pixedi.com` domain'i altında yayınlanacak şekilde hazırlanmıştır.

## Gereksinimler

1. **CapRover CLI** yüklü olmalı:
   ```bash
   npm install -g caprover
   ```

2. **Docker** yüklü olmalı (CapRover sunucusunda)

## Deployment Dosyaları

- `captain-definition`: CapRover konfigürasyon dosyası
- `Dockerfile`: Multi-stage Docker build dosyası
- `nginx.conf`: Nginx konfigürasyonu (SPA routing için)
- `.dockerignore`: Docker build'de göz ardı edilecek dosyalar

## Deployment Yöntemleri

### 1. Otomatik Script ile (Önerilen)

**Windows için:**
```cmd
deploy.bat
```

**Linux/Mac için:**
```bash
chmod +x deploy.sh
./deploy.sh
```

### 2. Manuel Deployment

```bash
# 1. Uygulamayı build et
npm run build

# 2. CapRover'a deploy et
caprover deploy --app beawop
```

### 3. NPM Script ile

```bash
npm run deploy:production
```

## CapRover Konfigürasyonu

1. CapRover dashboard'da yeni bir uygulama oluşturun: `beawop`
2. Domain'i `beawop.pixedi.com` olarak ayarlayın
3. SSL sertifikasını etkinleştirin
4. Deployment'ı başlatın

## Özellikler

- ✅ React SPA routing desteği
- ✅ Gzip compression
- ✅ Static asset caching
- ✅ Security headers
- ✅ Multi-stage Docker build (optimized size)
- ✅ Nginx reverse proxy

## Sorun Giderme

### Build Hatası
```bash
npm install
npm run build
```

### CapRover Bağlantı Hatası
```bash
caprover login
```

### Domain Ayarları
CapRover dashboard'da:
1. Apps → beawop → Settings
2. Custom Domain: `beawop.pixedi.com`
3. Enable HTTPS: ✅

## Loglar

CapRover dashboard'dan veya CLI ile logları görüntüleyebilirsiniz:
```bash
caprover logs --app beawop
```
