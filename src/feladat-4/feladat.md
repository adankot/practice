# Negyedik feladat

A függvényednek egy objectet kell visszaadnia, amiben 1 `count` nevű kulcs szerepel és az értéke 10!

### Tipp
A javascriptben gyakran dolgozunk object-ekkel, vagyis JSON-ökkel (JSON = Javascript Object Notation)
```javascript
// Egy json egy {} között felsorol kulcs-érték párokból áll. A kulcsok mind esetben szövegek, míg az értékek lehetnek
// szöveg, szám, tömb vagy akár függvény is, mint a normális változók esetében.
const valtozonev = {
  kulcs1: 'érték1',
  kulcs2: 2,
  kulcs3: [1, 2, 3]
}
// Hivatkozni egy object elemére 2 féle képpen lehet
valtozonev.kulcs1;
// vagy
valtozonev['kulcs1'];
```
