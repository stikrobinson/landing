"use strict";

/**
 * Muestra un toast interactivo agregando la clase 'md:block'
 * al elemento con id 'toast-interactive', si existe en el DOM.
 */
const showToast = () => {
    const toast = document.querySelector("#toast-interactive")
    if (toast !== null){
        toast.classList.add("md:block");
    }
}

/**
 * Agrega un listener al elemento con id 'demo' para abrir un video de YouTube
 * en una nueva pestaña al hacer clic, si el elemento existe en el DOM.
 */
const showVideo = () => {
    const demo = document.querySelector("#demo");
    if(demo !== null){
        demo.addEventListener("click", () => {
            window.open("https://www.youtube.com/watch?v=q6EoRBvdVPQ", "_blank");
        });
    }
}

(() => {
    showToast();
    showVideo();
})();