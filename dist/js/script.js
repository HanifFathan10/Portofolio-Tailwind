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

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik diluar hamburger
window.addEventListener("click", (e) => {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// dark mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
const dark = document.getElementById("imgDark");
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)").matches;

darkToggle.addEventListener("click", () => {
  if (darkToggle.checked && darkModeMediaQuery) {
    html.classList.add("dark");
    localStorage.theme = "dark";
    document.getElementById("gambarA").style.display = "none";
    document.getElementById("gambarB").style.display = "block";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
    document.getElementById("gambarB").style.display = "none";
    document.getElementById("gambarA").style.display = "block";
  }
});

// pindahkan posisi toggle sesuai mode menggunakan ternary operator
{
  localStorage.theme === "dark" ? (darkToggle.checked = true) : (darkToggle.checked = false);
}

// agar gambar hanya 1 ketika function toggle belum dijalankan
if (localStorage.theme === "light") {
  document.getElementById("gambarB").style.display = "none";
  document.getElementById("gambarA").style.display = "block";
} else {
  document.getElementById("gambarB").style.display = "block";
  document.getElementById("gambarA").style.display = "none";
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
