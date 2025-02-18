window.onscroll = function() {
    var footer = document.querySelector('.footer');
    var docHeight = document.documentElement.scrollHeight; // Altura total do conteúdo da página
    var scrollPosition = window.innerHeight + window.scrollY; // Posição atual da rolagem + altura da tela
  
    // Quando o usuário rolar até o final da página
    if (scrollPosition >= docHeight) {
      footer.classList.add('show'); // Adiciona a classe 'show' para mostrar o rodapé
    } else {
      footer.classList.remove('show'); // Remove a classe 'show' para esconder o rodapé
    }
  };