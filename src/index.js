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

	document.getElementById("send").addEventListener("click", () => {
    const data = {
      service_id: "contact_service",
      template_id: "contact_form",
      user_id: "l2XE1auQUF2SZG2JN",
      template_params: {
        "name": document.getElementById("name").value,
        "email": document.getElementById("email").value,
        "sentences": document.getElementById("sentences").value
      }
      }

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(data)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

  })
};

// Jalankan fungi main
main();
