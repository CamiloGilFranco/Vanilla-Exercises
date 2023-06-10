const d = document;
let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
  const domBall = d.querySelector(ball);
  const domStage = d.querySelector(stage);
  const limitsBall = domBall.getBoundingClientRect();
  const limitsStage = domStage.getBoundingClientRect();

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

  domBall.style.transform = `translate(${x}px, ${y}px)`;
}

export function shortcuts(e) {
  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(`Ctrl ${e.ctrlKey}`);
  console.log(`alt ${e.altKey}`);
  console.log(`shift ${e.shiftKey}`);
  console.log(e);

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
