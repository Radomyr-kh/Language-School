const menuBtn = document.querySelector(".menu-btn");
const menuStatus = document.getElementById("myTopnav");

document.onclick = (e) => {
  if (
    e.target.id !== "myTopnav" &&
    !e.target.classList.contains("menu-btn") &&
    e.target.className !== "menu-btn__burger"
  ) {
    menuBtn.classList.remove("open");
    menuStatus.classList.remove("responsive");
  }
};

menuBtn.onclick = () => {
  menuBtn.classList.toggle("open");
  menuStatus.classList.toggle("responsive");
};
