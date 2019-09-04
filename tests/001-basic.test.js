test('two plus two is four', () => {
	expect(2 + 2).toBe(4);
});

describe('Validity of return value of function', () => {
	test('JSON serializable', async (done) => {
		const res = await (require('../src/')());

		expect(JSON.stringify(res)).toBeTruthy();
		done();
	});
});