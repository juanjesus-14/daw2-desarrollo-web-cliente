const vocalesTilde = ["á", "é", "í", "ó", "ú"];
const palabras1 = ["casa", "árbol", "camión", "ordenador", "música", "perro"];

function sinTildes(lista) {
  let resultado = lista.filter(function (palabra) {
    let valida = true;

    for (let letra of palabra) {
      if (vocalesTilde.includes(letra) == true) {
        valida = false;
      }
    }

    return valida;
  });

  return resultado;
}

let palabras2 = sinTildes(palabras1);

document.write("[ ");
for (let i = 0; i < palabras2.length; i++) {
  document.write(palabras2[i] + ", ");
}
document.write("]");
