const megoldo = require('./feladat');

describe('Második feladat:', function () {
	it('a függvényednek 10-nél nagyobb számra igaz(true) értékkel kell válaszolnia', function () {
		const eredmeny = megoldo(11);
		expect(eredmeny).toEqual(true);
	});
	it('a függvényednek 10-nél kisebb számra hamis(false) értékkel kell válaszolnia', function () {
		const eredmeny = megoldo(9);
		expect(eredmeny).toEqual(false);
	});
});
