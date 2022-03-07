const megoldo = require('./feladat');

describe('Negyedik feladat:', function () {
	it('a függvényednek egy object-et kell visszaadnia, amiben egy "count" nevű kulcs van és aminek az értéke 10.', function () {
		const eredmeny = megoldo();
		expect(!!eredmeny?.count).toEqual(true);
		expect(eredmeny.count).toEqual(10);
	});
});
