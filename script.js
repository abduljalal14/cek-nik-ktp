// Inisialisasi variabel untuk menyimpan data wilayah
let wilayah;
fetch("wilayah.json")
    .then((response) => response.json())
    .then((data) => {
        wilayah = data;
        console.log(wilayah);
    })
    .catch((err) => console.error("Gagal load JSON:", err));

// Fungsi untuk mendapatkan jenis kelamin
function getJenisKelamin(nik) {
    let tgl = parseInt(nik.substring(6, 8));
    let jenisKelamin = "Laki-laki";
    if (tgl > 40) {
        jenisKelamin = "Perempuan";
        tgl -= 40;
    }
    return jenisKelamin;
}

// Fungsi untuk mendapatkan tanggal lahir
function getTanggalLahir(nik) {
    let tgl = parseInt(nik.substring(6, 8));
    const bln = parseInt(nik.substring(8, 10));
    const thn = parseInt(nik.substring(10, 12));
    const tahunLengkap = thn > 30 ? 1900 + thn : 2000 + thn;

    if (tgl > 40) {
        tgl -= 40;
    }

    return `${tgl.toString().padStart(2, "0")}-${bln.toString().padStart(2, "0")}-${tahunLengkap}`;
}

// Fungsi untuk mendapatkan provinsi
function getProvinsi(nik) {
    const provCode = parseInt(nik.substring(0, 2));
    return wilayah.provinsi[provCode] || "Tidak diketahui";
}

// Fungsi untuk mendapatkan kabupaten
function getKabupaten(nik) {
    const kabCode = parseInt(nik.substring(0, 4));
    return wilayah.kabupaten[kabCode] || "Tidak diketahui";
}

// Fungsi untuk mendapatkan kecamatan
function getKecamatan(nik) {
    const kecCode = parseInt(nik.substring(0, 6));
    return wilayah.kecamatan[kecCode] || "Tidak diketahui";
}

// Fungsi utama untuk menganalisa NIK
function analisaNIK() {
    const nik = document.getElementById("nikInput").value;
    if (!/^\d{16}$/.test(nik)) {
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