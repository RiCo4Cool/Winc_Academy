document.getElementById("dropdown").style.display = "none";
document.querySelector("#hamburger").addEventListener("click", function () {
  document.getElementById("dropdown").style.display = "block";
});

document.querySelector("#red").addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  document.querySelector("#dropdown").remove();
});

document.querySelector("#green").addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
  document.querySelector("#dropdown").remove();
});
