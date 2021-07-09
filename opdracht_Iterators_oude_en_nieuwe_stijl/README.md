# Iterators - oude en nieuwe stijl

Het Engelse "to iterate" betekent "iets herhaaldelijk doen". Dingen herhaaldelijk doen is iets dat je in software regelmatig gaat doen. Eén herhaling noemen we dan één "iteratie".

Meestal ga je dingen herhaaldelijk doen als je een verzameling van (vergelijkbare) dingen hebt, zoals in het geval van een array. Een praktisch voorbeeld: je hebt een array van test-scores en je wil weten wat de gemiddelde test-score is, of je wil weten wat de laagste of hoogste test-score is. Je bent dan aan het "itereren _over_ een array".

In JavaScript kun je op meerdere manieren over dingen itereren.

## Oude stijl: loops

Loops kun je voor meer gebruiken dan itereren over een lijst van dingen. Maar we hebben het nu wel over die manier van loops gebruiken.

### While loop:

- Maak en nieuwe map en nieuwe javascript file.
- Maak een array genaamd `colors` met de kleuren: yellow, blue, red, orange.
- Schrijf een while loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.

### For loop:

- Gebruik dezelfde array als startpunt.
- Schrijf een for loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
- Gebruik de lengte van de array in je for loop: `array.length`

Het schrijven van een for of while loop kan best veel ruimte in beslag nemen. Daarnaast is het ook makkelijk om een foutje te maken.

### Nieuwe stijl: array methods

Omdat itereren over arrays iets is dat zo vaak gebeurt heeft de community die JavaScript verder ontwikkelt wat nieuwe handige dingen bedacht (eigenlijk afgekeken) om dit wat makkelijker, leesbaarder en minder foutgevoelig te maken. Deze nieuwe dingen zijn **"array methods"**.
Elk array in JavaScript heeft de beschikking over deze ingebouwde functies die itereren over die array. De verschillende **array methods** doen verschillende dingen, maar ze itereren allemaal over een array.

Je kan met een paar simpele array methods al veel doen. Er zijn meer array methods waar je later meer over gaat leren. Dus raak vooral nog niet verstrikt in array methods wanneer je gaat googlen.

Hou het voor nu bij deze ene.

[Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

### forEach:

- Gebruik dezelfde kleuren-array als startpunt
- Gebruik de `forEach` array method, om alle items in je array te loggen naar de console.

Dit waren simpele oefeningen. De kern van deze oefening zit in het begrijpen van een for loop/ while loop ten opzichte van een array method. Beantwoord de volgende vragen en zet dit als comment onderin je file.

1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
2. Hoeveel regels neemt mijn `forEach` method in beslag?
3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
4. Kun je een array method gebruiken op een object? **Het antwoord is nee**.
   Stel je hebt een _object_ met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt _console.loggen_ met een loop: **_Looping through the properties of an object_**.
   Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het _itereren_?
