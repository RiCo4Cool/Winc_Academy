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
  document.querySelector("#menu").remove();
  document.getElementById("color").appendChild(document.createTextNode("Red"));
});

document.querySelector("#green").addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
  document.querySelector("#menu").remove();
  document
    .getElementById("color")
    .appendChild(document.createTextNode("Green"));
});
