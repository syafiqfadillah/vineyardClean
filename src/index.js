import "./sass/root.sass";

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
