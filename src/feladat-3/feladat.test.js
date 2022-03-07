const megoldo = require('./feladat');

describe('Harmadik feladat:', function () {
	it('a függvényednek egy 3 elemű tömböt kell visszaadnia', function () {
		const eredmeny = megoldo();
		expect(eredmeny.length).toEqual(3);
	});
});
