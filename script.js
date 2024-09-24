document.addEventListener("scroll", () => {
  const navBar = document.querySelector("nav");
  if (window.scrollY > 0) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

const allLinks = document.querySelectorAll(".nav-menu li");
const menuBtn = document.querySelector(".menu-btn");
const menuList = document.querySelector("nav .right ul");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

allLinks.forEach((allLink, index) => {
  allLink.addEventListener("click", () => {
    menuList.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });
});
