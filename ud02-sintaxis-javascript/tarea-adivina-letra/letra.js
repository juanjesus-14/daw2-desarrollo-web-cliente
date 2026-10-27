let letra = "";

while (letra !== "s") {
    letra = prompt("Adivina la letra:");

    if (letra == "s") {
        console.log("Has acertado");
    } else {
        console.log("Prueba de nuevo");
    }
}
