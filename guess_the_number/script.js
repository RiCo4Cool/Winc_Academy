let nummer = 0;
let naam = prompt("Welkom! Wat is je naam?", "");
alert(`Hey ${naam}`);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let randomNumber = getRandomInt(0, 25);

function nummerInvoer() {
  nummer = prompt(
    "Voer een nummer in van 0 tot 25 om te beginnen met raden...",
    ""
  );
  if (randomNumber == nummer) {
    alert(`Gefeliciteerd je hebt gewonnen`);
    alert(`Dag ${naam}. Tot de volgende keer`);
  } else {
    alert(`Dat is niet correct`);
    nummerInvoer();
  }
}
nummerInvoer();
