var menu = document.getElementById("callEnlaces");
var cita_llamada = document.getElementById("cita_llamada");

menu.addEventListener("click", openCloseContenido);
cita_llamada.addEventListener("click", llamada_para_cita);

var contenido = document.getElementById("enlaces");

function openCloseContenido() {
    if ("enlaces" === contenido.getAttribute("id")) {
        contenido.id = "enlaces-open";
    } else {
        if ("enlaces-open" === contenido.getAttribute("id")) {
            (contenido.id = "enlaces");
        }
    }
}

function llamada_para_cita() {
    window.open('tel:967568641');
}