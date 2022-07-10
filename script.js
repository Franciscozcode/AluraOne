/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

let inputMensajeAEncriptar = document.querySelector("#input-texto");

let botonEncriptar = document.querySelector("#btn-encriptar");

let botonDesencriptar = document.querySelector("#btn-desencriptar");

let botonCopiar = document.querySelector("#btn-copy");

let inputResultado = document.querySelector("#msg");



function encriptar () {
    var mensaje = inputMensajeAEncriptar.value;
    var reemplazo1 = mensaje.replaceAll("e", "enter");
    var reemplazo2 = reemplazo1.replaceAll("i", "imes");
    var reemplazo3 = reemplazo2.replaceAll("a", "ai");
    var reemplazo4 = reemplazo3.replaceAll("u", "ufat");
    var reemplazo5 = reemplazo4.replaceAll("o", "ober");

    inputResultado.value = reemplazo5;

}


function desencriptar () {
    var mensaje = inputMensajeAEncriptar.value;
    var reemplazo1 = mensaje.replaceAll("enter", "e");
    var reemplazo2 = reemplazo1.replaceAll("imes", "i");
    var reemplazo3 = reemplazo2.replaceAll("ai", "a");
    var reemplazo4 = reemplazo3.replaceAll("ufat", "u");
    var reemplazo5 = reemplazo4.replaceAll("ober", "o");

    inputResultado.value = reemplazo5;
}


function copiarTexto(){
    var resultado = inputResultado.value;
    navigator.clipboard.writeText(resultado);
}


botonEncriptar.onclick = encriptar;

botonDesencriptar.onclick = desencriptar;

botonCopiar.onclick = copiarTexto;


let invalidChar = /[A-Z0-9]/g;

 let verificador = document.querySelector("#input-texto").value;
 
let prueba = verificador.match(invalidChar);
 if (verificador == prueba)  {
  alert("Caracter Invalido")
} 
