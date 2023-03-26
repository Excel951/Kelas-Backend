// console.log(`Menyalakan mesin kopi`);
// console.log(`Menggiling biji kopi`);
// console.log(`Memanaskan air`);
// console.log(`Mencampurkan air dan kopi`);
// console.log(`Menuangkan kopi ke dalam gelas`);
// console.log(`Menuangkan susu ke dalam gelas`);
// console.log(`Kopi Anda sudah siap`);

// memanggil value dari state
// const coffeeStock = require(`./state`);

// memanggil value dari state - dengan menggunakan module ES6
// as digunakan untuk merubah nama dari value
import { coffeeStock, isCoffeeMachineReady as readiness } from "./state.js";

const makeCoffee = (type, mg) => {
	if (coffeeStock[type] >= mg && readiness == true) {
		console.log(`Kopi berhasil dibuat`);
	} else {
		console.log(`Biji kopi habis`);
	}
};

makeCoffee(`robusta`, 150);

// console.log(coffeeStock);
