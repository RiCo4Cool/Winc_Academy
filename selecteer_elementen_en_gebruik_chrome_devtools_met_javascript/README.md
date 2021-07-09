# Selecteer elementen en gebruik Chrome DevTools met JavaScript

## Deel 1:

- Maak een basic HTML pagina naar dit voorbeeld:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div id="first-section">
    <p>Hallo ik ben een paragraaf</p>
    </div>
</body>
</html>
```

- Open je pagina in de browser en open je Chrome Developer Tools.
- Gebruik de console van de Chrome Dev Tools om de tekst van de paragraaf te vervangen met "Ik ben een nieuwe paragraaf" (zoals je hebt gezien in de video).
- Check na afloop nog even het resultaat van je actie in je HTML pagina, dmv inspector of inspect page source. Hoe ziet je HTML er nu uit?

## Deel 2:

- Reload de pagina, zodat je weer terug bent bij de initiële HTML pagina.
- Gebruik de console nog een keer om het div element met de ID "first-section" te selecteren.
  - "Query the dom, the document object model" | Tip: je start dus waarschijnlijk met `document.`...
  - Gebruik google: "JavaScript select element with ID"
- Sla het geselecteerde element op in een variable:

Je ziet dat er in de video nog veel gebruik gemaakt wordt van `var`. Jij weet nu inmiddels al beter natuurlijk. Zou je het beste `const` of `let` kunnen gebruiken?

- Tik je variable name in de console en zie het resultaat.

## Deel 3:

Het is ook mogelijk om niet één, maar een collectie aan elementen in een variable te stoppen. Dat gaan we nu doen.

Vul de HTML aan met een tweede div en geef beide div's een class.

  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
  </head>
  <body>
      <div id="first-section" class="paragraph">
          <p>Hallo ik ben een paragraaf</p>
      </div>
      <div id="second-section" class="paragraph">
          <p>Hallo ik ben een tweede paragraaf</p>
      </div>
  </body>
  </html>
Selecteer beide paragrafen d.m.v. document.getElementsByClassName('vul hier de classname')

Stop de elementen weer in een variable en tik deze in je console. Bekijk hoe een collectie aan elementen er anders uit ziet dan 1 enkel element.
