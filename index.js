//FOR
let numero = parseInt(prompt("Ingrese un número"))
for(let i = 3; i <= 9; i = i + 2) {
    let resultado = numero + i;
    let mensaje = `${numero} + ${i} = ${resultado}`;
    alert(mensaje);
}

//WHILE
let nombre = prompt("Ingrese un nombre")
while(nombre === "") {
    alert("Ingrese un nombre valido");
    nombre = prompt("Ingrese un nombre");
}
alert(`¡Bienvenido ${nombre}!`)