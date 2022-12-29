// header start

// element selection

const header = document.getElementById("header"),
  navbarMenu = document.getElementById("navbar-menu"),
  menuBtn = document.querySelector(".menu-btn"),
  closeBtn = document.querySelector(".close-btn"),
  navLinks = document.querySelectorAll(".nav-item .nav-link");

//   change navbar background color

const changeHeaderTheme = () => {
  const scrollTop = window.scrollY;
  if (scrollTop > 0) {
    header.classList.add("header-down");
  } else {
    header.classList.remove("header-down");
  }
};

window.addEventListener("scroll", changeHeaderTheme);
window.addEventListener("load", changeHeaderTheme);

menuBtn.addEventListener("click", () => {
  navbarMenu.classList.add("show-menu");
});

// close navbar function

const closeNabar = () => {
  navbarMenu.classList.remove("show-menu");
};

closeBtn.addEventListener("click", closeNabar);

navLinks.forEach((link) => link.addEventListener("click", closeNabar));

// header end  ===>

// change theme start===>

const themeChangerBtn = document.getElementById("theme-changer");

const body = document.body;

const themeChanger = () => {
  if (body.getAttribute("data-theme") === "dark") {
    body.setAttribute("data-theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
  }
};

themeChangerBtn.addEventListener("click", themeChanger);

// change theme end===>
