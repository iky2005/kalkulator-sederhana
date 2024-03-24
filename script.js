const tampilan = document.querySelector(".tampilan");
const tombol = document.querySelectorAll("button");
const karakterKhusus = ["%", "*", "/", "-", "+", "="];
const daftarRiwayat = document.querySelector(".daftar-riwayat");
const popupRiwayat = document.querySelector(".riwayat");
const ikonRiwayat = document.querySelector(".riwayat i");
let hasil = "";

//fungsi berdasarkan tombol yang diklik
const hitung = (nilaiTombol) => {
    tampilan.focus();
    if (nilaiTombol === "=" && hasil !== ""){
        //ganti x jadi * dan ÷ jadi /
        const ekspresi = hasil.replace(/x/g, "*").replace(/÷/g, "/");
        const hasilEvaluasi = eval(ekspresi);

        //tambahkan ekspresi ke daftar riwayat
        daftarRiwayat.insertAdjacentHTML("beforeend", `<li>${ekspresi} = ${hasilEvaluasi}</li>`);

        hasil = hasilEvaluasi;
    } else if (nilaiTombol === "AC"){
        hasil = "";
    } else if (nilaiTombol === "DEL"){
        //hapus karakter terakhir dari hasil
        hasil = hasil.toString().slice(0, -1)
    } else{
        if (hasil === "" && karakterKhusus.includes(nilaiTombol)) return;
        hasil += nilaiTombol;
    }
    tampilan.value = hasil;
};

tombol.forEach((tombol) => {
    tombol.addEventListener("click", (e) => hitung(e.target.dataset.value));
});

ikonRiwayat.addEventListener("click", () => {
    popupRiwayat.classList.toggle("tampil");
});

document.addEventListener("click", (e) =>{
    if(!popupRiwayat.contains(e.target) && target != ikonRiwayat){
        popupRiwayat.classList.remove("tampil");
    }
});
