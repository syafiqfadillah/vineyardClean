// import package yang dibutuhkan
import "./sass/root.sass";

// Fungsi main untuk menjalankan semua program yang ada di dalamnya
const main = () => {
  // deklarasi variabel untuk mengambil element dari html
  const menu = document.querySelector(".ri-menu-line");
  const list = document.querySelector(".nav-list");

  // Event listener ketika menu di klik
  menu.addEventListener("click", () => {
    list.classList.toggle("slide");
    menu.classList.toggle("black");
    document.body.classList.toggle("hidden");
  });
};

// Jalankan fungi main
main();
