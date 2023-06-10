const d = document;
export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const domPlayers = d.querySelectorAll(selector);
    const random = Math.floor(Math.random() * domPlayers.length);
    const winner = domPlayers[random];

    return `El ganador es: ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
    }
  });
}
