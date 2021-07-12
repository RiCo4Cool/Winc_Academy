document.querySelector("#hamburger").addEventListener("click", function () {
  document.getElementById("menu").style.display = "block";
});

document.querySelector("#home").addEventListener("click", function () {
  document.body.style.backgroundColor = "transparent";
  document.getElementById("color").textContent = "";
  document.getElementById("menu").style.display = "none";
});

document.querySelector("#red").addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  document.getElementById("menu").style.display = "none";
  document.getElementById("color").textContent = "Rood";
});

document.querySelector("#green").addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
  document.getElementById("menu").style.display = "none";
  document.getElementById("color").textContent = "Groen";
});

document.querySelector("#yellow").addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
  document.getElementById("menu").style.display = "none";
  document.getElementById("color").textContent = "Geel";
});

document.querySelector("#blue").addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
  document.getElementById("menu").style.display = "none";
  document.getElementById("color").textContent = "Blauw";
});
