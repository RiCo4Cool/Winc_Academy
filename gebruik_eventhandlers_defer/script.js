document.querySelector(".btn-alert").addEventListener("click", function () {
  alert("button clicked");
});
var btn = document.createElement("button");
btn.innerHTML = "Change Background";
document.body.appendChild(btn);
