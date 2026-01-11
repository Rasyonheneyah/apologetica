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


