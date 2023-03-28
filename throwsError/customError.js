// let json = '{ "a": "30" }';

// try {
// 	let user = JSON.parse(json);

// 	if (!user.name) {
// 		throw new SyntaxError("'name' is required.");
// 	}

// 	if (!user.age) {
// 		throw new SyntaxError("'age' is required.");
// 	}

// 	console.log(user.name);
// 	console.log(user.age);
// } catch (error) {
// 	if (error instanceof SyntaxError) {
// 		console.log(`JSON Error: ${error.message}`);
// 	} else if (error instanceof ValidationErrorW) {
// 		console.log(`Invalid data: ${error.message}`);
// 	} else if (error instanceof ReferenceError) {
// 		console.log(error.message);
// 	} else {
// 		console.log(error.stack);
// 	}
// }

// ====================================================================

// class ValidationError extends Error {
// 	constructor(message) {
// 		super(message);
// 		this.name = "ValidationError";
// 	}
// }

// function validateNumberInput(a, b, c) {
// 	if (typeof a !== "number") {
// 		throw new ValidationError("Argumen pertama harus number");
// 	} else if (typeof b !== "number") {
// 		throw new ValidationError("Argumen kedua harus number");
// 	} else if (typeof c !== "number") {
// 		throw new ValidationError("Argumen ketiga harus number");
// 	}
// }

// const detectTriangle = (a, b, c) => {
// 	try {
// 		validateNumberInput(a, b, c);

// 		if (a === b && b === c) {
// 			return "Segitiga sama sisi";
// 		}

// 		if (a === b || a === c || b === c) {
// 			return "Segitiga sama kaki";
// 		}

// 		return "Segitiga sembarang";
// 	} catch (error) {
// 		if (error instanceof ValidationError) {
// 			return error.message;
// 		}
// 	}
// };

// let a = detectTriangle(12, 43, 2);
// console.log(a);
// a = detectTriangle("12", 43, 2);
// console.log(a);
// a = detectTriangle(12, "43", 2);
// console.log(a);
// a = detectTriangle(12, 43, "2");
// console.log(a);

// =====================================================================

// class MyCustomError extends Error {
// 	constructor(message) {
// 		super(message);
// 		this.name = "MyError";
// 	}
// }

// try {
// 	throw new MyCustomError("This is an error");
// } catch (e) {
// 	console.log(e.message);
// }

// =====================================================================

// function getUsers(callback) {
// 	// simulate network delay
// 	setTimeout(() => {
// 		const users = ["John", "Jack", "Abigail"];
// 		callback(users);
// 	}, 3000);
// }

// getUsers((users) => {
// 	console.log(users);
// });

// ======================================================================

// function getUsers(isOffline, callback) {
// 	// simulate network delay
// 	setTimeout(() => {
// 		const users = ["John", "Jack", "Abigail"];

// 		if (isOffline) {
// 			callback(new Error("cannot retrieve users due offline"), null);
// 			return;
// 		}

// 		callback(null, users);
// 	}, 3000);
// }

// function usersCallback(error, users) {
// 	if (error) {
// 		console.log("process failed:", error.message);
// 		return;
// 	}
// 	console.log("process success:", users);
// }

// getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
// getUsers(true, usersCallback); // process failed: cannot retrieve users due offline

// =====================================================================

// const { promisify } = require("util");

// function getUsers(isOffline, callback) {
// 	// simulate network delay
// 	setTimeout(() => {
// 		const users = ["John", "Jack", "Abigail"];
// 		if (isOffline) {
// 			callback(new Error("cannot retrieve users due offline"), null);
// 			return;
// 		}

// 		callback(null, users);
// 	}, 3000);
// }

// // create a Promise version of getUsers
// const getUsersPromise = promisify(getUsers);

// getUsersPromise(false)
// 	.then((users) => console.log(users)) // ['John', 'Jack', 'Abigail']
// 	.catch((err) => console.log(err.message));

// getUsersPromise(true)
// 	.then((users) => console.log(users))
// 	.catch((err) => console.log(err.message)); // cannot retrieve users due offline

// =========================================================================

const { promisify } = require(`util`);

function getProvinces(countryId, callback) {
	setTimeout(() => {
		if (countryId === "id") {
			callback(null, [
				{ id: "id-jk", name: "Jakarta" },
				{ id: "id-bt", name: "Banten" },
				{ id: "id-jr", name: "Jawa Barat" },
			]);
			return;
		}

		callback(new Error("Country not found"), null);
	}, 1000);
}

const getProvincesPromise = promisify(getProvinces);
getProvincesPromise("id")
	.then((province) => {
		console.log(province);
	})
	.catch((error) => {
		console.log(error.message);
	});
