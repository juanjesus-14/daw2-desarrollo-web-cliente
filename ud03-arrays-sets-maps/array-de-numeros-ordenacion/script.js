const numeros = [];

for (let i = 1; i <= 15; i++) {
    let mensaje = "Introduce el número " + i + " de 15:";
    let dato;
    do {
        dato = prompt(mensaje);
        if (dato == null || dato == "" || isNaN(dato)) {
            mensaje = "Dato no valido. Introduce el número " + i + " de 15:";
        }
    } while (dato == null || dato == "" || isNaN(dato));
    numeros.push(Number(dato));
}

numeros.sort((a, b) => a - b);

function mostrarMenor() {
    let menor = numeros[0];
    let posicion = numeros.indexOf(menor);
    document.writeln("El menor numero es " + menor + "<br>");
    document.writeln("Su posición en el array es la " + posicion);
}

mostrarMenor();
