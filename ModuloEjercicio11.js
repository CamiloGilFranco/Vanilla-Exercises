const d = document;
const n = navigator;

export default function webCam(id) {
  const domVideo = d.getElementById(id);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        domVideo.srcObject = stream;
        domVideo.play();
      })
      .catch((err) => {
        domVideo.insertAdjacentHTML(
          "beforebegin",
          `<p>Ocurrió el error: <mark>${err}</mark></p>`
        );
      });
  }
}
