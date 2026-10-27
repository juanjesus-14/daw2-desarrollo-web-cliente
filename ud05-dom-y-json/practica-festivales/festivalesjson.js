var festivalesJSON = `{
    "Festival": "Navar-Pop",
    "Ciudad": "Ablitas",
    "Anno": 2018,
    "Grupos": [
        {
            "nombre": "Love of lesbian",
            "compania": "Warner Music",
            "discos": [
                "Microscopic Movies",
                "Is it Fiction?",
                "Ungravity",
                "Maniobras de escapismo",
                "Cuentos chinos para niños del Japón",
                "1999",
                "La noche eterna. Los días no vividos",
                "El poeta Halley"
            ]
        },
        {
            "nombre": "Izal",
            "compania": "Autoeditado",
            "discos": [
                "Teletransporte",
                "Magia y efectos especiales",
                "Agujeros de gusano",
                "Copacabana",
                "VIVO",
                "Autoterapia"
            ]
        },
        {
            "nombre": "Miss Caffeina",
            "compania": "Warner Music",
            "discos": [
                "Imposibilidad del fenómeno",
                "De polvo y flores",
                "Detroit"
            ]
        }
    ]
}`;


let festivales = JSON.parse(festivalesJSON);
 
let container = document.getElementById("container");
 
container.innerHTML += "<h1> Festival: " + festivales.Festival + " </h1>";
 
container.innerHTML += "Ciudad: " + festivales.Ciudad + "<br>";
container.innerHTML += "Año: " + festivales.Anno + "<br>";
 
let grupos = "<article>";
 
for (let i = 0; i < festivales.Grupos.length; i++) {
 
    grupos += "<h2> " + festivales.Grupos[i].nombre + " </h2>";
 
    grupos += "<br>Compañía: " + festivales.Grupos[i].compania + "<br>";
    grupos += "Discografía";
 
    grupos += "<ul>";
 
    for (let j = 0; j < festivales.Grupos[i].discos.length; j++) {
        grupos += "<li>" + festivales.Grupos[i].discos[j] + "</li>";
    }
 
    grupos += "</ul>";
}
 
grupos += "</article>";
 
container.innerHTML += grupos;
 