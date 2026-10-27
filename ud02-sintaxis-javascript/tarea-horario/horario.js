
const dia = prompt("Introduce la inicial del día (L, M, X, J, V, S, D):").toUpperCase();


switch (dia) {
    case "L":
        document.write("Lunes: 09:00 - 14:00");
        break;

    case "M":
        document.write("Martes: 10:00 - 15:00");
        break;

    case "X":
        document.write("Miércoles: 09:30 - 14:30");
        break;

    case "J":
        document.write("Jueves: 11:00 - 16:00");
        break;

    case "V":
        document.write("Viernes: 09:00 - 13:00");
        break;

    case "S":
        document.write("Sábado: Cerrado");
        break;

    case "D":
        document.write("Domingo: Cerrado");
        break;

    default:
        document.write("Debes introducir una inicial válida (L, M, X, J, V, S o D)");
}
