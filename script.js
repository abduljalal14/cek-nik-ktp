// Inisialisasi variabel untuk menyimpan data wilayah
let wilayah;
fetch("wilayah.json") // Mengambil data wilayah dari file JSON
    .then((response) => response.json()) 
    .then((data) => { // Mengonversi data JSON menjadi objek JavaScript
        wilayah = data; // Menyimpan data wilayah ke dalam variabel
        console.log(wilayah);
    })
    .catch((err) => console.error("Gagal load JSON:", err));

// Fungsi untuk mendapatkan jenis kelamin
function getJenisKelamin(nik) {
    let tgl = parseInt(nik.substring(6, 8)); // Mengambil 2 digit tanggal lahir dari NIK
    
    let jenisKelamin = "Laki-laki";
    // Jika tanggal lahir lebih dari 40, maka jenis kelamin adalah perempuan
    if (tgl > 40) {
        jenisKelamin = "Perempuan";
        tgl -= 40;
    }
    return jenisKelamin;
}

// Fungsi untuk mendapatkan tanggal lahir
function getTanggalLahir(nik) {
    let tgl = parseInt(nik.substring(6, 8)); // Mengambil 2 digit tanggal lahir
    const bln = parseInt(nik.substring(8, 10)); // Mengambil 2 digit bulan lahir
    const thn = parseInt(nik.substring(10, 12)); // Mengambil 2 digit tahun lahir
    const tahunLengkap = thn > 30 ? 1900 + thn : 2000 + thn; // Menentukan tahun lengkap berdasarkan 2 digit tahun
    
    // Menghitung tanggal lahir berdasarkan jenis kelamin
    if (tgl > 40) {
        tgl -= 40;
    }

    return `${tgl.toString().padStart(2, "0")}-${bln.toString().padStart(2, "0")}-${tahunLengkap}`; // Mengembalikan format tanggal lahir
}

// Fungsi untuk mendapatkan provinsi
function getProvinsi(nik) {
    const provCode = parseInt(nik.substring(0, 2)); // Mengambil 2 digit pertama untuk kode provinsi
    return wilayah.provinsi[provCode] || "Tidak diketahui";
}

// Fungsi untuk mendapatkan kabupaten
function getKabupaten(nik) {
    const kabCode = parseInt(nik.substring(0, 4)); // Mengambil 4 digit pertama untuk kode kabupaten
    return wilayah.kabupaten[kabCode] || "Tidak diketahui";
}

// Fungsi untuk mendapatkan kecamatan
function getKecamatan(nik) {
    const kecCode = parseInt(nik.substring(0, 6)); // Mengambil 6 digit pertama untuk kode kecamatan
    return wilayah.kecamatan[kecCode] || "Tidak diketahui";
}

// Fungsi utama untuk menganalisa NIK
function analisaNIK() {
    const nik = document.getElementById("nikInput").value; // Mengambil nilai NIK dari inpu
    if (!/^\d{16}$/.test(nik)) { // Memastikan NIK terdiri dari 16 digit angka
        alert("NIK harus terdiri dari 16 digit angka.");
        return;
    }

    // Mendapatkan data dari fungsi terpisah
    const jenisKelamin = getJenisKelamin(nik);
    const tanggalLahir = getTanggalLahir(nik);
    const provinsi = getProvinsi(nik);
    const kabupaten = getKabupaten(nik);
    const kecamatan = getKecamatan(nik);

    document.getElementById("hasil").innerHTML = `
        <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
        <p><strong>Provinsi:</strong> ${provinsi}</p>
        <p><strong>Kabupaten/Kota:</strong> ${kabupaten}</p>
        <p><strong>Kecamatan:</strong> ${kecamatan}</p>
        `;
}