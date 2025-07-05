// Varaibles
const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 50;
//Functions
function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  //   console.log(x, y);
  if (this !== e.target) {
    x = x + e.offsetLeft;
    y = y + e.offsetTop;
  }
  const xwalk = Math.round((x / width) * walk - walk / 2);
  const ywalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
   ${xwalk}px ${ywalk}px 20px rgba(255,0,255,0.7),
  ${xwalk * -1}px ${ywalk}px 20px rgba(0,255,255,0.7),
  ${ywalk}px ${xwalk * -1}px 20px rgba(0,255,0,0.7),
  ${ywalk * -1}px ${xwalk}px 20px rgba(0,0,255,0.7)`;
  //   console.log(xwalk, ywalk);
}

///Event Listners
hero.addEventListener("mousemove", shadow);
