// Navbar Fix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};
// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
// klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});
// dark mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
    document.getElementById("darkMode").style.display = "block";
    document.getElementById("lightMode").style.display = "none";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
    document.getElementById("darkMode").style.display = "none";
    document.getElementById("lightMode").style.display = "block";
  }
});

if (localStorage.theme === "dark") {
  document.getElementById("darkMode").style.display = "block";
  document.getElementById("lightMode").style.display = "none";
} else {
  document.getElementById("darkMode").style.display = "none";
  document.getElementById("lightMode").style.display = "block";
}

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// validasi form
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
    method: "post",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      window.location.href = "thankyou.html";
    })
    .catch((e) => alert("error brow"));
});
