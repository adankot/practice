const megoldo = require('./feladat');

describe('Ötödik feladat:', function () {
	it('a függvényed egy objectet kap, amiben 1 `count` nevű kulcs szerepel - add vissza ennek a kulcsnak az értékét!', function () {
		const eredmeny = megoldo({count: 10});
		expect(eredmeny).toEqual(10);
	});
});
