# AxoProject CBT — Project Showcase Portfolio

Website portofolio responsif untuk menampilkan proyek AxoProject CBT.

## Teknologi
- React 18
- Vite 6
- Tailwind CSS 3
- Lucide React
- Inter (Google Fonts)

## Menjalankan secara lokal
Pastikan Node.js versi 18 atau lebih baru telah terpasang.

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite (biasanya `http://localhost:5173`).

## Build untuk deployment
```bash
npm run build
npm run preview
```
Hasil build tersedia di folder `dist/`.

## Publish ke GitHub Pages
Workflow GitHub Actions di `.github/workflows/deploy.yml` akan membangun dan menerbitkan situs setiap ada push ke branch `main`.

1. Push repository ke GitHub pada branch `main`.
2. Buka **Settings → Pages** pada repository.
3. Pada **Build and deployment**, pilih **GitHub Actions** sebagai source.
4. Buka tab **Actions** dan tunggu workflow **Deploy to GitHub Pages** selesai.

Vite dikonfigurasi dengan base path relatif agar file JavaScript, CSS, favicon, dan gambar tetap ditemukan pada URL project GitHub Pages.

## Mengganti / menambahkan screenshot
Letakkan file gambar di `public/images/` dengan nama berikut:

| Slot | Nama file | Keterangan |
|---|---|---|
| 1 | `axoproject-1-exam.png` | Halaman pengerjaan ujian (16:9) |
| 2 | `axoproject-2-dashboard.png` | Dashboard siswa — sudah diisi screenshot |
| 3 | `axoproject-3-admin.png` | Admin Workspace — sudah diisi screenshot |

Jika gambar belum tersedia, placeholder akan ditampilkan otomatis.

## Catatan
- Theme switcher menyimpan pilihan `light` / `dark` pada `localStorage` dengan key `axoproject-theme`.
- Demo live mengarah ke `https://axoproject.vercel.app`.
- Fitur keamanan pada halaman ini merupakan dokumentasi kemampuan yang dinyatakan dalam brief proyek; klaim tersebut tetap perlu diverifikasi melalui audit implementasi sebelum digunakan sebagai pernyataan jaminan keamanan.
