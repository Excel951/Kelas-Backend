const averageExams = (valuesExam) => {
	// valuesExam berisi number
	// const dibawah simpan boolean
	// exam => typeof exam dll... untuk cek apakah exam sudah berisi angka
	const numberValidation = valuesExam.every((exam) => typeof exam === "number");
	if (!numberValidation) throw Error(`Please input number`);

	// sumValues berisi akumulasi dari valuesExam
	const sumValues = valuesExam.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);
	return sumValues / valuesExam.length;
};

const isStudentPassExam = (valuesExam, name) => {
	const minValues = 75;
	const average = averageExams(valuesExam);

	if (average > minValues) {
		console.log(`${name} pass the exams`);
		return true;
	} else {
		console.log(`${name} fail the exams`);
		return false;
	}
};

// export { averageExams, isStudentPassExam };
module.exports = { averageExams, isStudentPassExam };
