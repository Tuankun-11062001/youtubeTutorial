const barBtn = document.querySelector(".bar");
const imageBtn = document.querySelector(".bar img");
const menuMobile = document.querySelector(".navigation-list-mobile");
barBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
  if (menuMobile.classList.contains("active")) {
    imageBtn.src = "./asset/close.svg";
  } else {
    imageBtn.src = "./asset/bar.svg";
  }
});
