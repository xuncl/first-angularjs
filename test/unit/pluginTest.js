describe("A suite", function(){
	it("testA", function(){
		expect(true).toBe(true);
	});
});

describe("A suite of basic functions", function(){
	it("testB", function(){
		expect("abcd").toEqual(testGrunt());
	});
});