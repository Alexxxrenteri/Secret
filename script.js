var botonencriptar = document.querySelector(".btn-encriptar");
var botondesencriptar = document.querySelector(".btn-desencriptar");
var muneco= document.querySelector(".btn-encriptar");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonencriptar.onclick = encriptar ;
botondesencriptar.onclick= desencriptar ;

function encriptar(){

    ocultaradelante();
    var cajatexto = recuperartexto();
    resultado.textContent = encriptarTexto (cajatexto);

}

function desencriptar([])