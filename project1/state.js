const coffeeStock = {
	arabica: 100,
	robusta: 150,
	liberica: 200,
};

const isCoffeeMachineReady = true;

// dilakukan jika nilai yang diekspor hanya ada satu
// export default coffeeStock;

// dilakukan jika nilai yang diekspor lebih dari satu
export { coffeeStock, isCoffeeMachineReady };

// model lama (Bukan menggunakan ES6)
// module.exports = { isCoffeeMachineReady, coffeeStock };
