const masVocales = (cadena1, cadena2) => {
  const vocales = "aeiouAEIOU";
  let contador1 = 0;
  let contador2 = 0;

  for (let i = 0; i < cadena1.length; i++) {
    if (vocales.includes(cadena1[i])) contador1++;
  }
  for (let i = 0; i < cadena2.length; i++) {
    if (vocales.includes(cadena2[i])) contador2++;
  }
  
  //Por consola
  if (contador1 > contador2)
    console.log(cadena1);
  else if (contador2 > contador1)
    console.log(cadena2);
  else console.log("Tienen las mismas vocales");

  //Por pantalla
  if (contador1 > contador2)
    document.write(cadena1);
  else if (contador2 > contador1)
    document.write(cadena2);
  else document.write("Tienen las mismas vocales");
};

masVocales("murcielago", "lagarto");
