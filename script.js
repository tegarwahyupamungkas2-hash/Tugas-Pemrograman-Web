const nilaiForm = document.getElementById("nilaiForm");
const hasil = document.getElementById("hasil");

nilaiForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputNilai = [
        document.getElementById("pemrograman"),
        document.getElementById("algoritma"),
        document.getElementById("basisData"),
        document.getElementById("jaringan"),
        document.getElementById("matematika")
    ];

    let total = 0;

    for (let i = 0; i < inputNilai.length; i++) {
        const nilai = Number(inputNilai[i].value);

        if (nilai < 0 || nilai > 100 || !Number.isFinite(nilai)) {
            alert("Nilai harus berada di antara 0 sampai 100.");
            inputNilai[i].focus();
            return;
        }

        total += nilai;
    }

    const rataRata = total / inputNilai.length;
    let kategori;

    if (rataRata >= 85) {
        kategori = "A";
    } else if (rataRata >= 75) {
        kategori = "B";
    } else if (rataRata >= 65) {
        kategori = "C";
    } else if (rataRata >= 50) {
        kategori = "D";
    } else {
        kategori = "E";
    }

    const statusKelulusan =
        document.getElementById("statusKelulusan");

    if (rataRata >= 60) {
        statusKelulusan.textContent = "Status: Lulus";
        statusKelulusan.className = "status lulus";
    } else {
        statusKelulusan.textContent = "Status: Belum lulus";
        statusKelulusan.className = "status tidak-lulus";
    }

    document.getElementById("totalNilai").textContent =
        total.toFixed(2);

    document.getElementById("rataRata").textContent =
        rataRata.toFixed(2);

    document.getElementById("kategori").textContent =
        kategori;

    hasil.hidden = false;
});

nilaiForm.addEventListener("reset", function () {
    hasil.hidden = true;
});