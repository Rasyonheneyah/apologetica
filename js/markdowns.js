document.addEventListener('DOMContentLoaded', () => {
  const conteudo = document.getElementById('conteudo-cru');
  if (!conteudo) return;

  // BLINDAGEM: pega apenas texto, não HTML executável
  const textoCru = conteudo.textContent.trim();
  const linhas = textoCru.split(/\r?\n/);

  const resultado = linhas.map(linha => {
    const texto = linha.trim();
    if (!texto) return '';

    // Citação (-#) → referência
    if (texto.startsWith('-#')) {
      return `<p class="referencia">${aplicarMarkdown(texto.slice(2).trim())}</p>`;
    }

    // Citação (-)
    if (texto.startsWith('-')) {
      return `<p class="citacao">${aplicarMarkdown(texto.slice(1).trim())}</p>`;
    }

    // Subtítulo (##)
    if (texto.startsWith('##')) {
      return `<h3>${aplicarMarkdown(texto.slice(2).trim())}</h3>`;
    }

    // Título (#)
    if (texto.startsWith('#')) {
      return `<h2>${aplicarMarkdown(texto.slice(1).trim())}</h2>`;
    }

    // Parágrafo normal
    return `<p>${aplicarMarkdown(texto)}</p>`;
  });

  conteudo.innerHTML = resultado.join('');

  // Markdown simples e seguro
  function aplicarMarkdown(texto) {
    // Links [texto](url)
    texto = texto.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // Negrito **texto**
    texto = texto.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Itálico *texto* (sem conflitar com **)
    texto = texto.replace(/\*(?!\*)(.+?)\*/g, '<em>$1</em>');

    return texto;
  }
});
