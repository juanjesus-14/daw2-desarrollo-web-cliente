const numeros = [];
const MAX = 100;

for (let i = 0; i < 100; i++) {
  numeros[i] = Math.floor(Math.random() * MAX);
}

document.write("<ol>");
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    document.write("<li>" + numeros[i] + "</li>");
  }
}
document.write("</ol>");
