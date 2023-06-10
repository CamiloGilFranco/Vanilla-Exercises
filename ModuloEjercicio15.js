const d = document;

export default function slider() {
  const domNextBtn = d.querySelector(".slider-btns .next");
  const domPrevBtn = d.querySelector(".slider-btns .prev");
  const domSlides = d.querySelectorAll(".slider-slide");

  let i = 0;

  d.addEventListener("click", (e) => {
    if (e.target === domPrevBtn) {
      e.preventDefault();
      domSlides[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = domSlides.length - 1;
      }

      domSlides[i].classList.add("active");
    }

    if (e.target === domNextBtn) {
      e.preventDefault();
      domSlides[i].classList.remove("active");
      i++;

      if (i >= domSlides.length) {
        i = 0;
      }

      domSlides[i].classList.add("active");
    }
  });
}
