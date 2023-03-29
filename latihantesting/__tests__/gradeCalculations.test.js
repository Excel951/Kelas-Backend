const { averageExams } = require("../gradeCalculations");

describe(`grade calculations`, () => {
	test("it should return exact average", () => {
		const listValueOfExams = [80, 100, 100, 80];
		expect(averageExams(listValueOfExams)).toEqual(90);
	});

	test("it should return exact average", () => {
		const listValueOfExams = [80, "a", "100", 80];
		expect(averageExams(listValueOfExams)).toEqual(90);
	});

	test("it should return exact average", () => {
		const listValueOfExams = [true, 100, 100, 80];
		expect(averageExams(listValueOfExams)).toEqual(90);
	});
});
