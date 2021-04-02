const toggle = document.querySelector("#mode-toggle");
toggle.addEventListener("click", modeToggle);

let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (!isDark) {
  let root = document.body;
  root.classList.toggle("lightMode");
}

function modeToggle() {
  isDark = !isDark;

  let root = document.body;
  root.classList.toggle("lightMode");
}
