/* ***********Ejercicio 1*********** */

/* Se importa la función "hamburgerMenu" desde el archivo ./ModuloEjercicio1.js */
import hamburgerMenu from "./ModuloEjercicio1.js";

/* El objeto "document" se le asigna a la variable "p" para reducir el tamaño del código y darle orden */
const d = document;

/* Al completar la carga del documento HTML se ejecuta la función "hamburgerMenu" que permite la interacción con  el botón hamburguesa y como parámetros a esta función se le pasan los selectores de clase del botón como tal, del menu de navegación y de los elementos dentro del menu de navegación*/
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
});

/* *************Ejercicio 2************* */

import { digitalClock, alarm } from "./ModuloEjercicio2.js";

d.addEventListener("DOMContentLoaded", (e) => {
  digitalClock("#clock", "#activar-reloj", "#desactivar-reloj");
  alarm(
    "assetsEjerciciosDOM/alarma de despertador.mp3",
    "#activar-alarma",
    "#desactivar-alarma"
  );
});

/* *************Ejercicio 3************* */

import { moveBall, shortcuts } from "./ModuloEjercicio3.js";

d.addEventListener("keydown", (e) => {
  moveBall(e, ".ball", ".stage");
  shortcuts(e);
});

/* *************Ejercicio 4************* */

import countDown from "./ModuloEjercicio4.js";

d.addEventListener("DOMContentLoaded", (e) => {
  countDown("countDown", "Dec 23, 2023 00:00:00", "Feliz Cumpleaños 😘");
});

/* *************Ejercicio 5************* */
import scrollTopButton from "./ModuloEjercicio5.js";

d.addEventListener("DOMContentLoaded", (e) => {
  scrollTopButton(".scroll-top-btn");
});

/* *************Ejercicio 6************* */
import darkTheme from "./ModuloEjercicio6.js";

darkTheme(".dark-theme-btn", "dark-mode");

/* *************Ejercicio 7************* */
import responsiveMedia from "./ModuloEjercicio7.js";

d.addEventListener("DOMContentLoaded", (e) => {
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/olhDsRyhVEQ">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/olhDsRyhVEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/nKda3mdD2FRFDUxZA">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.412722576526!2d-74.09123048595606!3d4.698138742989664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b3025b592e3%3A0x7cf13ea54e1d8b5a!2sUniversidad%20Minuto%20de%20Dios!5e0!3m2!1ses!2sco!4v1670175805340!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
});

/* *************Ejercicio 8************* */
import responsiveTester from "./ModuloEjercicio8.js";

d.addEventListener("DOMContentLoaded", (e) => {
  responsiveTester("responsive-tester");
});

/* *************Ejercicio 9************* */
import userDeviceInfo from "./ModuloEjercicio9.js";

d.addEventListener("DOMContentLoaded", (e) => {
  userDeviceInfo("user-device");
});

/* *************Ejercicio 10************* */
import networkStatus from "./ModuloEjercicio10.js";
networkStatus();

/* *************Ejercicio 11************* */
import webCam from "./ModuloEjercicio11.js";

d.addEventListener("DOMContentLoaded", (e) => {
  webCam("webcam");
});

/* *************Ejercicio 12************* */
import getGeolocation from "./ModuloEjercicio12.js";

d.addEventListener("DOMContentLoaded", (e) => {
  getGeolocation("geolocation");
});

/* *************Ejercicio 13************* */
import searchFilters from "./ModuloEjercicio13.js";

d.addEventListener("DOMContentLoaded", (e) => {
  searchFilters(".card-filter", ".card");
});

/* *************Ejercicio 14************* */
import draw from "./ModuloEjercicio14.js";

d.addEventListener("DOMContentLoaded", (e) => {
  draw("#winner-btn", ".player");
});

/* *************Ejercicio 15************* */
import slider from "./ModuloEjercicio15.js";

d.addEventListener("DOMContentLoaded", (e) => {
  slider();
});

/* *************Ejercicio 16************* */
import scrollSpy from "./ModuloEjercicio16.js";

d.addEventListener("DOMContentLoaded", (e) => {
  scrollSpy();
});

/* *************Ejercicio 17************* */
import smartVideo from "./ModuloEjercicio17.js";

d.addEventListener("DOMContentLoaded", (e) => {
  smartVideo();
});

/* *************Ejercicio 18************* */
import contactFormValidations from "./ModuloEjercicio18.js";

d.addEventListener("DOMContentLoaded", (e) => {
  contactFormValidations();
});

/* *************Ejercicio 19************* */
import speechReader from "./ModuloEjercicio19.js";

speechReader();
