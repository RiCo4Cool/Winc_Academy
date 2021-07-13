const hamburger = document.querySelector("#hamburger");
const homeButton = document.querySelector("#home");

hamburger.addEventListener("click", () => {
  document.getElementById("menu").style.display = "block";
});

homeButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "transparent";
  document.getElementById("color").textContent = "";
  document.getElementById("menu").style.display = "none";
});

function chooseColor(color) {
  color.addEventListener("click", (e) => {
    document.body.style.backgroundColor = e.target.id;
    document.getElementById("menu").style.display = "none";
    document.getElementById("color").textContent =
      e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1);
  });
}

chooseColor(red);
chooseColor(green);
chooseColor(yellow);
chooseColor(lightblue);
