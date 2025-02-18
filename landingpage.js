// Função para alternar o menu lateral
function toggleSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('open');
}

// Fecha o menu lateral se clicar fora dele
document.addEventListener('click', function(event) {
    const sideMenu = document.getElementById('sideMenu');
    const menuButton = document.querySelector('.menu-button');
    
    // Verifica se o clique foi fora do menu lateral e do botão
    if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
        sideMenu.classList.remove('open');
    }
});

// Impede que o clique dentro do menu feche o menu
document.getElementById('sideMenu').addEventListener('click', function(event) {
    event.stopPropagation();
});

// Função para exibir conteúdo
function showContent(section) {
    // Exibir tela de carregamento
    document.getElementById('loadingScreen').style.display = 'flex';
    
    // Simular carregamento de conteúdo
    setTimeout(function() {
        const content = document.getElementById('content');
        
        // Atualizar o conteúdo dependendo da seção clicada
        if (section === 'podcast') {
            content.innerHTML = `<h2>Podcast</h2><p>Conteúdo relacionado a podcast.</p>`;
        } else if (section === 'conteudos') {
            content.innerHTML = `<h2>Conteúdos</h2><p>Conteúdo relacionado aos conteúdos.</p>`;
        } else if (section === 'creditos') {
            content.innerHTML = `<h2>Créditos</h2><p>Conteúdo relacionado aos créditos.</p>`;
        } else if (section === 'doencas') {
            content.innerHTML = `<h2>Doenças</h2><p>Conteúdo relacionado às doenças.</p>`;
        }

        // Ocultar tela de carregamento
        document.getElementById('loadingScreen').style.display = 'none';
    }, 1500); // Simula um carregamento de 1.5 segundos
}

// Função de login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const btn = document.querySelector('.btn');

    if (username === 'admin' && password === '1234') {
        btn.classList.add('glow');
        setTimeout(() => {
            window.location.href = 'index.html'; // Redireciona para a página principal
        }, 2000);
    } else {
        alert('Usuário ou senha inválidos!');
    }
}

document.getElementById('entrarBtn').addEventListener('click', () => {
    document.querySelector('.box').style.transform = 'translateX(-50%)';
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        login();
    }
});

document.getElementById('username').addEventListener('input', function() {
    if (this.value === 'admin') {
        document.getElementById('password').value = '1234';
    }
});

// Função para exibir o menu lateral
function toggleSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('open');
}

// Função para mostrar o conteúdo das páginas
function showContent(pageId) {
    // Esconder todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    // Mostrar a página selecionada
    document.getElementById(`page-${pageId}`).classList.remove('hidden');

    // Esconder o menu lateral
    document.getElementById('sideMenu').classList.remove('open');

    // Mostrar o botão de voltar
    document.querySelector('.back-button').style.display = 'block';
}

// Função para mostrar o conteúdo principal
function showMenu() {
    // Esconder todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    // Mostrar o conteúdo principal
    document.getElementById('content').style.display = 'block';

    // Esconder o botão de voltar
    document.querySelector('.back-button').style.display = 'none';
}

// Função para exibir ícones
function showIcons() {
    var iconContainer = document.getElementById('icon-container');
    iconContainer.style.width = 'auto';
}
// Função para mostrar a tela de login
function mostrarLogin() {
    document.querySelector('.container').classList.add('active');
  }

  // Função para validar o login e redirecionar
  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "1234") {
      document.getElementById('successMessage').style.display = 'block';
      setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
        // Redireciona para a página index.html após login bem-sucedido
        window.location.href = "index.html"; // Ajuste o caminho para a página desejada
      }, 3000);
    } else {
      document.getElementById('errorMessage').style.display = 'block';
      setTimeout(function() {
        document.getElementById('errorMessage').style.display = 'none';
      }, 3000);
    }
  }

  // Permite que o usuário pressione "Enter" para logar
  document.getElementById('password').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      login();
    }
  });
  function showContent(page) {
    // Usando fetch para carregar o conteúdo da página
    fetch(page)
        .then(response => response.text())
        .then(data => {
            // Inserindo o conteúdo na div com id 'conteudo'
            document.getElementById('conteudo').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar a página:', error);
        });
}
let page = 1; // Número da página que será carregada
        let loading = false; // Evita múltiplas requisições ao mesmo tempo

        function loadMoreContent() {
            if (loading) return;
            loading = true;
            document.getElementById('loading').style.display = 'block';

        }
        function logout() {
            // Remova os dados de autenticação do localStorage ou sessionStorage
            localStorage.removeItem("userToken"); // Exemplo, ajuste conforme necessário
            sessionStorage.removeItem("userSession");
    
            // Redireciona para a página de login ou outra página desejada
            window.location.href = "login.html"; // Altere para a URL correta
        }  
        document.addEventListener("DOMContentLoaded", function() {
            const ticker = document.querySelector('.ticker');
            const container = document.querySelector('.ticker-container');
            
            // Obter a largura total do conteúdo dentro do ticker
            let tickerWidth = 0;
            const tickerItems = ticker.querySelectorAll('span');
            
            tickerItems.forEach(item => {
              tickerWidth += item.offsetWidth; // Calcula a largura total somando a largura de cada item
            });
            
            // Ajustar a largura do ticker para acomodar todo o conteúdo
            ticker.style.width = tickerWidth + "px";
            
            // Velocidade de deslocamento (ajuste conforme necessário)
            const speed = 0.2; // Ajuste a velocidade conforme necessário
            let x = container.offsetWidth;  // Começar com o ticker fora da tela à direita
            
            // Iniciar a animação imediatamente
            function animateTicker() {
              x -= speed;
              
              // Quando o ticker sair completamente à esquerda, reinicia a posição
              if (x < -tickerWidth) { // Ajuste para reiniciar quando todo o ticker sair da tela
                x = container.offsetWidth; // Volta para a posição inicial à direita
              }
              
              ticker.style.transform = `translateX(${x}px)`; // Aplica a posição
              
              // Faz a animação continuar sem demora
              requestAnimationFrame(animateTicker); // Chama o próximo frame
            }
            
            // Garantir que a animação comece imediatamente após o carregamento
            x = container.offsetWidth; // Começar imediatamente com o ticker à direita
            animateTicker(); // Inicia a animação imediatamente
          });
          

        
        
        
          
          
        
          


    