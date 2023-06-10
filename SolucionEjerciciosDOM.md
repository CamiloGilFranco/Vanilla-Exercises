# Solución a Ejercicios del DOM

Cada ejercicio se realizara dentro de una etiqueta \<section> dentro de la etiqueta /<main> presente en el documento HTML

## indice

- [Solución a Ejercicios del DOM](#solución-a-ejercicios-del-dom)
  - [indice](#indice)
  - [1. Estructura HTML y Botón Hamburguesa](#1-estructura-html-y-botón-hamburguesa)
    - [1.1 HTML](#11-html)
    - [1.2 CSS](#12-css)
    - [1.3 JavaScript (main)](#13-javascript-main)
    - [1.4 JavaScript (modulo)](#14-javascript-modulo)
  - [2. Mostrar Reloj y Reproducir Alarma](#2-mostrar-reloj-y-reproducir-alarma)
    - [2.1 HTML](#21-html)
    - [2.2 CSS](#22-css)
    - [2.3 JavaScrip (main)](#23-javascrip-main)
    - [2.4 JavaScript (modulo)](#24-javascript-modulo)
  - [3. Eventos de teclado y Colisiones](#3-eventos-de-teclado-y-colisiones)
    - [3.1 HTML](#31-html)
    - [3.2 CSS](#32-css)
    - [3.3 JavaScrip (main)](#33-javascrip-main)
    - [3.4 JavaScrip (modulo)](#34-javascrip-modulo)
  - [4. Cuenta Regresiva](#4-cuenta-regresiva)
    - [4.1 HTML](#41-html)
    - [4.2 CSS](#42-css)
    - [4.3 JavaScript (main)](#43-javascript-main)
    - [4.4 JavaScript (modulo)](#44-javascript-modulo)
  - [5. Botón de Scroll Top](#5-botón-de-scroll-top)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript (main)](#javascript-main)
    - [JavaScript (modulo)](#javascript-modulo)
  - [6. Botón de tema Oscuro y Local Storage](#6-botón-de-tema-oscuro-y-local-storage)
    - [6.1 HTML](#61-html)
    - [6.2 CSS](#62-css)
    - [6.3 JavaScript (main)](#63-javascript-main)
    - [6.4 JavaScript (modulo)](#64-javascript-modulo)
  - [7. Responsive con JavaScript](#7-responsive-con-javascript)
    - [7.1 HTML](#71-html)
    - [7.2 CSS](#72-css)
    - [7.3 JavaScript (main)](#73-javascript-main)
    - [7.4 JavaScript (modulo)](#74-javascript-modulo)
  - [8. Responsive Tester](#8-responsive-tester)
    - [8.1 HTML](#81-html)
    - [8.2 CSS](#82-css)
    - [8.3 JavaScript (main)](#83-javascript-main)
    - [8.4 JavaScript (modulo)](#84-javascript-modulo)
  - [9. Detección de Dispositivos de Usuario (User Agent)](#9-detección-de-dispositivos-de-usuario-user-agent)
    - [9.1 HTML](#91-html)
    - [9.2 CSS](#92-css)
    - [9.3 JavaScript (main)](#93-javascript-main)
    - [9.4 JavaScript (modulo)](#94-javascript-modulo)
  - [10. Conexión y Desconexión](#10-conexión-y-desconexión)
    - [10.1 HTML](#101-html)
    - [10.2 CSS](#102-css)
    - [10.3 JavaScript (main)](#103-javascript-main)
    - [10.4 JavaScript (modulo)](#104-javascript-modulo)
  - [11. Detección de Web Cam](#11-detección-de-web-cam)
    - [11.1 HTML](#111-html)
    - [11.2 CSS](#112-css)
    - [11.3 JavaScript (main)](#113-javascript-main)
    - [11.4 JavaScript (modulo)](#114-javascript-modulo)
  - [12. Geolocalización](#12-geolocalización)
    - [12.1 HTML](#121-html)
    - [12.2 CSS](#122-css)
    - [12.3 JavaScript (main)](#123-javascript-main)
    - [12.3 JavaScript (modulo)](#123-javascript-modulo)
  - [13. Filtro de Búsqueda](#13-filtro-de-búsqueda)
    - [13.1 HTML](#131-html)
    - [13.2 CSS](#132-css)
    - [13.3 JavaScript (main)](#133-javascript-main)
    - [13.4 JavaScript (modulo)](#134-javascript-modulo)
  - [14. Sorteo Digital](#14-sorteo-digital)
    - [14.1 HTML](#141-html)
    - [14.2 CSS](#142-css)
    - [14.3 JavaScript (main)](#143-javascript-main)
    - [14.3 JavaScript (modulo)](#143-javascript-modulo)
  - [15. Carrusel Responsivo](#15-carrusel-responsivo)
    - [15.1 HTML](#151-html)
    - [15.2 CSS](#152-css)
    - [15.3 JavaScript (main)](#153-javascript-main)
    - [15.4 JavaScript (modulo)](#154-javascript-modulo)
  - [16. Scroll Spy](#16-scroll-spy)
    - [16.1 HTML](#161-html)
    - [16.2 CSS](#162-css)
    - [16.3 JavaScript (main)](#163-javascript-main)
    - [16.4 JavaScript (modulo)](#164-javascript-modulo)
  - [17. Video Inteligente](#17-video-inteligente)
    - [17.1 HTML](#171-html)
    - [17.2 CSS](#172-css)
    - [17.3 JavaScript (main)](#173-javascript-main)
    - [17. JavaScript (modulo)](#17-javascript-modulo)
  - [18. Validaciones de Formulario](#18-validaciones-de-formulario)
    - [18.1 HTML](#181-html)
    - [18.2 CSS](#182-css)
    - [18.3 JavaScript (main)](#183-javascript-main)
    - [18.4 JavaScript (modulo)](#184-javascript-modulo)
  - [19. Narrador](#19-narrador)
    - [19.1 HTML](#191-html)
    - [19.2 CSS](#192-css)
    - [19.3 JavaScript (main)](#193-javascript-main)
    - [19.4 JavaScript (modulo)](#194-javascript-modulo)

---

## 1. Estructura HTML y Botón Hamburguesa

### 1.1 HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicios DOM</title>
    <!--   Se llama la hoja de estilos de la biblioteca a la que pertenece el botón de hamburguesa
  (https://jonsuh.com/hamburgers/), (https://cdnjs.com/libraries/hamburgers) -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.2.1/hamburgers.min.css"
    />
    <link rel="stylesheet" href="./EjerciciosDOM.css" />
  </head>

  <body>
    <!-- Se crea el titulo de la pagina -->
    <header class="header">
      <h1>Ejercicios del DOM</h1>
    </header>

    <!-- Se crea el botón de hamburguesa según la documentación del creador -->
    <button class="panel-btn hamburger hamburger--arrow" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <!-- Se crea el menu de navegación -->
    <aside class="panel">
      <nav class="menu">
        <a href="#ejercicio2">ejercicio 2</a>
        <a href="#ejercicio3">ejercicio 3</a>
        <a href="#ejercicio4">ejercicio 4</a>
        <a href="#ejercicio5">ejercicio 5</a>
      </nav>
    </aside>

    <!-- Se crea el bloque principal en donde se encontraran los resultados de cada ejercicio -->
    <main>
      <section id="ejercicio2" class="ejercicio">
        <h2>ejercicio 2</h2>
      </section>
      <section id="ejercicio3" class="ejercicio">
        <h2>ejercicio 3</h2>
      </section>
      <section id="ejercicio4" class="ejercicio">
        <h2>ejercicio 4</h2>
      </section>
      <section id="ejercicio5" class="ejercicio">
        <h2>ejercicio 5</h2>
      </section>
    </main>

    <!-- Se enlaza el archivo JS donde se ejecuta cada modulo, uno por cada ejercicio -->
    <script src="./EjerciciosDOM.js" type="module"></script>
  </body>
</html>
```

### 1.2 CSS

```css
/* ********** Reset CSS ********** */

/* Se crean las variables con valores que se usaran a lo largo del código CSS */
:root {
  --main-font: sans-serif;
  --font-size: 16px;
  --main-color: #f7df1e;
  --second-color: #222;
  --main-modal-color: rgba(247, 222, 30, 0.85);
  --second-modal-color: rgba(34, 34, 34, 0.85);
  --container-width: 1200px;
}

html {
  box-sizing: border-box;
  font-family: var(--main-font);
  font-size: var(--font-size);
  scroll-behavior: smooth;
}

*,
*:before *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  height: auto;
}

/* ********** Menu de Hamburguesa ********** */

/* Se fija el header en la parte superior y se asignan colores */
.header {
  position: sticky;
  top: 0;
  padding: 1rem;
  background-color: var(--main-color);
  color: var(--second-color);
}

/* Se centra el titulo del header */
.header h1 {
  margin: 0 auto;
  text-align: center;
}

/* Se asigna el espacio para agregar cada ejercicio */
.ejercicio {
  padding: 2rem;
  padding-top: 4rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: var(--container-width);
  min-height: 100vh;
  text-align: center;
}

/* Se asignan colores a el menu de navegación y se le asigna la posición fuera de la pantalla a la izquierda */
.panel {
  position: fixed;
  z-index: 998;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: var(--second-modal-color);
  transition: transform 0.3s ease;
  transform: translate(-100%, 0);
}

/* Se asigna al menu de navegación la posición dentro de la pantalla cunado es agregada la clase "is-active" */
.panel.is-active {
  transform: translate(0, 0);
}

/* Se asigna al botón de hamburguesa la posición dentro de la pantalla y se fija allí, también se hace que este quede sobre los demás componentes del documento HTML y se le asigna colores */
.panel-btn {
  position: fixed;
  z-index: 999;
  bottom: 1vh;
  right: 1vw;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color);
}

/* Se usa FlexBox al menu para ordenar el contenido que este tiene */
menu {
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}

/* Se asigna estilos a cada uno de los elementos dentro del menu de navegación */
.menu a {
  padding: 2rem;
  width: inherit;
  display: block;
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--main-color);
  transition: all 0.3s ease;
}

/* Se asigna estilos a los elementos dentro del menu de navegación que se activaran mediante el evento hover (posicionar el mouse sobre el elemento */
.menu a:hover {
  font-weight: bold;
  color: var(--second-color);
  background-color: var(--main-modal-color);
}
```

### 1.3 JavaScript (main)

```js
/* Se importa la función "hamburgerMenu" desde el archivo ./ModuloEjercicio1.js */
import hamburgerMenu from "./ModuloEjercicio1.js";

/* El objeto "document" se le asigna a la variable "p" para reducir el tamaño del código y darle orden */
const d = document;

/* Al completar la carga del documento HTML se ejecuta la función "hamburgerMenu" que permite la interacción con  el botón hamburguesa y como parámetros a esta función se le pasan los selectores de clase del botón como tal, del menu de navegación y de los elementos dentro del menu de navegación*/
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
});
```

### 1.4 JavaScript (modulo)

```js
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
```

---

## 2. Mostrar Reloj y Reproducir Alarma

### 2.1 HTML

```html
<section id="ejercicio2" class="ejercicio">
  <h2>Ejercicio 2</h2>
  <h2>Reloj Digital</h2>

  <!-- Se crea una <div> donde se ubicara el reloj digital -->
  <div id="clock"></div>

  <!-- Se crea una <div> donde se ubicaran los botones -->
  <div>
    <!-- Se crean los 4 botones requeridos -->
    <button id="activar-reloj">Iniciar reloj</button
    ><button id="desactivar-reloj">Detener Reloj</button
    ><button id="activar-alarma">Iniciar Alarma</button
    ><button id="desactivar-alarma">Detener Alarma</button>
  </div>
</section>
```

### 2.2 CSS

Este ejercicio no requiere código CSS

### 2.3 JavaScrip (main)

```js
/* Se importan las funciones "digitalClock" y "alarm" que existen en el archivo "ModuloEjercicio2.js" */
import { digitalClock, alarm } from "./ModuloEjercicio2.js";

/* Se crea un escuchador para todo el documento HTML el cual se activara en cuanto termine de cargar este documento */
d.addEventListener("DOMContentLoaded", (e) => {
  /* Al completarse la carga del documento se llama a la función importada "digitalClock" y como parámetros se agregan los id's d las etiquetas de los botones "Iniciar reloj", "Detener reloj" y la <div> que representa el espacio donde aparecerá el reloj */
  digitalClock("#clock", "#activar-reloj", "#desactivar-reloj");

  /* También se llama a la función importada "alarm" y como parámetros se agregan los id's d las etiquetas de los botones "Iniciar alarma", "Detener alarma" y la ubicación del archivo .mp3 que contiene el sonido de la alarma que se reproducirá */
  alarm(
    "assetsEjerciciosDOM/alarma de despertador.mp3",
    "#activar-alarma",
    "#desactivar-alarma"
  );
});
```

### 2.4 JavaScript (modulo)

```js
/* Se crean 3 variables: "d" almacena el objeto "document" para reducir el tamaño del código y hacerlo mas legible. "clockTempo" almacenara el temporizador que ejecutara la función de actualizar el reloj cada segundo. "alarmTempo" almacenara el temporizador que ejecutara la unción que reproduce el sonido de alarma */
const d = document;
let clockTempo;
let alarmTempo;

/* Se exporta la función "digitalClock" cuyos parámetros son la etiqueta <div> donde aparecerá el reloj, el botón "Iniciar reloj" y el botón "Detener reloj" */
export function digitalClock(clock, btnPlay, btnStop) {
  /* Se crea un escuchador de evento click para todo el documento HTML y si este coincide con el botón "Iniciar reloj", se activara la un temporizador almacenado en la variable "clockTempo" que se encarga de crear un reloj digital y actualizarlo a cada segundo, también se deshabilita el botón "Iniciar reloj" */
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);

      e.target.disabled = true;
    }

    /* Si el evento click coincide con el botón "Detener reloj" se anulara el temporizador creado en la variable "clockTempo", se eliminara la etiqueta <h3> donde se muestra el reloj haciendo que este se oculte y se habilita nuevamente el botón "Iniciar reloj" */
    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

/* Se exporta la función "alarm" cuyos parámetros son: la dirección donde esta almacenado el archivo .mp3 a reproducir, el botón "Iniciar Alarma" y el botón "Detener Alarma" */
export function alarm(sound, btnPlay, btnStop) {
  /* Se crea un elemento HTML de tipo <audio> y se almacena en la variable "soundAlarm", luego se le agrega el atributo "src" y este se le agrega la dirección del archivo .mp3 */
  const SoundAlarm = d.createElement("audio");
  SoundAlarm.src = sound;

  /* Se crea un escuchador de evento click para todo el documento HTML y si este coincide con el botón "Iniciar Alarma", se activara la un temporizador almacenado en la variable "alarmTempo" que se encarga de reproducir al archivo .mp3 pasados 100 milisegundos de presionar el botón, también se deshabilita el botón "Iniciar Alarma" */
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmTempo = setTimeout(() => {
        SoundAlarm.play();
      }, 100);
      e.target.disabled = true;
    }

    /* Si el evento click coincide con el botón "Detener Alarma" se anulara el temporizador creado en la variable "clockAlarm", se pausara la reproducción del archivo .mp3, se reiniciara el archivo .mp3 sin reproducirlo nuevamente y finalmente se rehabilitara el botón "Iniciar Alarma */
    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo);
      SoundAlarm.pause();
      SoundAlarm.currentTime = 0;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
```

---

## 3. Eventos de teclado y Colisiones

### 3.1 HTML

```html
<section id="ejercicio3" class="ejercicio">
  <h2>ejercicio 3</h2>
  <h2>Eventos de Teclado y ShortCuts Personalizados</h2>

  <!-- Se crea un <article> que representa el recuadro y dentro de el un <div> que representa el circulo -->
  <article class="stage">
    <div class="ball"></div>
  </article>
</section>
```

### 3.2 CSS

```css
/* Se le asigna al recuadro la propiedad "flex" para poder mover el circulo, también se le asigna tamaño y color */
.stage {
  display: flex;
  min-height: 50vh;
  background-color: var(--second-color);
}

/* Se le asigna tamaño, forma y color a la etiqueta <div> que representa el circulo */
.ball {
  margin: auto;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--main-color);
}
```

### 3.3 JavaScrip (main)

```js
/* Se importan las funciones "moveBall" y "shortcuts" presentes en el archivo "./ModuloEjercicio3.js" */
import { moveBall, shortcuts } from "./ModuloEjercicio3.js";

/* Se crea un escuchador del evento "keydown" para todo el documento el cual al presentarse ejecuta las funciones importadas, a la función "moveBall" se la pasan los argumentos: "e" que es el evento en si, ".ball" que es el <div> que representa el circulo y ".Stage" que representa el recuadro. A la función "shortcuts" se le pasa eel argumento "e" que es el evento en si */
d.addEventListener("keydown", (e) => {
  moveBall(e, ".ball", ".stage");
  shortcuts(e);
});
```

### 3.4 JavaScrip (modulo)

```js
/* Se crean 3 variable: la primera almacena el objeto "document" y las siguientes dos el desplazamiento que tendrá el circulo en x y y */
const d = document;
let x = 0;
let y = 0;

/* Se exporta la función moveBall cuyos parámetros son: el evento, la etiqueta del circulo y la etiqueta del recuadro */
export function moveBall(e, ball, stage) {
  /* Se crean las variables que almacenan los elementos HTML de el circulo y el recuadro */
  const domBall = d.querySelector(ball);
  const domStage = d.querySelector(stage);

  /* Se crean dos variables que almacenan los objetos "getBoundingClientRect" el cual genera las propiedades de posición y tamaño de el circulo y el recuadro */
  const limitsBall = domBall.getBoundingClientRect();
  const limitsStage = domStage.getBoundingClientRect();

  /* Se crea un condicional que se activara en caso de presionar alguna de las flechas del teclado, si esto ocurre se desactiva la función por defecto de estas teclas y si el circulo no esta colisionando con los bordes del recuadro, se actualiza el valor de la variable "x" o "y" según sea el caso */
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    if (limitsBall.left > limitsStage.left) {
      x--;
    }
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (limitsBall.top > limitsStage.top) {
      y--;
    }
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    if (limitsBall.right < limitsStage.right) {
      x++;
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (limitsBall.bottom < limitsStage.bottom) {
      y++;
    }
  }

  /* Se genera el atributo "style" a el elemento que representa el circulo y mediante la regla CSS "transform: translate(x, y)" se modifica la posición del circulo según el valor de las variables "x" y "y" */
  domBall.style.transform = `translate(${x}px, ${y}px)`;
}

/* Se exporta la función "shortcuts" cuyo parámetro es el evento como tal */
export function shortcuts(e) {
  /* Se crean los condicionales que se activaran si la combinación de teclas dada por el usuario es la indicada y generara la ventana emergente correspondiente, se debe tener en cuenta que las teclas "Alt", "Ctrl" y "Shift" tienen atributos especiales cuyos valores pueden ser "true" o "false" */
  if (e.key === "a" && e.altKey) {
    alert("Se ha presionado alt + a");
  }

  if (e.key === "c" && e.altKey) {
    confirm("Se ha presionado alt + c");
  }

  if (e.key === "p" && e.altKey) {
    prompt("Se ha presionado alt + p");
  }
}
```

---

## 4. Cuenta Regresiva

### 4.1 HTML

```html
<section id="ejercicio4" class="ejercicio">
  <h2>ejercicio 4</h2>
  <h2>Cuenta Regresiva</h2>

  <!-- Se crea un <div> donde aparecerá la cuenta regresiva y el mensaje final -->
  <div id="countDown"></div>
</section>
```

### 4.2 CSS

En este ejercicio no se usa código CSS

### 4.3 JavaScript (main)

```js
import countDown from "./ModuloEjercicio4.js";

/* Se crea escuchador que se activara a la carga del documento HTML */
d.addEventListener("DOMContentLoaded", (e) => {
  /* Al ejecutarse el evento se llama la función importada "countDown" cuyos parámetros son: el ID del elemento donde aparecerá el contador, la fecha limite en cualquiera de los formatos permitidos por JS y el mensaje que aparecerá cuando finalice la cuenta regresiva */
  countDown("countDown", "Dec 23, 2022 00:00:00", "Feliz Cumpleaños 😘");
});
```

### 4.4 JavaScript (modulo)

```js
const d = document;

export default function countDown(id, limitDate, finalMessage) {

/* Se crea una variable "domCountDown" que almacena el elemento HTML donde aparecerá el contador y la variable "countDownDate" que almacena los datos de la fecha objetivo en milisegundos */
const domCountDown = d.getElementById(id);
  const countDownDate = new Date(limitDate).getTime();

/* Se crea un  temporizador donde se ejecutara la lógica de la cuenta regresiva y actualizara los datos cada segundo */
  let countDownTempo = setInterval(() => {

    Se crean la variable "now" que almacena los datos del momento actual y la variable "limitTime" que almacena la diferencia entre el momento actual y la fecha objetivo
    let now = new Date().getTime();
    let limitTime = countDownDate - now;

    /* se crean variables para almacenarlos días, horas, minutos y segundos restantes hasta la fecha objetivo. el dato de horas se toma del residuo del dato de Dias, el dato de minutos se toma del residuo del dato horas y asi sucesivamente. Se agrega un "0" en formato de texto que sera agregado si alguno de los datos tiene un solo dígito y sera recortado en caso contrario */
    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
    let hours = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2);
    let minutes = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2);
    let seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(
      -2
    );

    /* Se imprime el contador dentro de una etiqueta <h3>, hija del elemento almacenado en la variable "domCountDown" */
    domCountDown.innerHTML = `<h3>Faltan: ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para mi cumple años</h3>`;

    /* En el momento en que se alcanza o supera la fecha limite se elimina el temporizador y se remplaza el contenido de la etiqueta <h3> eliminando el contador y mostrando el mensaje final */
    if (limitTime < 0) {
      clearInterval(countDownTempo);
      domCountDown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}
```

---

## 5. Botón de Scroll Top

### HTML

En este ejercicio, teniendo en cuenta que el botón creado se mostrara casi permanentemente y no depende de la posición del espacio dispuesta para el ejercicio 5, no se creara dentro de la estructura <section> en la que se encuentran los demás ejercicios sino que se alojara directamente como hijo de la etiqueta <body> justo antes de la etiqueta <scrip> al final del documento

```html
<!-- Se crea un botón cuyo contenido es un emoji de código "&#11014;" -->
<button class="scroll-top-btn hidden">&#11014;</button>
```

### CSS

```css
/* Se le dan estilos al botón como: posición estática, que se muestre sobre otros
    elementos, posición en la pantalla, forma, colores, que se muestre el
    cursor de click y animación */
.scroll-top-btn {
  position: fixed;
  z-index: 999;
  bottom: 1vh;
  right: calc(4.25rem + 1vw);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: bolder;
  background-color: var(--main-color);
  color: var(--second-color);
  outline: 0;
  border: 0;
  cursor: pointer;
  transition: all 0.5s ease-out;
}

/* Se le modifica el color al botón cuando tendrá el cursor posicionado sobre el */
.scroll-top-btn:hover {
  background-color: var(--second-color);
  color: var(--main-color);
}

/* Se agregan estilos para hacer que el botón aparezca y desaparezca */
.hidden {
  visibility: hidden;
  opacity: 0;
}
```

### JavaScript (main)

```js
import scrollTopButton from "./ModuloEjercicio5.js";

d.addEventListener("DOMContentLoaded", (e) => {
  /* Una vez el documento HTML a cargado, se llama la función "scrollTopButton" cuyo parámetro es la clase del botón en cuestión */
  scrollTopButton(".scroll-top-btn");
});
```

### JavaScript (modulo)

```js
const d = document;
const w = window;

export default function scrollTopButton(btn) {
  /* Se crea la variable que almacena el elemento HTML del botón */
  const domScrollBtn = d.querySelector(btn);

  /* Se agrega un escuchador al evento "scroll" del objeto "window" */
  w.addEventListener("scroll", (e) => {
    /* Se obtiene el valor del scroll en pixeles */
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    /* Si el valor del scroll es mayor a 300px se muestra el botón eliminando la clase que lo oculta, en caso contrario se muestra el botón */
    if (scrollTop > 300) {
      domScrollBtn.classList.remove("hidden");
    } else {
      domScrollBtn.classList.add("hidden");
    }
  });

  /* se crea un escuchador del evento "click" y si este coincide con el botón se invoca el método "scrollTo" que cuelga del objeto "window". el parámetro de este método es un objeto con 3 atributos: la forma de desplazamiento y el valor del scroll a donde dirigirá el botón en Y y en X */
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
```

---

## 6. Botón de tema Oscuro y Local Storage

### 6.1 HTML

```html
<!-- Se crean un meta attribute de nombre "data-dark", este meta attribute se le agrega a las etiquetas a las que se les desea hacer el cambio a tema oscuro, en este caso solo se aplica a la etiqueta body para que se modifique el color de fondo general y el color de la letra -->
<body data-dark></body>

<!-- Se crea un botón como hijo directo le elemento <body> cuya clase es "dark-theme-btn" y su contenido por defecto es una luna -->
  <button class="dark-theme-btn">🌑</button>
</body>
```

### 6.2 CSS

```css
/* A este botón se le aplican los mismos estilos de color geometría posición y hover que el del ejercicio anterior con la diferencia de posición de derecha a izquierda */
.dark-theme-btn {
  position: fixed;
  z-index: 999;
  bottom: 1vh;
  left: 1vw;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: bolder;
  background-color: var(--main-color);
  color: var(--second-color);
  outline: 0;
  border: 0;
  cursor: pointer;
  transition: all 0.5s ease-out;
}

.dark-theme-btn:hover {
  background-color: var(--second-color);
  color: var(--main-color);
}

/* Para generar el tema oscuro se invierten el color principal y el secundario  */
.dark-mode {
  background-color: var(--second-color);
  color: var(--main-color);
}
```

### 6.3 JavaScript (main)

```js
import darkTheme from "./ModuloEjercicio6.js";

/* Debido a que la función importada "darkTheme" tiene internamente un escuchador del evento "DOMContentLoaded", esta función se llama directamente en el archivo .JS principal */
darkTheme(".dark-theme-btn", "dark-mode");
```

### 6.4 JavaScript (modulo)

```js
/* Se crea una variable para almacenar el objeto "document" y otra para el objeto "localStorage" */
const d = document;
const ls = localStorage;

/* Se exporta la función "darkTheme" cuyos atributos son el botón que activa el tema oscuro y el nombre de la clase que se aplica al entrar en modo oscuro */
export default function darkTheme(btn, classDark) {
  /* Se crean variables para almacenar el elemento HTML del botón, los elementos HTML que tienen el meta attribute "data-dark" y el texto que tendrá el botón en tema claro y oscuro */
  const domThemeBtn = d.querySelector(btn);
  const domSelectores = d.querySelectorAll("[data-dark]");
  let moon = "🌑";
  let sun = "☀️";

  /* Se crea una función que eliminara el tema oscuro al ser ejecutada removiendo la clase "classDark" de los elementos HTML almacenados en la variable "somSelectores" y modificando el texto del botón */
  const lightMode = () => {
    domSelectores.forEach((el) => {
      el.classList.remove(classDark);
    });
    domThemeBtn.textContent = moon;

    /* Se modifica el valor de la variable "theme", almacenada en el local storage por "light" */
    ls.setItem("theme", "light");
  };

  /* Se crea una función que generara el tema oscuro al ser ejecutada agregando la clase "classDark" a los elementos HTML almacenados en la variable "domSelectores" y modificando el texto del botón */
  const darkMode = () => {
    domSelectores.forEach((el) => {
      el.classList.add(classDark);
    });
    domThemeBtn.textContent = sun;

    /* Se modifica el valor de la variable "theme", almacenada en el local storage por "dark" */
    ls.setItem("theme", "dark");
  };

  /* Se crean un escuchador del evento click, si este coincide con el botón de tema oscuro se ejecuta un segundo condicional, en donde, si el texto del botón es el de la variable "moon" se ejecuta la función "darkMode", en caso contrario se ejecuta la función "lightMode" */
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if (domThemeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  /* Se crea un escuchador del evento "DOMContentLoaded", cuando se presenta este evento se ejecutan tres condicionales */
  d.addEventListener("DOMContentLoaded", (e) => {
    /* Se lee la variable "theme" del local storage y si esta no existe, se crea con el valor "light" */
    if (ls.getItem("theme") === null) {
      ls.setItem("theme", "light");
    }

    /* Se lee la variable "theme" del local storage y si esta tiene el valor "light", se ejecuta la función "lightMode" */
    if (ls.getItem("theme") === "light") {
      lightMode();
    }

    /* Se lee la variable "theme" del local storage y si esta tiene el valor "dark", se ejecuta la función "darkMode" */
    if (ls.getItem("theme") === "dark") {
      darkMode();
    }
  });
}
```

---

## 7. Responsive con JavaScript

### 7.1 HTML

```html
<section id="ejercicio7" class="ejercicio">
  <h2>ejercicio 7</h2>
  <h2>Responsive con JavaScript</h2>

  <!-- Se crean dos <div>, en una se posicionara el video de youtube o su enlace y en la segunda se posicionara el mapa o su enlace -->
  <div id="youtube"></div>
  <div id="gmaps"></div>
</section>
```

### 7.2 CSS

Para este ejercicio no se utiliza código CSS

### 7.3 JavaScript (main)

```js
import responsiveMedia from "./ModuloEjercicio7.js";

/* Se crea un escuchador de carga del documento HTML, al ocurrir el evento se ejecuta la función importada "responsiveMedia" dos veces con diferentes parámetros, una por cada elemento a agregar. Los parámetros que se envían a la función son: el id del elemento HTML a modificar, el ancho al que se cambiara de visualización (móvil o desktop), el enlace que se vera en la version móvil, el <iframe> que fue extraído de la fuente del contenido y que se mostrara en la version desktop */
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
```

### 7.4 JavaScript (modulo)

```js
const d = document;
const w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  /* Se crea una variable donde se almacena la media query que determina el punto de ancho en donde cambia el contenido a móvil o desktop */
  let breakPoint = w.matchMedia(mq);

  /* Se crea una función dentro de la cual: si el evento de redimensionamiento genera un ancho mayor al limite, se muestra el contenido desktop, de lo contrario se muestra el contenido móvil */
  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };

  /* Se crea un escuchador de la media query, este evento es similar al de redimensionamiento */
  breakPoint.addListener(responsive);

  /* en el momento en que el documento HTML se carga, se ejecuta la función "responsive" determinando si inicialmente se muestra el contenido móvil o desktop */
  responsive(breakPoint);
}
```

---

## 8. Responsive Tester

### 8.1 HTML

```html
<section id="ejercicio8" class="ejercicio">
  <h2>ejercicio 8</h2>
  <h2>Responsive Tester</h2>

  <!-- Se crea un formulario con us espacio de URLpara pegar el enlace de la pagina a
  evaluar, dos espacios de texto para introducir ancho y alto de la pagina a
  evaluar y dos botones, uno de probar que funciona de submit y una de cerrar que cierra la pagina abierta  -->
  <form id="responsive-tester">
    <input name="direction" type="url" placeholder="URL" required />
    <br />
    <input name="ancho" type="text" placeholder="ANCHO" required />
    <br />
    <input name="alto" type="text" placeholder="ALTO" required />
    <br />
    <input name="probar" type="submit" value="Probar" />
    <input name="cerrar" type="button" value="Cerrar" />
  </form>
</section>
```

### 8.2 CSS

En este ejercicio no se requiere código CSS

### 8.3 JavaScript (main)

```js
import responsiveTester from "./ModuloEjercicio8.js";

/* Se crea un escuchador de carga del documento HTML, al presentarse el evento se llama la función importada "responsiveTester" cuyo único argumento es el id del formulario */
d.addEventListener("DOMContentLoaded", (e) => {
  responsiveTester("responsive-tester");
});
```

### 8.4 JavaScript (modulo)

```js
const d = document;

export default function responsiveTester(form) {
  /* Se crea una variable que almacena el formulario y una que almacenara la ventana emergente */
  const domForm = d.getElementById(form);
  let tester;

  /* Una vez se de el evento submit, es decir, el click en el botón "Probar", se comprueba que el evento se haya generado desde el botón creado dentro del formulario correspondiente a este ejercicio, si es asi, se evita que el contenido del formulario se almacene en la URL del sitio, luego se genera la ventana emergente con el método "window.open" y esta se enlaza a la variable "tester", este método recibe como parámetros la URL que se abrirá y que es extraída del formulario, un nombre para la nueva ventana y un parámetro opcional que en este caso es el tamaño de la nueva ventana */
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

  /* Se crea un escuchador al evento click, si este coincide con el botón "cerrar" dentro del formulario, se cerrara la ventana nueva enlazada en la variable "tester" */
  d.addEventListener("click", (e) => {
    if (e.target === domForm.cerrar) {
      tester.close();
    }
  });
}
```

---

## 9. Detección de Dispositivos de Usuario (User Agent)

### 9.1 HTML

```html
<section id="ejercicio9" class="ejercicio">
  <h2>ejercicio 9</h2>
  <h2>Detección de Dispositivo de Usuario (User Agent)</h2>

  <!-- Se crea una div donde se mostrara el contenido del ejercicio -->
  <div id="user-device"></div>
</section>
```

### 9.2 CSS

En este ejercicio no se usa código CSS

### 9.3 JavaScript (main)

```js
import userDeviceInfo from "./ModuloEjercicio9.js";

/* Al darse la carga del documento HTML, se ejecuta la función importada "userDeviceInfo" cuyo parámetro es el id del espacio donde se mostrara el contenido */
d.addEventListener("DOMContentLoaded", (e) => {
  userDeviceInfo("user-device");
});
```

### 9.4 JavaScript (modulo)

```js
/* Se crean variables para reducir el texto del código */
const d = document;
const n = navigator;
const ua = n.userAgent;

export default function userDeviceInfo(id) {
  /* Se crea una variable donde se almacena el elemento donde se mostrara el contenido */
  const domId = d.getElementById(id);

  /* Se crean tres objetos, estos objetos contienen validaciones para determinar por medio del texto del User Agent que dispositivo, sistema operativo y navegador esta usando el usuario */
  const isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipad|ipod/i),
    windows: () => ua.match(/windows phone/i),
    any: function () {
      return this.android() || this.ios() || this.windows();
    },
  };

  const isDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows();
    },
  };

  const isBrowser = {
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera|opera mini/i),
    ie: () => ua.match(/msi|iemobile/i),
    edge: () => ua.match(/edge/i),
    any: function () {
      return (
        this.ie() ||
        this.edge() ||
        this.chrome() ||
        this.safari() ||
        this.firefox() ||
        this.opera()
      );
    },
  };

  /* Se inserta el texto de User Agent, plataforma y navegador dentro de una lista. Para determinar el navegador se usa un condicional en donde si se da alguna de las validaciones del objeto "isMobile" retorna la que resulto positiva */
  domId.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
  </ul>
  `;

  /* Se crean 3 condicionales para determinar el navegador y el sistema operativo usado por el usuario */
  if (isBrowser.chrome()) {
    domId.innerHTML += `<p><mark>Este contenido es exclusivo para Chrome</mark></p>`;
  } else if (isBrowser.firefox()) {
    domId.innerHTML += `<p><mark>Este contenido es solo para los usuarios de Firefox</mark></p>`;
  } else if (isBrowser.safari()) {
    domId.innerHTML += `<p><mark>Este contenido es solo para los usuarios de Safari</mark></p>`;
  }

  if (isDesktop.linux()) {
    domId.innerHTML += `<p><i>Saludando a la gente de <b>Linux</b></i></p>`;
  } else if (isDesktop.windows()) {
    domId.innerHTML += `<p><i>Saludando a la gente de <b>Windows</b></i></p>`;
  } else if (isDesktop.mac()) {
    domId.innerHTML += `<p><i>Saludando a la gente de <b>Mac</b></i></p>`;
  }

  /* Se crea un condicional que redireccionará al usuario a otro sitio en caso de que se acceda desde un dispositivo Android */
  if (isMobile.android()) {
    window.location.href = "https://github.com/CamiloGilFranco";
  }
}
```

---

## 10. Conexión y Desconexión

### 10.1 HTML

```html
<!-- El espacio donde aparecerá el mensaje de conexión se creara dinámicamente como hijo de <body> -->
<section id="ejercicio10" class="ejercicio">
  <h2>ejercicio 10</h2>
  <h2>Conexión y Desconexión</h2>
</section>
```

### 10.2 CSS

```css
/* Se asignan a los dos mensajes estilos de posición, tamaño, geometría, letra y colores */
.online,
.offline {
  position: fixed;
  display: block;
  width: 100%;
  top: 0;
  z-index: 1000;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  background-color: #1b5e20;
  color: #fff;
}

/* Por cascada se elimina el color verde de fondo al mensaje de conexión perdida y se asigna fondo de color rojo */
.offline {
  background-color: #b71c1c;
}
```

### 10.3 JavaScript (main)

```js
import networkStatus from "./ModuloEjercicio10.js";

/* Se llama directamente la función "networkStatus" sin depender de ningún evento */
networkStatus();
```

### 10.4 JavaScript (modulo)

```js
const d = document;
const w = window;
const n = navigator;

export default function networkStatus() {
  /* Dentro de la función exportada se crea una segunda función la cual crea dinámicamente un elemento <div> */
  const isOnLine = () => {
    const domDiv = d.createElement("div");

    /* Si el atributo "onLine" que cuelga del objeto "navigator" es "true", se agrega el mensaje "conexión establecida" al <div> creado, se le agrega la clase "online" y se elimina la clase "offline". De lo contrario, El mensaje sera "conexión perdida", se agrega la clase "offline" y se retira la clase "online" */
    if (n.onLine) {
      domDiv.textContent = "Conexión Restablecida";
      domDiv.classList.add("online");
      domDiv.classList.remove("offline");
    } else {
      domDiv.textContent = "Conexión perdida";
      domDiv.classList.add("offline");
      domDiv.classList.remove("online");
    }

    /* Se agrega el nuevo elemento <div> como hijo de <body> */
    d.body.appendChild(domDiv);

    /* Luego de 2 segundos se elimina el nuevo elemento <div> */
    setTimeout(() => d.body.removeChild(domDiv), 2000);
  };

  /* Se crea un escuchador para el evento "online" y uno para el evento "offline", con cualquiera de los dos eventos se llama a la función "isOnLine" */
  w.addEventListener("online", (e) => isOnLine());
  w.addEventListener("offline", (e) => isOnLine());
}
```

---

## 11. Detección de Web Cam

### 11.1 HTML

```html
<section id="ejercicio11" class="ejercicio">
  <h2>ejercicio 11</h2>
  <h2>Detección de Web Cam</h2>
  <video src="" id="webcam"></video>
</section>
```

### 11.2 CSS

En ese ejercicio no se usa código CSS

### 11.3 JavaScript (main)

```js
import webCam from "./ModuloEjercicio11.js";

/* Se ejecuta la función importada "webCam" una vez ha cargado el documento HTML */
d.addEventListener("DOMContentLoaded", (e) => {
  webCam("webcam");
});
```

### 11.4 JavaScript (modulo)

```js
const d = document;
const n = navigator;

export default function webCam(id) {
  /* Se guarda en una variable el elemento HTML con el id recibido como parámetro y que corresponde a la etiqueta <video> en que se mostrara el contenido de la web cam  */
  const domVideo = d.getElementById(id);

  /* Se valida que el navegador del usuario cuente con el método "navigator.mediaDevices.getUserMedia" */
  if (n.mediaDevices.getUserMedia) {
    /* Se ejecuta el método "navigator.mediaDevices.getUserMedia", este método en si es una promesa por lo tanto su parámetro es un objeto que a su vez tiene los atributos "video" y "audio" y sus valores pueden ser "true" o "false" */
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })

      /* Al obtener los valores de la promesa, se usa el método "then" para dar funcionalidad a estos valores. Primero, se le da al elemento <video> el atributo "srcObject" para que el recurso del video sea el objeto de la promesa, es decir, lo que muestre la cámara. Luego se agrega el método "play" para que muestre en tiempo real el contenido de la web cam y no una imagen fija */
      .then((stream) => {
        domVideo.srcObject = stream;
        domVideo.play();
      })

      /* Se usa el método "catch" para que en el momento que se presente un error este sea capturado y se muestre como un hermano adyacente del elemento <video> */
      .catch((err) => {
        domVideo.insertAdjacentHTML(
          "beforebegin",
          `<p>Ocurrió el error: <mark>${err}</mark></p>`
        );
      });
  }
}
```

---

## 12. Geolocalización

### 12.1 HTML

```html
<section id="ejercicio12" class="ejercicio">
  <h2>ejercicio 12</h2>
  <h2>Geolocalización</h2>

  <!-- se crea un <div> vació con el id "geolocation" -->
  <div id="geolocation"></div>
</section>
```

### 12.2 CSS

En este ejercicio no se usa código CSS

### 12.3 JavaScript (main)

```js
import getGeolocation from "./ModuloEjercicio12.js";

/* Al cargar el documento HTML se llama la función importada "getGeolocation" */
d.addEventListener("DOMContentLoaded", (e) => {
  getGeolocation("geolocation");
});
```

### 12.3 JavaScript (modulo)

```js
const d = document;
const n = navigator;

export default function getGeolocation(id) {
  /* Se guarda el elemento HTML donde se mostrara la información */
  const domId = d.getElementById(id);

  /* Se usa el método "navigator.geolocation.getCurrentPosition" para obtener la posición actual. Este método recibe 3 parámetros: una función a ejecutar si la lectura es exitosa, una función a ejecutar si la lectura no es exitosa y un objeto de opciones */
  n.geolocation.getCurrentPosition(success, error, options);

  /* Se crea el objeto de opciones que contiene 3 de ellas: habilitar la lata precision de lectura, el tiempo de lectura y borrar la lectura anterior cuando se haga una nueva */
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  /* Se crea la función de éxito donde se extrae del objeto "position.coords", generado al hacer correctamente la lectura, "position.coords.latitude", "position.coords.longitude" y "position.coords.accuracy" para conocer la latitud, longitud y precision respectivamente */
  const success = (position) => {
    let coords = position.coords;

    /* Se genera un código HTML que sera insertado al sitio y que contiene la información requerida */
    domId.innerHTML = `
    <p>Tu posición actual es :</p>
    <ul>
      <li>Latitud: <b>${coords.latitude}</b> </li>
      <li>Longitud: <b>${coords.longitude}</b> </li>
      <li>Precisión: <b>${coords.accuracy} Metros</b> </li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `;
  };

  /* Se crea la función de error de lectura la cual genera un mensaje con el código de error y su mensaje */
  const error = (err) => {
    domId.innerHTML = `<p>Se presento el error: <mark>${err.code} - ${err.message}</mark></p>`;
  };
}
```

---

## 13. Filtro de Búsqueda

### 13.1 HTML

```html
<section id="ejercicio13" class="ejercicio">
  <h2>ejercicio 13</h2>
  <h2>Filtro de Búsqueda</h2>

  <!-- Se crea un input de búsqueda -->
  <input type="search" placeholder="Buscar..." class="card-filter" />

  <!-- Se crea un <article>, donde estarán posicionadas la tarjetas que a su vez están en una etiqueta <figure> y se componen de la imagen como tal y el titulo  -->
  <article class="cards">
    <figure class="card">
      <img src="https://placeimg.com/200/200/tech" alt="Tech" />
      <figcaption>Tech</figcaption>
    </figure>

    <figure class="card">
      <img src="https://placeimg.com/200/200/animals" alt="Animals" />
      <figcaption>Animals</figcaption>
    </figure>

    <figure class="card">
      <img src="https://placeimg.com/200/200/people" alt="People" />
      <figcaption>People</figcaption>
    </figure>

    <figure class="card">
      <img src="https://placeimg.com/200/200/arch" alt="Arch" />
      <figcaption>Arch</figcaption>
    </figure>

    <figure class="card">
      <img src="https://placeimg.com/200/200/nature" alt="Nature" />
      <figcaption>Nature</figcaption>
    </figure>

    <figure class="card">
      <img src="https://placeimg.com/200/200/any" alt="Any" />
      <figcaption>Any</figcaption>
    </figure>
  </article>
</section>
```

### 13.2 CSS

```css
/* Se crea una grilla donde aparecerán las tarjetas determinando el tamaño de la celdas*/
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* Se da color y animación a las tarjetas */
.card {
  background-color: var(--second-color);
  color: var(--main-color);
  transition: all 0.3s ease-out;
}

/* Se da tamaño a las imágenes de las tarjetas */
.card img {
  width: 100%;
  height: auto;
}

/* Se agrega padding al titulo de las tarjetas */
.card figcaption {
  padding: 1rem;
}

/* Se ocultaran las tarjetas a las que se les agregue la clase "filter" */
.filter {
  visibility: hidden;
  opacity: 0;
  order: 1;
}
```

### 13.3 JavaScript (main)

```js
import searchFilters from "./ModuloEjercicio13.js";

/* Una vez cargado el documento HTML, se llama la función importada "searchFilter" cuyos parámetros son: la clase que identifica el input de búsqueda y la clase que identifica cada tarjeta */
d.addEventListener("DOMContentLoaded", (e) => {
  searchFilters(".card-filter", ".card");
});
```

### 13.4 JavaScript (modulo)

```js
const d = document;

export default function searchFilters(input, selector) {
  /* Se genera un escuchador del evento key up, si al darse este evento algo es escrito en el input de búsqueda, se hace una iteración de los elementos que tengan la clase almacenada en la variable "selector" */
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      d.querySelectorAll(selector).forEach((el) => {
        /* Si el escuchador del evento key up detecta que se presiono la tecla "ESC" se elimina el texto contenido en el input de búsqueda */
        if (e.key == "Escape") {
          e.target.value = "";
        }

        /* Se convierte el texto del input a minúsculas y si este texto coincide con un texto contenido en alguna de las tarjetas, se elimina la clase que oculta la tarjeta, de lo contrario la tarjeta se muestra */
        el.textContent.toLowerCase().includes(e.target.value)
          ? el.classList.remove("filter")
          : el.classList.add("filter");
      });
    }
  });
}
```

---

## 14. Sorteo Digital

### 14.1 HTML

```html
<section id="ejercicio14" class="ejercicio">
  <h2>ejercicio 14</h2>
  <h2>Sorteo Digital</h2>

  <!-- Se crea una lista con los participantes del sorteo -->
  <ul class="players">
    <li class="player">PHP</li>
    <li class="player">JAVASCRIPT</li>
    <li class="player">JAVA</li>
    <li class="player">C</li>
    <li class="player">PYTHON</li>
    <li class="player">RUBY</li>
    <li class="player">GO</li>
    <li class="player">VISUAL BASIC</li>
    <li class="player">RUST</li>
    <li class="player">PERL</li>
  </ul>
  <button id="winner-btn">Obtener Ganador</button>
</section>
```

### 14.2 CSS

En este ejercicio no se usa código CSS

### 14.3 JavaScript (main)

```js
import draw from "./ModuloEjercicio14.js";

/* A la carga del documento HTML se llama la función "draw" cuyos argumentos son: el id de la lista de jugadores y la clase que identifica a un elemento como jugador */
d.addEventListener("DOMContentLoaded", (e) => {
  draw("#winner-btn", ".player");
});
```

### 14.3 JavaScript (modulo)

```js
const d = document;

export default function draw(btn, selector) {
  /* Se crea la función "getWinner" la cual extrae todos los jugadores, genera un numero aleatorio de 0 hasta el numero de jugadores, extrae el nombre del ganador y lo retorna dentro de un mensaje */
  const getWinner = (selector) => {
    const domPlayers = d.querySelectorAll(selector);
    const random = Math.floor(Math.random() * domPlayers.length);
    const winner = domPlayers[random];

    return `El ganador es: ${winner.textContent}`;
  };

  /* Se crea un escuchador del evento click, si este coincide con el botón "Obtener Ganador" se dispara una alerta con el mensaje retornado en la función anterior */
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
    }
  });
}
```

---

## 15. Carrusel Responsivo

### 15.1 HTML

```html
<section id="ejercicio15" class="ejercicio">
  <h2>ejercicio 15</h2>
  <h2>Carrusel Responsivo</h2>

  <!-- Se crean un <div> de clase "slider" que delimita el espacio del carrusel, dentro de este se crean dos <div>, la primera es donde se muestran los slides y la segunda es donde se muestran los botones, finalmente, dentro del <div> que mostrara los slides, se crean 4 <div> cada uno con un slide en su interior sea una imagen o un texto -->
  <div class="slider">
    <div class="slider-slides">
      <div class="slider-slide active">
        <img src="https://placeimg.com/400/400/animals" alt="" />
      </div>

      <div class="slider-slide">
        <h4>Diapositiva 2</h4>
        <p>
          Fragmento de un escrito con unidad temática, que queda diferenciado
          del resto de fragmentos por un punto y aparte y generalmente también
          por llevar letra mayúscula inicial y un espacio en blanco en el margen
          izquierdo de alineación del texto principal de la primera línea.
        </p>
      </div>

      <div class="slider-slide">
        <img src="https://placeimg.com/400/400/nature" alt="" />
      </div>

      <div class="slider-slide">
        <h4>Diapositiva 4</h4>
        <p>
          El verso es una de las unidades en las que puede dividirse un poema,
          superior generalmente al pie y superior a la estrofa. En la literatura
          en lenguas romances, los testimonios en verso preceden a los
          testimonios en prosa
        </p>
      </div>
    </div>

    <div class="slider-btns">
      <a href="#" class="prev">&laquo;</a>
      <a href="#" class="next">&raquo;</a>
    </div>
  </div>
</section>
```

### 15.2 CSS

```css
/* Se le asigna tamaño y posición al contenedor del carrusel */
.slider {
  position: relative;
  width: 80%;
  margin: 1rem auto;
  text-align: center;
}

/* Se le da tamaño al contenedor de los slides para que se ocupe todo el espacio del carrusel */
.slider-slides {
  position: relative;
  height: 400px;
}

/* Se le da posición y tamaño a cada slide, también se ocultan */
.slider-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s ease;
}

/* Se le da tamaño y posición a las imágenes que estarán en los slides, se usa "object-fit: cover" para hacer las imágenes responsivas */
.slider-slide img {
  height: inherit;
  width: inherit;
  object-fit: cover;
  object-position: 50% 50%;
}

/* se quita la propiedad de oculto al slide que tenga la clase "active" */
.slider-slide.active {
  opacity: 1;
  visibility: visible;
}

/* Se le da posición y tamaño a los botones */
.slider-btns {
  position: absolute;
  width: 100%;
  top: 50%;
  display: flex;
  justify-content: space-between;
  font-size: 3rem;
  font-weight: bold;
}

/* Se le da tamaño y color a los enlaces que en si son los botones */
.slider a {
  display: block;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: thin solid black;
  text-decoration: none;
  background-color: #fff;
  color: #000;
  transition: all 0.3s ease;
}

/* al posicionar el cursor sobre los enlaces estos cambiaran de color */
.slider a:hover {
  color: #4d4d4d;
}
```

### 15.3 JavaScript (main)

```js
import slider from "./ModuloEjercicio15.js";

/* A la carga del documento HTML se llama la función "slider" la cual no tiene parámetros */
d.addEventListener("DOMContentLoaded", (e) => {
  slider();
});
```

### 15.4 JavaScript (modulo)

```js
const d = document;

export default function slider() {
  /* Se crean variables donde se almacenan los elementos HTML: el botón siguiente, el botón anterior y un objeto con todos los elementos cuya clase sea "slider-slide" es decir, cada slide */
  const domNextBtn = d.querySelector(".slider-btns .next");
  const domPrevBtn = d.querySelector(".slider-btns .prev");
  const domSlides = d.querySelectorAll(".slider-slide");

  /* Se crean una variable de control */
  let i = 0;

  /* Se crea un escuchador del evento click y si este coincide con el botón anterior, se retira la clase "active" del slide actual, se resta 1 a la variable de control, si la variable de control es menor a 0 se le asigna el valor del ultimo slide, se le agrega la clase "active" a al slide que coincida con la variable de control haciéndolo visible */
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

    /* si eel evento click coincide con el botón siguiente, se retira la clase "active" del slide actual, se suma 1 a la variable de control, si la variable de control es mayor o igual a la cantidad de slides se le asigna 0 a la variable de control, se le agrega la clase "active" a  al slide que coincida con la variable de control haciéndolo visible */
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
```

---

## 16. Scroll Spy

### 16.1 HTML

```html
<!-- Se agrega el metadato "data.scroll.spy" a todos los elementos <a> del menu, asi como a los elementos <section> que delimitan cada ejercicio -->
<a href="#ejercicio16" data-scroll-spy>ejercicio 16 - Scroll Spy</a>

<section id="ejercicio16" class="ejercicio" data-scroll-spy>
  <h2>ejercicio 16</h2>
  <h2>Scroll Spy</h2>
</section>
```

### 16.2 CSS

```css
/* Se crea una media query que modificara los estilos si el ancho de la pagina es mayor a 1024px */
@media screen and (min-width: 1024px) {
  /* Se agrega un grid de dos filas y dos columnas donde la primera fila sera la cabecera, la segunda fila primera columna sera el contenido y segunda fila segunda columna sera el menu */
  body {
    display: grid;
    grid-template-columns: 80% 20%;
    grid-template-rows: 4rem auto;
    grid-template-areas:
      "header header"
      "main   panel";
  }

  /* Se da tamaño al elemento <main> */
  main {
    grid-area: main;
  }

  /* Se da tamaño al elemento header */
  .header {
    grid-area: header;
  }

  /* Se da tamaño posición colores y visibilidad al panel del menu */
  .panel {
    grid-area: panel;
    align-self: start;
    position: sticky;
    top: 4rem;
    justify-content: flex-start;
    background-color: var(--second-color);
    transform: translate(0, 0);
    opacity: 1;
    visibility: visible;
  }

  /* Se oculta el botón hamburguesa */
  .panel-btn {
    display: none;
  }

  /* Se elimina la justificación anterior y se justifica a la derecha */
  .menu {
    justify-content: start;
    text-align: right;
  }

  /* Se da tamaño y espaciado a los textos del menu */
  .menu a {
    font-size: 1rem;
    padding: 0.75rem;
  }

  /* Se modifica el color de cada elemento en estado hover y cuando se agrega la clase "active" */
  .menu a:hover,
  .menu a.active {
    color: var(--second-color);
    background-color: var(--main-color);
  }

  /* Se modifica la posición del botón de scroll top de la derecha a la izquierda */
  .scroll-top-btn {
    right: initial;
    left: calc(4.25rem + 1vw);
  }
}
```

### 16.3 JavaScript (main)

```js
import scrollSpy from "./ModuloEjercicio16.js";

/* Se ejecuta la función importada a la carga del documento HTML */
d.addEventListener("DOMContentLoaded", (e) => {
  scrollSpy();
});
```

### 16.4 JavaScript (modulo)

```js
const d = document;

export default function scrollSpy() {
  /* se guarda un objeto con todos los elementos <section> que tengan el meta dato "data-scroll-spy" */
  const domSections = d.querySelectorAll("section[data-scroll-spy");

  /* Se crea una instancia de "IntersectionObserver", esta función permite detectar el contenido que es mostrado en el view port y recibe 2 argumentos: el primero es una función call back que se ejecutara cuando se muestren elementos específicos en el view port y el segundo es un objeto de opciones donde se ajusta la tolerancia d visibilidad de cada elemento */
  const observer = new IntersectionObserver(cb, {
    threshold: [0.5, 0.75],
  });

  /* Se crea la función call back que recibe como argumento todas los elementos que serán visibles por la instancia "IntersectionObserver" */
  const cb = (entries) => {
    /* Por cada entrada que se genere, se obtiene el id de el elemento, y se crea un condicional donde se usa el método "isIntersecting", este retorna un true si el elemento se encuentra visible en el view port, si esta condición se cumple se agrega la clase "active" al correspondiente elemento del menu, de lo contrario se retira esta clase */
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");

      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  /* Se ejecuta el escuchador de intersección almacenado en la variable "observer" */
  domSections.forEach((el) => observer.observe(el));
}
```

---

## 17. Video Inteligente

### 17.1 HTML

```html
<section id="ejercicio17" class="ejercicio" data-scroll-spy>
  <h2>ejercicio 17</h2>
  <h2>Video Inteligente</h2>

  <!-- Se crea un elemento <video> el cual inicia muteado, se muestran los controles de reproducción, se reproduce en bucle y se le agrega el meta dato "data-smart-video -->
  <video
    src="./assetsEjerciciosDOM/video.mp4"
    muted
    controls
    loop
    data-smart-video
  ></video>
</section>
```

### 17.2 CSS

En este ejercicio no se usa código CSS

### 17.3 JavaScript (main)

```js
import smartVideo from "./ModuloEjercicio17.js";

/* se llama la función importada "smartVideo" a la carga del documento HTML */
d.addEventListener("DOMContentLoaded", (e) => {
  smartVideo();
});
```

### 17. JavaScript (modulo)

```js
const d = document;
const w = window;

export default function smartVideo() {
  /* Se almacenan todos los elementos de video que tengan el meta dato "data-smart-video" */
  const domVideos = d.querySelectorAll("video[data-smart-video]");

  /* Se crea la función call back parámetro de "IntersectionObserver", esta función permite que al mostrarse uno de los elementos de la variable "domVideos" se reproduzca el video que contiene y de lo contrario se detenga */
  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      /* Se agrega un escuchador para que cuando la ventana o pestaña del sitio pierda el foco se detenga el video */
      w.addEventListener("visibilitychange", (e) =>
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause()
      );
    });
  };

  /* Se crea la instancia de "IntersectionObserver" cuyos parámetros son: la función "cb" creada anteriormente y la cantidad de contenido que debe mostrarse para que se reproduzca el video */
  const observer = new IntersectionObserver(cb, { threshold: 0.5 });

  /* Se ejecuta el método "observe" de la instancia de "IntersectionObserver" el cual estará escuchando cada uno de los elementos "data-smart-video" */
  domVideos.forEach((el) => observer.observe(el));
}
```

## 18. Validaciones de Formulario

### 18.1 HTML

```html
<section id="ejercicio18" class="ejercicio" data-scroll-spy>
  <h2>ejercicio 18</h2>
  <h2>Validaciones de Formulario</h2>

  <!-- Se crea un formulario con un <legend> de titulo, un input de texto con la validación para escribir un nombre, un input de e-mail con la validación para escribir un correo, un input de texto sin validaciones para escribir un asunto, un <textarea> con validación de máximo 255 caracteres para escribir comentarios, una imagen animada que funge como loader y un espacio donde se muestra un mensaje de envió exitoso -->
  <form class="contact-form">
    <legend>Envíanos tus comentarios</legend>

    <input
      type="text"
      name="name"
      placeholder="Escribe tu nombre"
      title="El nombre solo acepta letras y espacios"
      required
      pattern="^^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
    />

    <input
      type="email"
      name="email"
      required
      placeholder="Escribe tu correo"
      title="Email incorrecto"
      pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
    />

    <input
      type="text"
      name="subject"
      placeholder="Asunto a tratar"
      required
      title="El asunto es requerido"
    />

    <textarea
      name="comments"
      cols="50"
      rows="5"
      placeholder="Escribe tus comentarios"
      data-pattern="^.{1,255}$"
      title="Tu comentario no debe exceder los 255 caracteres"
      required
    ></textarea>

    <input type="submit" value="enviar" />

    <div class="contact-form-loader none">
      <img src="./assetsEjerciciosDOM/Loader.svg" alt="loading" />
    </div>

    <div class="contact-form-responsive none">
      <p>Los datos han sido enviados</p>
    </div>
  </form>
</section>
```

### 18.2 CSS

```css
/* Se crean dos variables de color y se da tamaño al espacio donde se muestra el formulario */
.contact-form {
  --form-ok-color: #4caf50;
  --form-error-color: #f44336;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

/* Se da tamaño y posición a los elementos hijos del formulario */
.contact-form > * {
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 100%;
}

/* Se elimina la capacidad de redimensionar el <textarea> */
.contact-form textarea {
  resize: none;
}

/* Se da estilo a la letra del titulo y mensaje de envió exitoso */
.contact-form legend,
.contact-form-response {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

/* se normaliza el estilo de texto de todos los placeholder de los elementos */
.contact-form input,
.contact-form textarea {
  font-size: 1rem;
  font-family: sans-serif;
}

/* Se da estilo a la letra del botón de envió y se muestra el cursor clickable al posicionarse sobre el  */
.contact-form input[type="submit"] {
  width: 50%;
  font-weight: bold;
  cursor: pointer;
}

/* Se da color a los placeholder de los elementos */
.contact-form *::placeholder {
  color: #000;
}

/* Se da color de borde a los campos cuando se cumpla la validación */
.contact-form [required]:valid {
  border: 3px solid var(--form-ok-color);
}

/* Se da color de borde a los campos cuando no se cumpla la validación */
.contact-form [required]:invalid {
  border: 3px solid var(--form-error-color);
}

/* se da estilo a los mensajes que aparecerán si no se cumple la validación de cada campo */
.contact-form-error {
  margin-top: -1rem;
  font-size: 80%;
  background-color: var(--form-error-color);
  color: #fff;
  transition: all 800ms ease;
}

/* Se da animación y tamaño a los mensajes de error que se muestren */
.contact-form-error.is-active {
  display: block;
  animation: show-message 1s 1 normal 0s ease-out both;
}

/* Se crea una clase que oculta el elemento que la use */
.none {
  display: none;
}

/* Se dan las propiedades de a animación "show-message" */
@keyframes show-message {
  0% {
    visibility: hidden;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
}
```

### 18.3 JavaScript (main)

```js
import contactFormValidations from "./ModuloEjercicio18.js";

/* Se ejecuta la función importada "contactFormValidations" a la carga del documento HTML */
d.addEventListener("DOMContentLoaded", (e) => {
  contactFormValidations();
});
```

### 18.4 JavaScript (modulo)

```js
const d = document;

export default function contactFormValidations() {
  /* Se crean variables para almacenar el formulario completo y los elementos de forma individual que son requeridos */
  const domForm = d.querySelector(".contact-form");
  const domInputs = d.querySelectorAll(".contact-form [required]");

  /* Para cada input del formulario se crea un <span> cuyo id sera igual al name del correspondiente elemento y su contenido sera igual al title del correspondiente elemento, se le agrega los estilos de mensaje de error y se agrega al documento HTML como hermano de cada elemento */
  domInputs.forEach((input) => {
    const domSpan = d.createElement("span");
    domSpan.id = input.name;
    domSpan.textContent = input.title;
    domSpan.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", domSpan);
  });

  /* Cada que el se detecte que el usuario presiona una tecla y ademas el cursor esta posicionado en alguno de los input, se crea una variable que almacena la expresión regular de cada elemento */
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let pattern = e.target.pattern || e.target.dataset.pattern;

      /* si el elemento tiene una expresión regular asignada, se crea el objeto de expresión regular y si dicha expresión no coincide con lo que el usuario escribió, se agrega la clase "is-active" que hace que se muestre el mensaje de error, de lo contrario se remueve esta clase */
      if (pattern && e.target.value !== "") {
        let regex = new RegExp(pattern);

        return !regex.exec(domInput.value)
          ? d.getElementById(e.target.name).classList.add("is-active")
          : d.getElementById(e.target.name).classList.remove("is-active");
      }

      /* si el elemento no tiene una expresión regular definida y el campo esta vacío, se agrega al elemento la clase "is-active" que muestra el mensaje de error, de lo contrario se remueve esta clase */
      if (!pattern) {
        return domInput.value === ""
          ? d.getElementById(e.target.name).classList.add("is-active")
          : d.getElementById(e.target.name).classList.remove("is-active");
      }
    }
  });

  /* Una ves se de el evento submit del formulario se elimina su comportamiento por defecto y se genera una alerta que informa que se esta realizando el envío (esto solo se usa para simular el envió, en una situación real la linea "e.preventDefault();" debe ser retirada) */
  d.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("enviando Formulario");

    /* Se generan 2 variables: una almacena la imagen animada de loader y la otra almacena el mensaje de envío exitoso */
    const domLoader = d.querySelector(".contact-form-loader");
    const domResponse = d.querySelector(".contact-form-responsive");

    /* Se elimina la clase "none" de el elemento que muestra el loader simulando el procesamiento del envío */
    domLoader.classList.remove("none");

    /* Debido a que esto es un simulación, 3 segundos después de que se de el evento submit, se oculta el loader, se reinicia el formulario y se muestra el mensaje de envío exitoso, y tres segundos después de esto se oculta nuevamente el mensaje de envío exitoso */
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
```

---

## 19. Narrador

### 19.1 HTML

```html
<section id="ejercicio16" class="ejercicio" data-scroll-spy>
  <h2>ejercicio 19</h2>
  <h2>Narrador</h2>

  <!-- Ser crea un lista desplegable,. un textarea y un botón todos separados por dos saltos de linea -->
  <select id="speech-select">
    <option value="">---Elige una Voz---</option>
  </select>
  <br />
  <br />
  <textarea
    id="speech-text"
    cols="50"
    rows="5"
    placeholder="Ingresa texto para leerlo"
  ></textarea>
  <br /><br />
  <button id="speech-btn">Leer Texto</button>
</section>
```

### 19.2 CSS

En este ejercicio no se usa código CSS

### 19.3 JavaScript (main)

```js
import speechReader from "./ModuloEjercicio19.js";

/* Se llama a la función importada "speechReader" directamente al ejecutar el archivo HTML */
speechReader();
```

### 19.4 JavaScript (modulo)

```js
const d = document;
const w = window;

export default function speechReader() {
  /* Se crean variables para almacenar el elemento de la lista desplegable, el textarea y el botón */
  const domSpeechSelect = d.getElementById("speech-select");
  const domSpeechTextarea = d.getElementById("speech-text");
  const domSpeechBtn = d.getElementById("speech-btn");

  /* Se crea una instancia de "SpeechSynthesisUtterance" */
  const speechMessage = new SpeechSynthesisUtterance();

  /* Se crea un arreglo vacío donde se guardaran todas las voces disponibles en el sistema operativo */
  let voices = [];

  /* A la carga del documento HTML se genera un escuchador de cambio de voz, dentro de este escuchador se obtienen las voces disponibles en el sistema operativo y por cada una se crea un elemento en la lista desplegable cuyo valor sera el nombre de la voz pero el texto que mostrara sera el nombre de la voz y su idioma */
  d.addEventListener("DOMContentLoaded", (e) => {
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = w.speechSynthesis.getVoices();

      voices.forEach((voice) => {
        const domOption = d.createElement("option");
        domOption.value = voice.name;
        domOption.textContent = `${voice.name} ***** ${voice.lang}`;

        domSpeechSelect.appendChild(domOption);
      });
    });
  });

  /* Se crea un escuchador del evento "change", si el evento se origino en la lista desplegable, la voz asignada para la reproducción de sonido sera la que coincida con el valor de la opción de la lista desplegable que es la que origina el evento */
  d.addEventListener("change", (e) => {
    if (e.target === domSpeechSelect) {
      speechMessage.voice = voices.find((voice) => {
        voice.name === e.target.value;
      });
    }
    console.log(speechMessage);
  });

  /* Se crea un escuchador del evento "click", si este evento coincide con el botón de leer texto, el texto ingresado en el text area se asigna como valor de el texto que va a ser escuchado por el usuario y por medio del método "speak" se reproduce dicho texto */
  d.addEventListener("click", (e) => {
    if (e.target === domSpeechBtn) {
      speechMessage.text = domSpeechTextarea.value;
      w.speechSynthesis.speak(speechMessage);
    }
  });
}
```

---
