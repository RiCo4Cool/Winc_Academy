const redButton = document.querySelector("#red");
const greenButton = document.querySelector("#green");
const yellowButton = document.querySelector("#yellow");
const blueButton = document.querySelector("#blue");

document.querySelector("#hamburger").addEventListener("click", function () {
  document.getElementById("menu").style.display = "block";
});

document.querySelector("#home").addEventListener("click", function () {
  document.body.style.backgroundColor = "transparent";
  document.getElementById("color").textContent = "";
  document.getElementById("menu").style.display = "none";
});

redButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  document.getElementById("menu").style.display = "none";
  document.getElementById("color").textContent = "Rood";
});

greenButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
  document.getElementById("menu").style.display = "none";
  document.getElementById("color").textContent = "Groen";
});

yellowButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
  document.getElementById("menu").style.display = "none";
  document.getElementById("color").textContent = "Geel";
});

blueButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
  document.getElementById("menu").style.display = "none";
  document.getElementById("color").textContent = "Blauw";
});
