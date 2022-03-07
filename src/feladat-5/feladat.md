# Első feladat

A függvényed egy objectet kap, amiben 1 `count` nevű kulcs szerepel - add vissza ennek a kulcsnak az értékét!

### Tipp
A javascriptben gyakran dolgozunk object-ekkel, vagyis JSON-ökkel (JSON = Javascript Object Notation)
```javascript
// Mint ahogy az előző példában is szerepelt - hivatkozni egy object elemére 2 féle képpen lehet
valtozonev.kulcs1;
// vagy
valtozonev['kulcs1'];

// A függvényed definiciójában a zárójelben kell megadnod a változó nevét amit a függvény kap
// és ezt a változót a későbbiekben felhasználhatod a függvény kód blokkjában
module.exports = (
	fuggvenyvaltozo
	// Ide kerülnek a függvényed változói
) => {
	console.log(fuggvenyvaltozo) // kiírja a fuggvenyvaltozo értékét
	// Ide írhatod a kódot
}
```
