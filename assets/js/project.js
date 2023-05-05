//CURSOR

const cursor = document.getElementById("cursor");
const { offsetWidth: elWidth, offsetHeight: elHeight } = cursor;
const { innerWidth: width, innerHeight: height } = window;
const target = { x: width / 2, y: height / 2 };
const position = { x: height, y: width };
const ease = 0.075;

window.addEventListener("mousemove", function (event) {
  target.x = event.clientX;
  target.y = event.clientY;
});

const update = () => {
  const { x: targetX, y: targetY } = target;
  const { x: posX, y: posY } = position;
  const dx = targetX - posX;
  const dy = targetY - posY;
  const vx = dx * ease;
  const vy = dy * ease;

  position.x += vx;
  position.y += vy;

  cursor.style.left = `${Math.round(position.x - elWidth / 2)}px`;
  cursor.style.top = `${Math.round(position.y - elHeight / 2)}px`;

  requestAnimationFrame(update);
};
// let test = document.querySelector(".test");
// test.addEventListener("click", () => {
//   console.log("hola");
// });
update();

//INITIAL SCROLL
window.onbeforeunload = () => window.scrollTo(0, 0);

//Fin
