const d = document;
const n = navigator;
const ua = n.userAgent;

export default function userDeviceInfo(id) {
  const domId = d.getElementById(id);

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

  domId.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
  </ul>
  `;

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

  if (isMobile.android()) {
    window.location.href = "https://github.com/CamiloGilFranco";
  }
}
