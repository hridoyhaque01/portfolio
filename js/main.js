// header start

// element selection

const header = document.getElementById("header"),
  headerHeight = header.offsetHeight,
  navbarMenu = document.getElementById("navbar-menu"),
  menuBtn = document.querySelector(".menu-btn"),
  closeBtn = document.querySelector(".close-btn"),
  navLinks = document.querySelectorAll(".nav-item .nav-link"),
  arrowBtn = document.querySelector(".arrow-btn");

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

// navbar active class toggle

const navbarLinks = document.querySelectorAll("#navbarNav .nav-link");

const navbarActive = () => {
  let position = window.scrollY + headerHeight;
  navLinks.forEach((link) => {
    if (!link.hash) return;
    const section = document.querySelector(link.hash);
    if (!section) return;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

    link.addEventListener("click", function (event) {
      event.preventDefault();
      scrollSection(link);
    });
  });
};

const scrollSection = (link) => {
  const targetId = link.getAttribute("href");
  const targetSection = document.querySelector(targetId);
  const targetPosition = targetSection.offsetTop - headerHeight + 20;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
};

window.addEventListener("load", navbarActive);
window.addEventListener("scroll", navbarActive);

// window.addEventListener("load", navbarActive);
// window.addEventListener("scroll", navbarActive);

// header end  ===>

const formList = document.querySelectorAll(".form-lists ul li"),
  buttons = document.querySelectorAll(".buttons .hire-btn"),
  nextBtns = document.querySelectorAll(".buttons .next-btns"),
  prevBtns = document.querySelectorAll(".buttons .prev-btns"),
  forms = document.querySelectorAll(".single-form");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.remove("active");
  });
});

nextBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    formList[index + 1].classList.add("active");
  });
});

prevBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    formList[index + 1].classList.remove("active");
  });
});

// banner modal form final setup start ====>

// banner modal form final setup end ====>

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

// owl carousel setup ====>

// projects slider ====>

const projectSlider = document.getElementById("project-slider");

if (projectSlider) {
  var swiper = new Swiper(".project-slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    freeMode: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 3,
      },

      1080: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
}

// aos animation

//animations

function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}
aos_init();

// contact us ====>

const contectLists = document.querySelectorAll("#connect .copy");

contectLists.forEach((item) => {
  item.addEventListener("click", async () => {
    const texts = item.previousElementSibling.innerHTML;
    const parent = item.parentElement;
    try {
      await navigator.clipboard.writeText(texts);
      parent.classList.add("show");
      setTimeout(() => {
        parent.classList.remove("show");
      }, 1200);
    } catch (err) {
      console.log("got some error");
    }
  });
});

// counter effect === >

$(".counter").counterUp({
  delay: 10,
  time: 1400,
});

// countert effect end

//project section start

//arrow btn

function scrollWindowTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showArrow() {
  const scrollTop = window.scrollY;
  if (scrollTop > 620) {
    arrowBtn.classList.add("show-arrow");
    arrowBtn.addEventListener("click", scrollWindowTop);
  } else {
    arrowBtn.classList.remove("show-arrow");
  }
}

window.addEventListener("load", showArrow);
window.addEventListener("scroll", showArrow);
