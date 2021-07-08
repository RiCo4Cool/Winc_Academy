var click = false;
var click = false;

document.querySelector("#hamburger").addEventListener("click", function () {
  if (click == false) {
    document
      .getElementById("red")
      .appendChild(
        document.createElement("li").appendChild(document.createTextNode("Red"))
      );
    document
      .getElementById("green")
      .appendChild(
        document
          .createElement("li")
          .appendChild(document.createTextNode("Green"))
      );
    click = true;
  }
});

document.querySelector("#red").addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  document.querySelector("#dropdown").remove();
});

document.querySelector("#green").addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
  document.querySelector("#dropdown").remove();
});
