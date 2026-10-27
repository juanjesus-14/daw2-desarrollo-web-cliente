const palabras = [];

let palabra = prompt("Introduce una palabra");
while (palabra != "" && palabra != null) {
  palabras.push(palabra);
  palabra = prompt("Introduce una palabra");
}

const ordenadas = [...palabras];
ordenadas.sort((primera, segunda) => primera.localeCompare(segunda, "es"));

let resultadoHTML = "<p>Palabras introducidas: ";
for (let i = 0; i < palabras.length; i++) {
  resultadoHTML += palabras[i];
  if (i < palabras.length - 1) resultadoHTML += ", ";
}
resultadoHTML += "</p>";

resultadoHTML += "<p>Primera palabra: " + palabras[0] + "</p>";
resultadoHTML += "<p>Última palabra: " + palabras[palabras.length - 1] + "</p>";
resultadoHTML += "<p>Número total de palabras: " + palabras.length + "</p>";

let separador = "";
resultadoHTML += "<p>Orden alfabético: ";
for (let elemento of ordenadas) {
  resultadoHTML += separador + elemento;
  separador = ", ";
}
resultadoHTML += "</p>";

document.getElementById("resultado").innerHTML = resultadoHTML;
