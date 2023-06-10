/* Se exporta automáticamente la función "hamburgerMenu" la cual recibe como parámetros los selectores de clase del botón como tal, del menu de navegación y de los elementos dentro del menu de navegación */
export default function hamburgerMenu(panelBtn, panel, menuLink) {
  /* El objeto "document" se le asigna a la variable "p" para reducir el tamaño del código y darle orden */
  const d = document;

  /* Se crea un escuchador de click para todo el documento HTML, si el click coincide con el botón de hamburguesa o alguno de sus elementos hijos, se agrega o elimina la clase "is-active" de los elementos que tengan la clase guardada dentro del parámetro "panel" y "menuLink" mostrando u ocultando el menu de navegación y cambiando el estado del botón hamburguesa*/
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }

    /* Si el evento de click coincide con uno de los elementos dentro del menu de navegación, se retira la clase "is active" de los elementos que contengan la clase almacenada en la variable "panel" y "panelBtn" ocultando asi el menu de navegación y regresando el botón hamburguesa a su estado original */
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}
