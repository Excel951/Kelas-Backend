const json = "{ bad json }";

try {
	const user = JSON.parse(json);

	console.log(user.name);
	console.log(user.age);
} catch (error) {
	console.log(error.name);
	console.log(error.message);
}
