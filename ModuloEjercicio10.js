const d = document;
const w = window;
const n = navigator;

export default function networkStatus() {
  const isOnLine = () => {
    const domDiv = d.createElement("div");

    if (n.onLine) {
      domDiv.textContent = "Conexión Restablecida";
      domDiv.classList.add("online");
      domDiv.classList.remove("offline");
    } else {
      domDiv.textContent = "Conexión perdida";
      domDiv.classList.add("offline");
      domDiv.classList.remove("online");
    }

    d.body.appendChild(domDiv);

    setTimeout(() => d.body.removeChild(domDiv), 2000);
  };

  w.addEventListener("online", (e) => isOnLine());
  w.addEventListener("offline", (e) => isOnLine());
}
