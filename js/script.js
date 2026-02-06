function toggleDiv(div, event) {
    event.stopPropagation()
    const toggleDiv = document.querySelector(`${div}`);
    toggleDiv.classList.toggle('show');
}


/*
  Listener global.
  Fecha o menu APENAS quando:
  - ele está aberto (classe 'show')
  - o clique ocorreu fora do menu
*/

const areaMenu = document.querySelector('#menu');

document.addEventListener('click', (event) => {
  if (
    areaMenu.classList.contains('show') &&
    !areaMenu.contains(event.target)
  ) {
    areaMenu.classList.remove('show');
  }
});

/* Mudou tamanho da tela? Menu fica invisível*/
window.addEventListener('resize', () => {
    areaMenu.classList.remove('show');
});

// Copyright sempre ano atual
    const anoAtual = document.querySelector(`#anoAtual`)
    const dataAtual = new Date()
    anoAtual.innerText = `${dataAtual.getFullYear()}`


const mediaDesktop = window.matchMedia('(min-width: 1024px)');

function ajustarResumoArtigos() {
    if (!mediaDesktop.matches) {
        // limpa estilos quando sair do desktop
        document.querySelectorAll('.artigos-lista article p').forEach(p => {
            p.style.maxHeight = '';
            p.style.overflow = '';
        });
        return;
    }

    document.querySelectorAll('.artigos-lista article').forEach(article => {
        const img = article.querySelector('img');
        const conteudo = article.querySelector('.artigo-conteudo');
        const titulo = conteudo.querySelector('h3');
        const autor = conteudo.querySelector('.autor-artigo');
        const paragrafo = conteudo.querySelector('p');

        if (!img || !paragrafo || !titulo) return;

        const alturaDisponivel = img.clientHeight;
        const alturaUsada =
            titulo.offsetHeight +
            (autor ? autor.offsetHeight : 0);

            const folga = 6; //  entre 4–8px

            const alturaTexto = alturaDisponivel - alturaUsada - folga;

        if (alturaTexto > 0) {
            paragrafo.style.maxHeight = alturaTexto + 'px';
            paragrafo.style.overflow = 'hidden';
        }
    });
}

// carregar
window.addEventListener('load', ajustarResumoArtigos);

// redimensionar
window.addEventListener('resize', ajustarResumoArtigos);

// mudar breakpoint (ex: girar tela)
mediaDesktop.addEventListener('change', ajustarResumoArtigos);
