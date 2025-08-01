# VZ Botz Indonesia - Cloudflare Pages Deployment

## 🚀 Setup untuk Cloudflare Pages

### 1. Build Configuration
```
Build command: npm run build
Build output directory: dist
Root directory: /
Node.js version: 18
```

### 2. Environment Variables (Opsional)
Tidak perlu environment variables karena Web3Forms menggunakan public key.

### 3. Custom Domain (Opsional)
- Bisa gunakan domain sendiri seperti: `vzbotz.com` atau `vzbotz.pages.dev`

## 📧 Email Setup
Form akan otomatis mengirim ke: `hoshizorahikaru1@gmail.com`

Format email yang akan diterima:
```
Subject: Pendaftaran Bot WhatsApp - Paket [nama_paket]

Pendaftaran Baru VZ Botz Indonesia:

📱 Nomor WhatsApp Bot: [nomor_bot]
👤 Nomor WhatsApp Owner: [nomor_owner]  
📧 Email: [email_customer]
📦 Paket Dipilih: [paket]
💬 Pesan Tambahan: [pesan]

Dikirim dari website VZ Botz Indonesia
```

## 🛠 Deployment Steps

### Via GitHub:
1. Push code ke GitHub repository
2. Connect GitHub ke Cloudflare Pages
3. Set build settings di atas
4. Deploy otomatis setiap push

### Via Direct Upload:
1. Run `npm run build` locally
2. Upload folder `dist` ke Cloudflare Pages
3. Manual deployment

## ✅ Testing
1. Deploy website
2. Test form submission
3. Check email: `hoshizorahikaru1@gmail.com`
4. Verify all form fields terkirim dengan benar

## 🔧 Troubleshooting
- Jika form tidak terkirim: check browser console untuk error
- Jika email tidak masuk: cek folder spam
- Untuk debugging: tambahkan `console.log` di form submission

## 📱 Mobile Optimization
Form sudah responsive dan mobile-friendly untuk semua device.