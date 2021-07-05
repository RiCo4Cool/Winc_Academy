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
