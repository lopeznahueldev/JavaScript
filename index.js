alert(
	'Vamos a calcular el promedio de edades'
);

const cantidadPersonas = () => {
	let cantidad = Number(prompt('Ingrese la cantidad de personas hasta 100'));

	while (cantidad <= 0 || cantidad > 100) {
		alert(
			'Has introducido una catidad de personas no permitida.'
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
			edadTotal = calcularTotal(edadTotal, edades, cantidad);
		} else {
			while (edades <= 0 || isNaN(edades)) {
				alert(
					'Ha introducido un valor erroneo.'
				);
				edades = Number(
					prompt('Ingrese su edad ' + i + ':')
				);
			}
			edadTotal = calcularTotal(edadTotal, edades, cantidad);
		}
	}
	mostrarTotal(edadTotal, cantidad);
};

const calcularTotal = (edadTotal, edades, cantidad) =>
	((edadTotal + edades) / cantidad);

const mostrarTotal = (edadTotal, cantidad) => {
	console.log(`La cantidad de personas es ${cantidad}`);
	console.log(`El promedio de edades es ${edadTotal}`);
};

cantidadPersonas();