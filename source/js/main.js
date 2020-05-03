var header = document.querySelector(".header");
var toggleBtn = document.querySelector(".header__toggle-button");

header.classList.remove("header--nojs");

toggleBtn.addEventListener("click", function () {
  header.classList.contains("header--active")
    ? header.classList.remove("header--active")
    : header.classList.add("header--active");
});
