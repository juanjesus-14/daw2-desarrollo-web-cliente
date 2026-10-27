const palabraSecreta = "instituto";

function adivina(...letras) {
  let resultado = "";

  for (let letra of palabraSecreta) {
    if (letras.includes(letra) == true) {
      resultado = resultado + letra;
    } else {
      resultado = resultado + " _ ";
    }
  }

  document.write(resultado);
}

let texto = prompt("Escribe letras separadas por comas");

let listaLetras = texto.split(",");

adivina(...listaLetras);
