const ball = document.getElementById("ball");

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let dx = 2;
let dy = 2;

function animate() {
  const ballWidth = ball.offsetWidth;
  const ballHeight = ball.offsetHeight;

  x += dx;
  y += dy;

  if (x + ballWidth >= window.innerWidth || x <= 0) {
    dx = -dx;
  }

  if (y + ballHeight >= window.innerHeight || y <= 0) {
    dy = -dy;
  }

  ball.style.left = x + "px";
  ball.style.top = y + "px";

  requestAnimationFrame(animate);
}

animate();

