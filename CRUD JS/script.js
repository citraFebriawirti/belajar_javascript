let data = [
    "Sistem Informasi",
    "Teknologi Informasi",
    "Sistem Informatika",
    "Teknik Informatika"
];


function tampil() {
    let tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>Jurusan</th><th>Action</th></tr>";
    for (let i = 0; i < data.length; i++) {
        let btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
        let btnHapus = "<button class='btn-hapus' href='#' onclick='hapus(" + i + ")'>Hapus</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + data[i] + "</td><td>" + btnEdit + " " + btnHapus + "</tr>";
    }
}

function tambah() {
    let input = document.querySelector("input[name=jurusan]");
    data.push(input.value);
    tampil();
    input.value = "";
}

function edit(id) {
    let baru = prompt("Edit", data[id]);
    data[id] = baru;
    tampil();
}

function hapus(id) {
    data.pop(id);
    tampil();
}

tampil();