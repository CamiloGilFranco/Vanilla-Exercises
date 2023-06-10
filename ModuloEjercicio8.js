const d = document;

export default function responsiveTester(form) {
  const domForm = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === domForm) {
      e.preventDefault();
      tester = window.open(
        domForm.direction.value,
        "tester",
        `innerWidth=${domForm.ancho.value}, innerHeight=${domForm.alto.value}`
      );
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === domForm.cerrar) {
      tester.close();
    }
  });
}
