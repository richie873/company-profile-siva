# PT Siva Parama Dhana: Company Profile

Next.js (App Router) + TypeScript + Tailwind CSS v4. Dua bahasa (ID/EN), mode gelap mengikuti perangkat, portofolio dengan filter dan lightbox, form kontak yang membuka WhatsApp.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # uji build produksi
```

Butuh Node.js 20.9 atau lebih baru. Build memerlukan internet karena font (Archivo, Source Sans 3) diunduh dari Google Fonts oleh `next/font`.

## Mengubah konten

| Yang ingin diubah | File |
| --- | --- |
| Nama, telepon/WhatsApp, alamat, link peta | `lib/site.ts` |
| Judul dan paragraf (ID + EN) | `lib/i18n.ts` |
| Layanan, misi, industri, mesin las, daftar foto fasilitas dan portofolio | `lib/data.ts` |
| Foto | `public/images/` |
| Warna dan tema | `app/globals.css` (variabel di `:root`) |

Menambah foto portofolio: taruh file `.jpg` di `public/images/`, lalu tambah satu baris `p("kategori", "nama-file", "Keterangan ID", "Caption EN")` di `portfolio` pada `lib/data.ts`.

Tambah bahasa baru: tambahkan kode di tipe `Lang` dan satu objek terjemahan di `lib/i18n.ts`, lalu tombol di `components/Header.tsx`.

## Yang perlu diisi / dicek

- Empat foto kategori **Plant** masih berlabel "Instalasi plant". Ganti dengan nama proyek yang benar di `lib/data.ts`.
- Email perusahaan belum ada di compro. Tambahkan di `lib/site.ts` dan `components/Contact.tsx` bila ada.
- Isi `NEXT_PUBLIC_SITE_URL` (lihat `.env.example`) setelah domain tersedia.

## Deploy ke Vercel

1. Push repo ke GitHub.
2. Import di Vercel (framework terdeteksi otomatis).
3. Tambahkan environment variable `NEXT_PUBLIC_SITE_URL`.
