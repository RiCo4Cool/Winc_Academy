# Deel 1: link je stylesheet aan je html

- Maak weer een nieuwe project folder door je laatste te kopiëren
- We gaan direct starten met een best practice. Zoals je hebt gezien zijn er 3 manieren om CSS toe te voegen aan je HTML: inline, internal en external. We gaan het direct **external** doen. Als het goed is zit er in je gekopieerde map nog een `index.html` en waarschijnlijk een aantal extra html pagina's. **Maak een CSS file, genaamd** `styles.css`
- Link de `index.html` aan je stylesheet `styles.css` dmv een <code>&lt;link/&gt;</code>

```
  <link rel="stylesheet" type="text/css" href="styles.css">
```

# Deel 2: Leer de element, class en id selector gebruiken

In de volgende sectie gaan we oefenen met verschillende soorten selectors.

- Element selector Maak de kleur van alle tekst op je pagina rood. Door het `body` element te selecteren met CSS en de property `color` de waarde `red` te geven. Dat ziet er dus zo uit.

```
body {
    color: red;
}
```

Let op! CSS is erg gevoelig voor dubbele punten, punt komma's en haakjes. Gebruik dus je linters! **Verwacht resultaat**: alle tekst op je pagina is rood.

- **Class selector** In de bovenstaande opdracht heb je een
  **element selector** gebruikt. Je kunt elementen ook selecteren op basis van een `class`. Geef **2 of meer elementen** op je pagina **dezelfde class** genaamd "black-border". Bijvoorbeeld een `<h1>` element en een `<p>` element. Selecteer deze class vervolgens in je CSS met de **class selector** (dat doe je met een .**punt**):
  `.black-border`. En geef het de property `border` met de waarde `5px solid black`.

```
.black-border {
    border: 5px solid black;
}
```

**Verwacht resultaat**: de **2 elementen** met de class hebben een zwarte border.

- **ID selector** Geef nu **1 element** naar keuze op je pagina een ID genaamd: `green-background` Selecteer deze ID in je CSS sheet dmv van een id selector (dat doe je met een #hashtag). Geef deze CSS selector vervolgens de property `background-color` met de waarde `green`

```
#green-background {
    background-color: green;
}
```

**Verwacht resultaat**: **1 element** met de ID heeft een groene achtergrond.

Let op, beginners-regel: gebruik **altijd** een **class-selector**, tenzij je een goede reden hebt om een **ID-selector** te gebruiken. Deze goede redenen ga je pas tegenkomen wanneer je gaat werken met **JavaScript**.

# Deel 3: Time for freestyling! (pun intended)

Nu je weet hoe de Element, Class en ID selectors werken, tijd om wat CSS toe te passen op jouw persoonlijke manier. Voel je vrij om de bovenstaande oefen-CSS ook weer te verwijderen als het niet bij jouw website past (alhoewel, wie wil er nou niet een mooie groene achtergrond? )

**Tip**: Denk nog niet teveel na over dingen links en rechts plaatsen, de volgorde van boven naar beneden is nu goed genoeg

**To Do**:

- gebruik alles wat je geleerd hebt van CSS en maak je site wat mooier
- gebruik kleur voor je tekst
- gebruik een andere grootte voor (sommige) teksten
- gebruik achtergrondkleur
- gebruik een "border"
- gebruik een mooi lettertype
- voeg styling toe aan minstens 2 pagina's, meer mag ook

# Extra Materiaal (als je comfortabel bent met CSS)

- Een uitgebreide lijst met alle CSS properties
  [CSS Reference](https://www.w3schools.com/cssref/)

Ik wil graag fancy borders maken:
12 Creative and Cool Uses for the CSS Border Property

Ik wil graag een chique font gebruiken van Google Fonts
Google Fonts
