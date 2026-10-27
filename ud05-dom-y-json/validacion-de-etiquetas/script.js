class Etiqueta {
    constructor(nombre, referencia) {
        this.nombre = nombre;
        this.referencia = referencia;
    }

    mostrarArticulo() {
        document.write("<p>Artículo: " + this.nombre + " - Referencia: " + this.referencia + "</p>");
    }

    validarEtiqueta() {
        const patron = /^\d{4}—[a-zA-Z]{5}\/\d{2}_\d$/;
        if (patron.test(this.referencia) == true) {
            document.write("<p>La etiqueta " + this.referencia + " es válida</p>");
        } else {
            document.write("<p>La etiqueta " + this.referencia + " NO es válida</p>");
        }
    }
}

const articulo1 = new Etiqueta("Camiseta", "2026—abcde/12_3");
articulo1.mostrarArticulo();
articulo1.validarEtiqueta();


const articulo2 = new Etiqueta("Pantalón", "026—abde/12_3");
articulo2.mostrarArticulo();
articulo2.validarEtiqueta();

