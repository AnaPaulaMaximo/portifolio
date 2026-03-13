
let projetos = document.querySelectorAll('.escondido');


function animarAoRolar(entradas) {

    for (let i = 0; i < entradas.length; i++) {
        let elemento = entradas[i];
        

        if (elemento.isIntersecting == true) {
            elemento.target.classList.add('mostrar');
        }
    }
}


let observador = new IntersectionObserver(animarAoRolar);


for (let i = 0; i < projetos.length; i++) {
    observador.observe(projetos[i]);
}