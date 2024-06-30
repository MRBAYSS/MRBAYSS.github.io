document.getElementById('cekKhodamForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nama = document.getElementById('nama').value;
    var tanggalLahir = document.getElementById('tanggalLahir').value;

    // Daftar khodam yang mungkin ditemukan
    var khodamList = [
        "Khodam Kucing Imut",
        "Khodam Bebek Berbulu Emas",
        "Khodam Monyet Jenaka",
        "Khodam Ayam Berkokok Tiga Kali",
        "Khodam Gajah Mini",
        "Khodam Kelinci Berlari Cepat",
        "Khodam Kupu-Kupu Berkilauan",
        "Khodam Kodok Melompat Tinggi",
        "Khodam Ular Kecil Berwarna-warni",
        "Khodam Burung Hantu Pintar",
        "Khodam Kuda Mini Berlari Kencang",
        "Khodam Tikus Berkumis Panjang",
        "Khodam Anjing Setia",
        "Khodam Ikan Terbang",
        "Khodam Kambing Berjenggot Putih",
        "Khodam Babi Hutan Kecil",
        "Khodam Domba Bermata Satu",
        "Khodam Serigala Berbulu Emas",
        "Khodam Lumba-lumba Pintar",
        "Khodam Paus Biru Kecil",
        "Khodam Belalang Raksasa",
        "Khodam Kuda Nil Mini",
        "Khodam Beruang Madu",
        "Khodam Tupai Cerdas",
        "Khodam Elang Pengawas",
        "Khodam Zebra Bergaris Pelangi",
        "Khodam Singa Berkepala Dua",
        "Khodam Harimau Lucu",
        "Khodam Badak Kecil",
        "Khodam Cacing Tanah Ajaib",
        "Khodam Kuda Mini Berlari Kencang",
        "Khodam Kelinci Berlari Cepat",
        "Khodam Kambing Berjenggot Putih",
        "Khodam Kucing Imut",
    ];

    // Logika sederhana untuk "cek khodam"
    var hasil = "";
    if (nama.length % 100 === 0) {
        hasil = "Khodam tidak ditemukan.";
    } else {
        // Memilih khodam secara acak
        var randomIndex = Math.floor(Math.random() * khodamList.length);
        var khodam = khodamList[randomIndex];
        hasil = "Khodam ditemukan! Ada " + khodam + ".";
    }

    // Menampilkan hasil
    document.getElementById('hasil').innerText = "Hasil untuk " + nama + ": " + hasil;
});
