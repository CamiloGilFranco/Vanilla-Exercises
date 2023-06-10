const d = document;
const ls = localStorage;

export default function darkTheme(btn, classDark) {
  const domThemeBtn = d.querySelector(btn);
  const domSelectores = d.querySelectorAll("[data-dark]");
  let moon = "🌑";
  let sun = "☀️";

  const lightMode = () => {
    domSelectores.forEach((el) => {
      el.classList.remove(classDark);
    });
    domThemeBtn.textContent = moon;
    ls.setItem("theme", "light");
  };

  const darkMode = () => {
    domSelectores.forEach((el) => {
      el.classList.add(classDark);
    });
    domThemeBtn.textContent = sun;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if (domThemeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) {
      ls.setItem("theme", "light");
    }
    if (ls.getItem("theme") === "light") {
      lightMode();
    }

    if (ls.getItem("theme") === "dark") {
      darkMode();
    }
  });
}
