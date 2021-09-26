// pada transaksi.html
// Untuk oil
let oil1 = document.querySelector('.oil1');
const jmlOil1 = document.querySelector('.jumlahBeliOil1');

let oil2 = document.querySelector('.oil2');
const jmlOil2 = document.querySelector('.jumlahBeliOil2');

let oil3 = document.querySelector('.oil3');
const jmlOil3 = document.querySelector('.jumlahBeliOil3');

let oil4 = document.querySelector('.oil4');
const jmlOil4 = document.querySelector('.jumlahBeliOil4');

// Untuk milk
let milk1 = document.querySelector('.milk1');
const jmlMilk1 = document.querySelector('.jumlahBeliMilk1');

let milk2 = document.querySelector('.milk2');
const jmlMilk2 = document.querySelector('.jumlahBeliMilk2');

let milk3 = document.querySelector('.milk3');
const jmlMilk3 = document.querySelector('.jumlahBeliMilk3');

let milk4 = document.querySelector('.milk4');
const jmlMilk4 = document.querySelector('.jumlahBeliMilk4');

// Untuk Syrup
let syrup1 = document.querySelector('.syrup1');
const jmlSyrup1 = document.querySelector('.jumlahBeliSyrup1');

let syrup2 = document.querySelector('.syrup2');
const jmlSyrup2 = document.querySelector('.jumlahBeliSyrup2');

let syrup3 = document.querySelector('.syrup3');
const jmlSyrup3 = document.querySelector('.jumlahBeliSyrup3');

let syrup4 = document.querySelector('.syrup4');
const jmlSyrup4 = document.querySelector('.jumlahBeliSyrup4');

// Untuk Noodle
let noodle1 = document.querySelector('.noodle1');
const jmlNoodle1 = document.querySelector('.jumlahBeliNoodle1');

let noodle2 = document.querySelector('.noodle2');
const jmlNoodle2 = document.querySelector('.jumlahBeliNoodle2');

let noodle3 = document.querySelector('.noodle3');
const jmlNoodle3 = document.querySelector('.jumlahBeliNoodle3');

let noodle4 = document.querySelector('.noodle4');
const jmlNoodle4 = document.querySelector('.jumlahBeliNoodle4');


// Hasil
const hasil = document.querySelector('#total');

