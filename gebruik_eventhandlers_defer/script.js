document.querySelector("#mybutton").addEventListener("click", function () {
  alert("button clicked");
});
document.querySelector("#backgbutton").addEventListener("click", function () {
  document.body.classList.toggle("red-background");
});
