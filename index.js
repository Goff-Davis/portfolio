let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("mode-toggle");
  toggle.addEventListener("click", modeToggle);

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
