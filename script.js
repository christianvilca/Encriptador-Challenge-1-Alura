
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

const btnEncrypt = document.getElementById("btn-encriptar")
const btnDecrypt = document.getElementById("btn-desencriptar")
const btnCopy = document.getElementById("btn-copy")
const textEncript = document.getElementById("input-texto")
const textMsg = document.getElementById("msg")
const labelError = document.getElementById("label-error")

textEncript.focus();

btnEncrypt.addEventListener("click", function (event) {
  event.preventDefault();

  validation()

  textMsg.value = textEncript.value.toLowerCase()
    .replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/a/g,"ai")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat")

})

btnDecrypt.addEventListener("click", function (event) {
  event.preventDefault();

  validation()

  textMsg.value = textEncript.value
    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u")

})

function validation(){
  labelError.classList.add("invisible")

  if(!textEncript.value.match(/^[A-Za-z]+$/g)) {
    labelError.classList.remove("invisible")
    console.log("first")
    return;
  }
}

btnCopy.addEventListener("click", function (event) {
  event.preventDefault();

  textMsg.select();
  document.execCommand("copy");

})