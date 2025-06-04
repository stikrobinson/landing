"use strict";

(() => {
    alert("¡Bienvenido a la página!");
    console.log("Mensaje de bienvenida mostrado.");
})();

/**
 * Muestra una notificación tipo toast en la interfaz.
 * Busca el elemento con id "toast-interactive" y le agrega la clase "md:block" para hacerlo visible.
 * @returns {void} No retorna ningún valor.
 */
const showToast = () =>{
    const toast = document.getElementById("toast-interactive");
    if(toast) {toast.classList.add("md:block")};
}

/**
 * Asigna un evento click al elemento con id "demo" para abrir un video en una nueva pestaña.
 * Busca el elemento y, si existe, agrega el evento.
 * @returns {void} No retorna ningún valor.
 */
const showVideo = () =>{
    const demo = document.getElementById("demo");
    if(demo){
        demo.addEventListener("click", () =>{
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        });
    }
}

(() => {
    showToast();
    showVideo();
})();