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

// --- LÓGICA DO POP-UP ---

const modal = document.getElementById('modal-projeto');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescricao = document.getElementById('modal-descricao');
const modalLink = document.getElementById('modal-link');
const btnFechar = document.querySelector('.fechar-modal');
const botoesLerMais = document.querySelectorAll('.btn-ler-mais');

botoesLerMais.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        const card = evento.target.closest('.cartao-projeto');
        
        const titulo = card.querySelector('h3').innerText;
        const descricaoHTML = card.querySelector('.descricao-projeto').innerHTML;
        const linkTag = card.querySelector('.link-projeto');
        const linkHref = linkTag.getAttribute('href');
        
        
        modalTitulo.innerText = titulo;
        modalDescricao.innerHTML = descricaoHTML;
        
        if (linkHref && linkHref !== "#") {
            modalLink.href = linkHref;
            modalLink.style.display = "inline-block"; 
        } else {
            modalLink.style.display = "none";  
        }

        
        modal.classList.add('mostrar-modal');
    });
});

btnFechar.addEventListener('click', () => {
    modal.classList.remove('mostrar-modal');
});

window.addEventListener('click', (evento) => {
    if (evento.target === modal) {
        modal.classList.remove('mostrar-modal');
    }
});