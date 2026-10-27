let nombre = prompt("¿Cómo te llamas?");
let edad = prompt("¿Cuántos años tienes?");

edad = parseInt(edad);

if (isNaN(edad) || edad < 0) {
    document.write("Has introducido una edad incorrecta.");
} else {

    let franjaEdad;

    if (edad <= 12) {
        franjaEdad = "Niño";
    } else if (edad >= 13 && edad <= 17) {
        franjaEdad = "Adolescente";
    } else if (edad >= 18 && edad <= 64) {
        franjaEdad = "Trabajador";
    } else {
        franjaEdad = "Jubilado";
    }

    document.write("<p class='resultado'>" + nombre + " tiene " + edad + " años y por tanto es " + franjaEdad + "</p>");
}