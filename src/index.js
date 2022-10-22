// import package yang dibutuhkan
import "./sass/root.sass";

// Fungsi main untuk menjalankan semua program yang ada di dalamnya
const main = () => {
  // deklarasi variabel untuk mengambil element dari html
  const menu = document.querySelector(".fa-burger");
  const list = document.querySelector(".nav-list");
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    sentences: document.getElementById("sentences").value,
  };

  // Event listener ketika menu di klik
  menu.addEventListener("click", () => {
    list.classList.toggle("slide");
    menu.classList.toggle("black");
    document.body.classList.toggle("hidden");
  });

  document.getElementById("send").addEventListener("click", () => {
    emailjs.send("contact_service", "contact_form", data).then((res) => {
      console.log("test");
    });
  });
};

// Jalankan fungi main
main();
