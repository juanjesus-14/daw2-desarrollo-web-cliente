"stric mode";

const personas = new Map();

personas.set("12345678A", "Juan");
personas.set("12345678B", "Jesus");
personas.set("12345678C", "Lucas");
personas.set("12345678D", "Hugo");
personas.set("12345678E", "Mateo");
personas.set("12345678F", "Elena");
personas.set("12345678G", "Laura");
personas.set("12345678H", "Marta");
personas.set("12345678I", "Irene");
personas.set("12345678J", "David");

function mostrarPersonas() {
    document.write("<ul>");
    for (let [dni, nombre] of personas) {
        document.write("<li>DNI: " + dni + " - Nombre: " + nombre + "</li>");
    }
    document.write("</ul>");
}

document.write("<h2>Lista inicial</h2>");
mostrarPersonas();

personas.set("12345678J", "Paco");

document.write("<h2>Lista modificada</h2>");
mostrarPersonas();