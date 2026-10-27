let lista = prompt("Introduce las 3 notas separados por puntos y comas.");

let valores = [];


valores = lista.split(";");


let nota1 = parseInt(valores[0]);
let nota2 = parseInt(valores[1]);
let nota3 = parseInt(valores[2]);


function comprobarNotas(nota1, nota2, nota3) {

    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 5) {
        return "aprobado";
    } else {
        return "suspenso";
    }
}


let resultado = comprobarNotas(nota1, nota2, nota3);


document.write(resultado);
