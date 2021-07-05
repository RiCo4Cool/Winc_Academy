const breeds = require("./catbreeds.js");
const catBreeds = breeds.catBreeds;

let person = {
  name: "Richard",
  age: 44,
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);

person.evaluations = [7, 10, 19];
console.log(person.evaluations); // waarde is een array

var chosenColors = [];
chosenColors = ["groen", "blauw", "rood"];
console.log(chosenColors);
console.log(chosenColors.length);
console.log(chosenColors[0]);
console.log(chosenColors[chosenColors.length - 1]);
chosenColors.push("geel");
chosenColors.push(5);
chosenColors.push('{greeting: "Hi, ik ben een object"}');
console.log(chosenColors[chosenColors.length - 1]);

console.log("Naam kattensoort 3:", catBreeds[catBreeds.length - 1]["name"]);
console.log("Energylevel kattensoort 1", catBreeds[0]["energy_level"]);
console.log("Eerste temperament kat 2:", catBreeds[1]["temperament"][0]);
console.log(
  "Laatste temperament kat 3:",
  catBreeds[2]["temperament"][catBreeds[2]["temperament"].length - 1]
);
console.log("Favo voedsel van kat 3:", catBreeds[2]["food"]["favourite_food"]);
