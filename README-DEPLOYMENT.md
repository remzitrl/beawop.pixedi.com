# Beawop - CapRover Deployment

Bu proje CapRover üzerinde `beawop.pixedi.com` domain'i altında yayınlanmak üzere hazırlanmıştır.

## Hazırlanan Dosyalar

- `captain-definition` - CapRover yapılandırma dosyası
- `Dockerfile` - React uygulaması için Docker yapılandırması
- `.dockerignore` - Docker build sırasında göz ardı edilecek dosyalar
- `deploy.sh` / `deploy.bat` - Deployment hazırlık scriptleri
- `DEPLOYMENT.md` - Detaylı deployment rehberi

## Hızlı Başlangıç

### Windows için:
```cmd
deploy.bat
```

### Linux/Mac için:
```bash
chmod +x deploy.sh
./deploy.sh
```

## CapRover'da Yayınlama

1. CapRover dashboard'a giriş yapın
2. Yeni bir uygulama oluşturun: `beawop`
3. Domain'i ayarlayın: `beawop.pixedi.com`
4. HTTPS'i etkinleştirin ve zorla HTTPS'i açın
5. Bu klasörü tar dosyası olarak yükleyin veya Git ile bağlayın

## Teknik Detaylar

- **Port**: 3000 (internal)
- **Node.js**: 18 Alpine
- **Build Tool**: Create React App
- **Server**: serve (static file server)
- **Domain**: beawop.pixedi.com

## Sorun Giderme

- Uygulama yüklenmiyorsa CapRover loglarını kontrol edin
- Domain yapılandırmasının doğru olduğundan emin olun
- HTTPS'in etkin olduğunu kontrol edin
- Build sürecinin başarıyla tamamlandığını doğrulayın
