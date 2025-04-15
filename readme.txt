==================================================
              Analisa NIK Indonesia
==================================================

Deskripsi:
-----------
Program ini dibuat dengan HTML dan JavaScript untuk menganalisa data dari NIK (Nomor Induk Kependudukan) Indonesia. 
Dengan memasukkan NIK 16 digit, pengguna dapat mengetahui informasi berikut:

- Jenis Kelamin
- Tanggal Lahir
- Provinsi
- Kabupaten/Kota
- Kecamatan

Struktur NIK:
--------------
NIK terdiri dari 16 digit dengan format sebagai berikut:

[0-1]   = 2 digit kode provinsi  
[2-3]   = 2 digit kode kabupaten/kota  
[4-5]   = 2 digit kode kecamatan  
[6-7]   = 2 digit tanggal lahir  
[8-9]   = 2 digit bulan lahir  
[10-11] = 2 digit tahun lahir (2 digit terakhir)  
[12-15] = 4 digit nomor urut registrasi

Catatan khusus:
- Untuk perempuan, 2 digit tanggal lahir (digit ke-7 dan ke-8) ditambahkan 40.  
  Contoh: 51 berarti tanggal 11 dan jenis kelamin perempuan.

Struktur Kode:
--------------
1. index.html
   - Tampilan antarmuka pengguna (UI)
   - Input NIK dan tombol untuk menjalankan analisa
   - Hasil analisa ditampilkan dalam format HTML

2. wilayah.json (diharapkan tersedia di direktori yang sama)
   - File JSON berisi data referensi wilayah administratif:
     - provinsi: {"11": "ACEH", ...}
     - kabupaten: {"1101": "KAB. SIMEULUE", ...}
     - kecamatan: {"110101": "TEUPAH SELATAN", ...}

3. Fungsi-fungsi JavaScript:
   - getJenisKelamin(nik)
     > Mengembalikan jenis kelamin berdasarkan digit ke-7 dan 8 NIK
     > Jika >40 maka Perempuan, jika <=40 maka Laki-laki

   - getTanggalLahir(nik)
     > Mengembalikan tanggal lahir dalam format DD-MM-YYYY
     > Secara otomatis menyesuaikan tanggal jika perempuan (dikurangi 40)

   - getProvinsi(nik)
     > Mengembalikan nama provinsi berdasarkan 2 digit pertama NIK

   - getKabupaten(nik)
     > Mengembalikan nama kabupaten berdasarkan 4 digit pertama NIK

   - getKecamatan(nik)
     > Mengembalikan nama kecamatan berdasarkan 6 digit pertama NIK

   - analisaNIK()
     > Fungsi utama yang mengambil input dari pengguna, memanggil fungsi-fungsi di atas, dan menampilkan hasil

Cara Menggunakan:
------------------
1. Buka file `index.html` di browser.
2. Masukkan NIK 16 digit pada kolom input.
3. Klik tombol "Analisa".
4. Informasi yang terurai dari NIK akan ditampilkan di bawahnya.

Catatan:
---------
- Pastikan file `wilayah.json` tersedia dan dimuat dengan benar.
- Jika data wilayah tidak ditemukan, akan ditampilkan "Tidak diketahui".
- Program hanya mengecek struktur NIK, bukan validitas resmi dari Dukcapil.

Lisensi:
---------
Proyek ini bebas digunakan dan dimodifikasi untuk pembelajaran dan pengembangan pribadi.

Dibuat oleh: Abdul Jalal
Tanggal: 15/04/2025

==================================================
