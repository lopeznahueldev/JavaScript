//ARRAYS

class Personas {
	constructor(nombre,edad){
		this.nombre = nombre;
		this.edad = edad;
	}
}

const array = [];
for(let i = 0; i < 3; i++){
	let nombre = prompt("ingrese su nombre");
	let edad = prompt("ingrese su edad");
	let objeto = new Personas(nombre, edad)
	
	array.push(objeto);
}

console.log(array);


//ARREGLE EL SIMULADOR INTERACTIVO
/* alert(
	'Vamos a calcular el promedio de edades'
);

const cantidadPersonas = () => {
	let cantidad = Number(prompt('Ingrese la cantidad de personas hasta 100'));

	while (cantidad <= 0 || cantidad > 100) {
		alert(
			'Has introducido una cantidad de personas no permitida.'
		);
		cantidad = Number(prompt('Ingrese la cantidad de personas hasta 100'));
	}
	ingresarEdad(cantidad);
};

const ingresarEdad = (cantidad) => {
	let edadTotal = 0;
	let edades = 0;

	for (let i = 1; i <= cantidad; i++) {
		edades = Number(prompt('Ingrese su edad ' + i + ':'));

		if (edades > 0) {
			edadTotal = calcularTotal(edadTotal, edades);
		} else {
			while (edades <= 0 || isNaN(edades)) {
				alert(
					'Ha introducido un valor erroneo.'
				);
				edades = Number(
					prompt('Ingrese su edad ' + i + ':')
				);
			}
			edadTotal = calcularTotal(edadTotal, edades);
		}
		if (edadTotal > 0) {
			edadPromedio = calcularPromedio(edadTotal, cantidad);
		}
	}
	mostrarTotal(edadPromedio, cantidad);
};

const calcularTotal = (edadTotal, edades) =>
	(edadTotal + edades);

const calcularPromedio = (edadTotal, cantidad) =>
	(edadTotal / cantidad);

const mostrarTotal = (edadPromedio, cantidad) => {
	console.log(`La cantidad de personas es ${cantidad}`);
	console.log(`El promedio de edades es ${edadPromedio}`);
};

cantidadPersonas(); */