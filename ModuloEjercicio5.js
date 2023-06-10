const d = document;
const w = window;

export default function scrollTopButton(btn) {
  const domScrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > 300) {
      domScrollBtn.classList.remove("hidden");
    } else {
      domScrollBtn.classList.add("hidden");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
        left: 0,
      });
    }
  });
}