// Ketika tombol proses ditekan
const proses = document.querySelector('input[type="button"]');
proses.addEventListener('click', function() {
    // Kalo barang gak ada yang di check tampilkan alert
    if (oil1.checked === false && oil2.checked === false && oil3.checked === false && oil4.checked === false && milk1.checked === false &&
        milk2.checked === false && milk3.checked === false && milk4.checked === false && syrup1.checked === false && syrup2.checked === false &&
        syrup3.checked === false && syrup4.checked === false && noodle1.checked === false &&
        noodle2.checked === false && noodle3.checked === false && noodle4.checked === false) {
        alert('Check barang terlebih dahulu!');
    }

    // Kalo barang oil1 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaOil1 = 20500; // Harga awal oil1, sudah kita tentukan
    if (oil1.checked === true) {
        hargaOil1 *= jmlOil1.value;
        hasil.value = hargaOil1;
    }

    // Kalo barang oil2 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaOil2 = 19500; // Harga awal oil2, sudah kita tentukan
    if (oil2.checked === true) {
        hargaOil2 *= jmlOil2.value;
        hasil.value = hargaOil2;
    }

    // Kalo barang oil3 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaOil3 = 22000; // Harga awal oil3, sudah kita tentukan
    if (oil3.checked === true) {
        hargaOil3 *= jmlOil3.value;
        hasil.value = hargaOil3;
    }

    // Kalo barang oil4 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaOil4 = 21000; // Harga awal oil4, sudah kita tentukan
    if (oil4.checked === true) {
        hargaOil4 *= jmlOil4.value;
        hasil.value = hargaOil4;
    }

    // Kalo barang milk1 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaMilk1 = 23000; // Harga awal milk1, sudah kita tentukan
    if (milk1.checked === true) {
        hargaMilk1 *= jmlMilk1.value;
        hasil.value = hargaMilk1;
    }

    // Kalo barang milk2 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaMilk2 = 12500; // Harga awal milk2, sudah kita tentukan
    if (milk2.checked === true) {
        hargaMilk2 *= jmlMilk2.value;
        hasil.value = hargaMilk2;
    }

    // Kalo barang milk3 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaMilk3 = 22500; // Harga awal milk3, sudah kita tentukan
    if (milk3.checked === true) {
        hargaMilk3 *= jmlMilk3.value;
        hasil.value = hargaMilk3;
    }

    // Kalo barang milk4 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaMilk4 = 7000; // Harga awal milk4, sudah kita tentukan
    if (milk1.checked === true) {
        hargaMilk4 *= jmlMilk4.value;
        hasil.value = hargaMilk4;
    }

    // Kalo barang syrup1 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaSyrup1 = 25000; // Harga awal Syrup1, sudah kita tentukan
    if (syrup1.checked === true) {
        hargaSyrup1 *= jmlSyrup1.value;
        hasil.value = hargaSyrup1;
    }

    // Kalo barang syrup2 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaSyrup2 = 23500; // Harga awal syrup2, sudah kita tentukan
    if (syrup2.checked === true) {
        hargaSyrup2 *= jmlSyrup2.value;
        hasil.value = hargaSyrup2;
    }

    // Kalo barang syrup3 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaSyrup3 = 21500; // Harga awal syrup3, sudah kita tentukan
    if (syrup3.checked === true) {
        hargaSyrup3 *= jmlSyrup3.value;
        hasil.value = hargaSyrup3;
    }

    // Kalo barang syrup4 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaSyrup4 = 20500; // Harga awal syrup4, sudah kita tentukan
    if (syrup4.checked === true) {
        hargaSyrup4 *= jmlSyrup4.value;
        hasil.value = hargaSyrup4;
    }

    // Kalo barang noodle1 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaNoodle1 = 20500; // Harga awal noodle1, sudah kita tentukan
    if (noodle1.checked === true) {
        hargaNoodle1 *= jmlNoodle1.value;
        hasil.value = hargaNoodle1;
    }

    // Kalo barang noodle2 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaNoodle2 = 20500; // Harga awal noodle2, sudah kita tentukan
    if (noodle2.checked === true) {
        hargaNoodle2 *= jmlNoodle2.value;
        hasil.value = hargaNoodle2;
    }

    // Kalo barang noodle3 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaNoodle3 = 20500; // Harga awal noodle3, sudah kita tentukan
    if (noodle3.checked === true) {
        hargaNoodle3 *= jmlNoodle3.value;
        hasil.value = hargaNoodle3;
    }

    // Kalo barang noodle4 di check maka akan dikali dengan jumlah barang yang di beli
    let hargaNoodle4 = 20500; // Harga awal noodle4, sudah kita tentukan
    if (noodle4.checked === true) {
        hargaNoodle4 *= jmlNoodle4.value;
        hasil.value = hargaNoodle4;
    }

    // Kalo semua barang di check maka akan dijumlahkan harga nya dan ditampilkan ke hasil value atau ke bagian input Total Harga
    if (oil1.checked === true && oil2.checked === true && oil3.checked === true && oil4.checked === true && milk1.checked === true && milk2.checked === true &&
        milk3.checked === true && milk4.checked === true && syrup1.checked === true && syrup2.checked === true && syrup3.checked === true &&
        syrup4.checked === true && noodle1.checked === true && noodle2.checked === true && noodle3.checked === true && noodle4.checked === true) {
        hasil.value = hargaOil1 + hargaOil2 + hargaOil3 + hargaOil4 + hargaOil1 + hargaOil2 + hargaOil3 + hargaOil4 + hargaSyrup1 + hargaSyrup2 +
            hargaSyrup3 + hargaSyrup4 + noodle1 + noodle2 + noodle3 + noodle4;

        // Kalo yang di check cuman barang oil1 dan milk1 saja, maka akan dijumlahkan 
    } else if (oil1.checked === true && oil2.checked === true && oil3.checked === true && oil4.checked === true) {
        hasil.value = hargaOil1 + hargaOil2 + hargaOil3 + hargaOil4;

    } else if (oil1.checked === true && oil2.checked === true) {
        hasil.value = hargaOil1 + hargaOil2;
    } else if (oil1.checked === true && oil3.checked === true) {
        hasil.value = hargaOil1 + hargaOil3;
    } else if (oil1.checked === true && oil4.checked === true) {
        hasil.value = hargaOil1 + hargaOil2;
    } else if (oil1.checked === true && milk1.checked === true) {
        hasil.value = hargaOil1 + hargaMilk1;
    } else if (oil1.checked === true && milk2.checked === true) {
        hasil.value = hargaOil1 + hargaMilk2;
    }
});
//End Transaksi.html

// pada Contact.html
// onclik submit pada Contact
function myFunction() {
    alert("Terima Kasih");
}
// End Contact.html