// on load
const myName = prompt("Please enter your name: ");
window.addEventListener("load", () => {
  alert(`Hey ${myName} welcome back`);
});
// select the element

const body = document.querySelector("body");
const heading = document.querySelector(".heading");
const color = document.querySelectorAll(".color");

// generate random color in hexacode #212121

function generateRandomColor() {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += Math.floor(Math.random() * 16).toString(16);
  }
  return randomColor;
}

function colorChanger(e) {
  //   console.log(e.target.id);
  switch (e.target.id) {
    case "Black":
      body.style.backgroundColor = "Black";
      heading.style.color = "white";
      break;
    case "Blue":
      body.style.backgroundColor = "Blue";
      break;
    case "Yellow":
      body.style.backgroundColor = "Yellow";
      heading.style.color = "black";
      break;
    case "green":
      body.style.backgroundColor = "green";
      break;
    case "purple":
      body.style.backgroundColor="purple"
      break;
      case "Random":
        body.style.backgroundColor = generateRandomColor();
    default:
      body.style.backgroundColor = "white";
      break;
  }
}

color.forEach((color) => {
  color.addEventListener("click", (e) => colorChanger(e));
});