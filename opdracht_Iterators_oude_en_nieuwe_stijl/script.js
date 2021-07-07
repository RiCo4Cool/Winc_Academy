var colors = ["yellow", "blue", "red", "orange"];
// let i = 0;
// while (i < colors.length) {
//   console.log(colors[i]);
//   i++;
// }

// for (i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

colors.forEach((e) => console.log(e));

// ## Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
// for loop neemt drie regels in beslag, de while loop neemt
// vijf regels in beslag.

// ## Hoeveel regels neemt mijn forEach method in beslag?
// De forEach methode neemt één regel in beslag.

// ## Welke voordelen heeft het gebruiken van een array method
// ## nog meer t.o.v. een for of een while loop? Welke methode
// ## vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// De foreach methode is erg overzichtelijk en is daarom
// makkelijk te lezen.

let object = {
  1: "NumberOne",
  2: "NumberTwo",
  3: "NumberThree",
  4: "NumberFour",
  5: "NumberFive",
};
for (const [key, value] of Object.entries(object)) {
  console.log(`${key}: ${value}`);
}

// ## Ben je nu aan het itereren?
// Nee, ik ben een loop aan het uitvoeren.
