let inicio = document.querySelector("#inicio");
let seccion1 = document.querySelector("#seccion1");

inicio.addEventListener ("click", irPrimero, false);
function irPrimero (e) {
   seccion1.scrollIntoView({behavior: "smooth"});
}

let sobreMi = document.querySelector("#sobreMi");
let seccion2 = document.querySelector("#seccion2");

sobreMi.addEventListener("click", irSegundo, false);
function irSegundo (e){
    seccion2.scrollIntoView ({behavior: "smooth"});
} 

let contacto = document.querySelector("#contacto");
let seccion3 = document.querySelector("#seccion3");

contacto.addEventListener("click", irTercero, false);
function irTercero (e){
    seccion3.scrollIntoView ({behavior: "smooth"});
} 

function irweb1() {
    window.open("https://github.com/mllanos73");
}
function irweb2() {
    window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=marcelo_llanos@hotmail.com");
}
function irweb3() {
    window.open("https://www.facebook.com/marcelo.llanos.142");
}



