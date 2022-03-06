const megoldo = require('./feladat');

describe('Első feladat:', function () {
	it('a függvényednek 10-et kell visszaadnia', function () {
		const eredmeny = megoldo();
		expect(eredmeny.length).toEqual(3);
	});
});
