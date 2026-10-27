const conjunto = new Set();

const array1 = [12, 12, 12, 14];
const array2 = [11, 11, 13, 15];
const array3 = ["i", "]", "kK", "I"];

for (let i = 0; i < array1.length; i++) {
  conjunto.add(array1[i]);
}
for (let i = 0; i < array2.length; i++) {
  conjunto.add(array2[i]);
}
for (let i = 0; i < array3.length; i++) {
  conjunto.add(array3[i]);
}

document.write("<p>El conjunto tiene " + conjunto.size + " elementos</p>");

document.write("<ol>");
for (let elemento of conjunto) {
  document.write("<li>" + elemento + "</li>");
}
document.write("</ol>");