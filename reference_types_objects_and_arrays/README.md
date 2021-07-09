# Reference types: Objects & Arrays

## Introductie

Je gaat voor het eerst werken met objecten en arrays. In deze opdracht run je je JavaScript code op je computer met node of via REPL.it. Je gaat ook kennis maken met wat **jargon**, waar je later meer over gaat leren.

## Deel 1 Objecten:

1. Maak een object genaamd `person`.
2. `person` heeft de volgende **key-value pairs / properties**: `name` en `age`. Vul hier je eigen naam en leeftijd in.
3. Gebruik console.log(person) en run je JavaScript programma, om je object te loggen.
4. Log alleen de **value** van de naam, door middel van de **key** `name`
5. Log alleen de leeftijd `age`
6. Gebruik de **dot-notation** en de **bracket-notation** voor het loggen van de bovenstaande 2 properties
7. Maak nog een laatste **key-value pair**. De **key** is `evaluations`, de value `[7, 10, 9]`. Dit zijn de cijfers die je hebt gehaald afgelopen jaar.
8. Log alleen de property `evaluations`. Wat is de waarde?

## Deel 2 Arrays:

1. Maak een nieuwe variabele met een lege array `[]`.
2. Vul deze array met minstens 3 verschillende kleuren, in de vorm van `strings` Bijvoorbeeld: "groen", "blauw", "rood".
3. Log je nieuwe array naar de console.
4. Log de lengte van je array naar de console. [Gebruik array.length](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
5. Log het **eerste** element van je array naar de console, dus in ons voorbeeld: "groen".
6. Log het **laatste** element van je array naar de console, dus in ons voorbeeld: "rood". Ga ervan uit dat je niet weet hoeveel elementen er in de array gaan zitten. `array[3]` gaat dus niet de juist oplossing zijn als je straks 5 elementen in de array hebt.
7. Voeg een 4de element toe aan je array met de push method. [array.push()](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/push) Resultaat: ['groen, 'blauw, 'rood', 'geel']
8. Voeg een cijfer toe aan je array met de push methode Resultaat: ['groen, 'blauw, 'rood', 'geel', 5]
9. Voeg een object toe aan je array met de push methode. Het object ziet er zo uit: {greeting: "hi ik ben een object"} Resultaat: ['groen, 'blauw, 'rood', 'geel', 5, {greeting: "Hi ik ben een object"} ]
10. Log **alleen** de begroeting van het object (het laatste element), naar de console.

## Deel 3: Bekijk een "real-life" object

Objecten in JavaScript kunnen worden vergeleken met objecten in het echte leven. Daarom gaan we nu een opdracht doen met een "echt" object. We hebben 3 katten-soorten voor je in een array gestopt. Hieronder vind je een array met 3 kattenrassen en hun specificaties.

- Array met kattenrassen

```
const catBreeds = [{
name: "Abyssinian",
description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
dog*friendly: 4,
energy_level: 5,
life_span: "14 - 15",
origin: "Egypt",
temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian*(cat)",
food: {
favourite_food: "fish",
medium_liked_food: "dried fruits",
disliked_food: "walnuts"
}
},
{
name: "Aegean",
description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
dog_friendly: 4,
energy_level: 53,
life_span: "9- 12",
origin: "Greece",
temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
food: {
favourite_food: "tuna",
medium_liked_food: "canned food",
disliked_food: "all fruits"
}
},
{
name: "American Bobtail",
description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
dog_friendly: 5,
energy_level: 3,
life_span: "11 - 15",
origin: "United States",
temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
food: {
favourite_food: "meaty things",
medium_liked_food: "tuna",
disliked_food: "canned food"
}
}
]
```

Gebruik bij elke stap een console.log("omschrijving van het object", hierjouwoplossing). Bijvoorbeeld console.log("Herkomst
kat 1:", catBreeds[0].origin). Je mag direct de index gebruiken om een specifiek item te selecteren (bijvoorbeeld index 2 voor het derde item).
Log de naam van het laatste kattenras.
Naam kattensoort 3: American Bobtail
Log de energy levels van de eerste kat.
Energylevel kattensoort 1: 5
Log het eerste temperament van de temperamenten van de tweede kat.
Eerste temperament kat 2: Affectionate
Log het laatst temperament van de temperamenten van de derde kat.
Laatste temperament kat 3: Sensitive
Log het favoriete voedsel van de derde kat
Favo voedsel van kat 3: meaty things
Naslagwerk:

Werken met objecten

Array
