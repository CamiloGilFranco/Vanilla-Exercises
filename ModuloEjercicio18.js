const d = document;

export default function contactFormValidations() {
  const domForm = d.querySelector(".contact-form");
  const domInputs = d.querySelectorAll(".contact-form [required]");

  domInputs.forEach((input) => {
    const domSpan = d.createElement("span");
    domSpan.id = input.name;
    domSpan.textContent = input.title;
    domSpan.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", domSpan);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let domInput = e.target;
      let pattern = domInput.pattern || domInput.dataset.pattern;

      if (pattern && domInput.value !== "") {
        let regex = new RegExp(pattern);

        return !regex.exec(domInput.value)
          ? d.getElementById(domInput.name).classList.add("is-active")
          : d.getElementById(domInput.name).classList.remove("is-active");
      }

      if (!pattern) {
        return domInput.value === ""
          ? d.getElementById(domInput.name).classList.add("is-active")
          : d.getElementById(domInput.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("enviando Formulario");

    const domLoader = d.querySelector(".contact-form-loader");
    const domResponse = d.querySelector(".contact-form-responsive");

    domLoader.classList.remove("none");

    setTimeout(() => {
      domLoader.classList.add("none");
      domResponse.classList.remove("none");
      domForm.reset();

      setTimeout(() => {
        domResponse.classList.add("none");
      }, 3000);
    }, 3000);
  });
}
