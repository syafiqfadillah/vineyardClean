import "./sass/root.sass";

document.getElementById("send").addEventListener("click", () => {
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    sentences: document.getElementById("sentences").value
  }

  emailjs.send("contact_service", "contact_form", data).then(res => {
      console.log("test");
  })
})

const main = () => {
  const menu = document.querySelector(".ri-menu-line");
  const list = document.querySelector(".nav-list");

  menu.addEventListener("click", () => {
    list.classList.toggle("slide");
    menu.classList.toggle("black");
    document.body.classList.toggle("hidden");
  });
};

main();
