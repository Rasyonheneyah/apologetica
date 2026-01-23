document.addEventListener('DOMContentLoaded', () => {
  const conteudo = document.getElementById('conteudo-cru');
  if (!conteudo) return;

  conteudo.querySelectorAll('p').forEach(p => {
    const texto = p.textContent.trim();

    if (texto.startsWith('-#')) {
      p.classList.add('referencia');
      p.textContent = texto.slice(2).trim();
    } else if (texto.startsWith('/')) {
      p.classList.add('citacao');
      p.textContent = texto.slice(1).trim();
    }
  });
});
