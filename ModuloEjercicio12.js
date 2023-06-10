const d = document;
const n = navigator;

export default function getGeolocation(id) {
  const domId = d.getElementById(id);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (position) => {
    let coords = position.coords;

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

  const error = (err) => {
    domId.innerHTML = `<p>Se presento el error: <mark>${err.code} - ${err.message}</mark></p>`;
  };

  n.geolocation.getCurrentPosition(success, error, options);
}
