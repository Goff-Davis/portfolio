let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("js-mode-toggle");
  toggle.addEventListener("click", modeToggle);

  const burger = document.getElementById("js-burger");
  burger.addEventListener("click", burgerToggle);

  if (!isDark) {
    let root = document.body;
    root.classList.toggle("lightMode");
  }
});

function modeToggle() {
  isDark = !isDark;

  let root = document.body;
  root.classList.toggle("lightMode");
}

function burgerToggle() {
  const bar1 = document.getElementById("js-bar1");
  const bar2 = document.getElementById("js-bar2");
  const bar3 = document.getElementById("js-bar3");
  const navList = document.getElementById("js-nav-list");

  bar1.classList.toggle("bar1Open");
  bar2.classList.toggle("bar2Open");
  bar3.classList.toggle("bar3Open");
  navList.classList.toggle("navListOpen");
}
