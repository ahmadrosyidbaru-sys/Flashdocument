# BIOMA'HAD SMART — Landing Page

## Menjalankan
1. Ekstrak folder `biomahad-smart`.
2. Letakkan foto prototipe di `assets/prototipe.jpg`.
3. Letakkan diagram rangkaian di `assets/skematik.jpg`.
4. Buka `index.html` di browser. Untuk pengembangan, disarankan memakai ekstensi Live Server di VS Code.

## File
- `index.html`: struktur konten.
- `style.css`: desain, layout responsif, dan animasi.
- `script.js`: menu mobile, reveal animation, active navigation, dan tombol kembali ke atas.

## Catatan
- Tailwind tidak digunakan di implementasi ini; CSS ditulis terpisah agar mudah diubah dan tidak bergantung pada utility classes. Google Fonts dan Lucide Icons dimuat melalui CDN sehingga memerlukan internet.
- Tombol “Lihat Prototipe” mengarah ke bagian dokumentasi prototipe. Jika sudah punya route dashboard, ubah href CTA sesuai URL dashboard.
- Angka metrik dibuat sebagai informasi showcase statis, bukan data sensor live.
- Klaim konsentrasi CH4, volume gas, dan kesetaraan LPG perlu berdasarkan hasil pengujian/kalibrasi; halaman ini tidak mengarang pembacaan sensor real-time.
