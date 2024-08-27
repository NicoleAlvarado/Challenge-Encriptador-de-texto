/*
Author: Nicole Alvarado Ramírez
Curso: Principiante en Programación G7 - ONE 
*/

/*Ocultar el espacio de output-text*/
document.getElementById("rectangle-output-text").style.display = "none";

/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function functionEncrypt() {
  let texto = document.getElementById("input-text").value;

  //Evitar mayúsculas y caracteres especiales
  texto = texto.toLowerCase().replace(/[^a-z\s]/g, "");

  let encryptedText = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  document.getElementById("output-text").value = encryptedText;

  /*Ocultar div de la derecha*/
  document.getElementById("rectangle-icon-message").style.visibility = "hidden";
  document.getElementById("rectangle-output-text").style.display = "flex";
}

function functionDecrypt() {
  let texto = document.getElementById("input-text").value;

  //Evitar mayúsculas y caracteres especiales
  texto = texto.toLowerCase().replace(/[^a-z\s]/g, "");
  
  let decryptedText = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  document.getElementById("output-text").value = decryptedText;
}

function functionCopy() {
  // Función para habilidad de copiado, tiene propiedades que se adaptan a dispositivos móviles
  let outputText = document.getElementById("output-text");
  outputText.select();
  outputText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  //alert("Texto copiado: " + outputText.value);
}
