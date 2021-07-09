# CSS Media Queries

## Introductie

Je gaat Media Queries toepassen op het project dat je tot nu toe hebt.

## Deel 1 - Onderzoeken wat MediaQueries doen

1. Bezoek een site die je vaak bekijkt (bijvoorbeeld nos.nl, buienradar.nl)
2. Maak je browser window smaller en weer breder
3. Wat valt je op? Op wat voor manier verandert de site?

## Deel 2 - Aan de slag

Je gaat media queries toevoegen aan je site zodat deze er ook nog goed uitziet als je je site in een heel groot scherm bekijkt, zoals op een desktop .

Remember: CSS is Cascading en werkt dus van **boven naar beneden**. Zie ons code voorbeeld onderaan de pagina om de cascading eigenschap van CSS nog eens door te nemen.

1. Maak weer een nieuwe kopie van je laatste opdracht
2. Maak nu eerst nog de juiste aanpassingen zodat je website alle juiste styling heeft voor op mobiel.
3. Tevreden voor mobiel? Dan gaan we nu de styling voor desktop aanpassen:
4. Denk eraan dat mediaquery CSS onderaan je andere CSS moet komen te staan

```
@media (min-width: 1024px) {}
```

Zorg voor de volgende aanpassingen op desktop groot scherm:

Verander de achtergrondkleur op desktop (background-color)
Neem eerst een hele opvallende kleur en sleep je browser-window heen en weer. Op deze manier zo je direct of je mediaquery werkt. Werktie? Dan kun je de kleur wat rustiger maken.
Verander de kleur van je tekst op desktop (color)
Verander de grootte van de tekst op desktop, (maak de tekst kleiner op een groot scherm).
Verander de regelhoogte
Check je begrip over CSS + MediaQueries, met dit code voorbeeld.
Geef antwoord op de volgende vraag, terwijl je de css bekijkt: welke grootte gaat mijn h1 op de pagina zijn?

Code voorbeeld

/\* Dit grijze blok is een stuk code dat je kan copy pasten in een CSS bestand

- en kan aanroepen in je HTML om te zien hoe het eruit gaat zien.
- Je kunt het ook alleen doorlezen als je het direct begrijpt.
- /  
  /\* Hiermee wordt de grootte van h1 voor het eerst aangepast van de standaard
- browserstyle. _/  
  h1 {  
   font-size: 50px;  
  }  
  /_ Nu komt de browser aan bij de eerste media query. Als het venster een
- minimale breedte van 768 pixels heeft wordt deze stijlspecificatie gelezen
- en uitgevoerd. Zo **niet**, dan worden ze **niet** gelezen en **niet** uitgevoerd. _/  
  @media (min-width: 768px) {  
   h1 {  
   font-size: 60px;  
   }  
  }  
  /_ De tweede media query. Hetzelfde geldt weer voor de minimal breedte, maar
- nu voor 320 pixels. Let op! Een breedte van 800 pixels voldoet aan de eerste
- media query, maar ook aan deze! Dat betekent dat de font-size van h1
- nogmaals wordt aangepast. _/  
  @media (min-width: 320px) {  
   h1 {  
   font-size: 10px;  
   }  
  }  
  /_ Als we nu hieronder _nog een keer_ het formaat van h1 aanpassen voert de browser dat
- netjes als laatste uit en wordt al ons werk van hierboven overgeschreven, ongeacht de
- grootte van het browservenster. _/  
  h1 {  
   font-size: 100px;  
  }  
  /_ Conclusie: de volgorde van je CSS maakt uit. Kijk goed naar je media
- queries en redeneer over wat je verwacht aan te treffen op basis van hoe
- de browser je code gaat lezen -- van boven naar beneden! \*/
