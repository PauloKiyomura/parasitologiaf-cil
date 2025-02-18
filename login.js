document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const cadastroForm = document.getElementById("cadastroForm");
    const loginButton = document.querySelector(".loginButton");
    const cadastroButton = document.querySelector(".cadastroButton");
    const card = document.querySelector(".card");

    loginButton.onclick = () => {
        card.classList.remove("cadastroActive");
        card.classList.add("loginActive");
    };

    cadastroButton.onclick = () => {
        card.classList.remove("loginActive");
        card.classList.add("cadastroActive");
    };

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        handleLogin();
    });

    cadastroForm.addEventListener("submit", (event) => {
        event.preventDefault();
        handleCadastro();
    });

    // Remover destaque de erro ao começar a digitar
    document.querySelector("#loginEmail").addEventListener("input", function(){
        this.classList.remove("inputError");
    });
    document.querySelector("#loginSenha").addEventListener("input", function(){
        this.classList.remove("inputError");
    });
});

function mostrarNotificacao(tipo, mensagem) {
    const notification = document.createElement('div');
    notification.classList.add('notification', tipo, 'show');
    
    const icon = document.createElement('span');
    icon.classList.add('icon');
    icon.textContent = tipo === 'success' ? '✔️' : tipo === 'error' ? '❌' : tipo === 'warning' ? '⚠️' : 'ℹ️';
    notification.appendChild(icon);

    const message = document.createElement('p');
    message.textContent = mensagem;
    notification.appendChild(message);

    const closeButton = document.createElement('button');
    closeButton.classList.add('closeButton');
    closeButton.textContent = '×';
    closeButton.onclick = () => esconderNotificacao(notification);
    notification.appendChild(closeButton);

    document.body.appendChild(notification);

    setTimeout(() => {
        esconderNotificacao(notification);
    }, 2000);
}

function esconderNotificacao(notification) {
    notification.classList.add('hide');
    setTimeout(() => {
        notification.remove();
    }, 500);
}

function validarEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|gov\.br)$/;
    return emailRegex.test(email);
}

function handleCadastro() {
    const nome = document.querySelector("input[name='nome']").value;
    const email = document.querySelector("#cadastroEmail").value;
    const senha = document.querySelector("#cadastroSenha").value;
    const confirmeSenha = document.querySelector("#confirmeSenha").value;
    
    if (!validarEmail(email)) {
        mostrarNotificacao('error', 'Email inválido! Use @gmail.com, @hotmail.com ou @gov.br');
        return;
    }

    if (senha.length < 6) {
        mostrarNotificacao('warning', 'A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    if (senha !== confirmeSenha) {
        mostrarNotificacao('error', 'As senhas não coincidem!');
        return;
    }

    if (localStorage.getItem("userEmail") === email) {
        mostrarNotificacao("info", "Usuário já cadastrado! Faça login.");
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userSenha", senha);
    localStorage.setItem("userNome", nome);
    
    mostrarNotificacao('success', 'Cadastro realizado com sucesso! Agora faça login.');
}

function handleLogin() {
    const emailField = document.querySelector("#loginEmail");
    const senhaField = document.querySelector("#loginSenha");
    const email = emailField.value;
    const senha = senhaField.value;
    
    const storedEmail = localStorage.getItem("userEmail");
    const storedSenha = localStorage.getItem("userSenha");
    
    // Remover qualquer destaque anterior
    emailField.classList.remove("inputError");
    senhaField.classList.remove("inputError");

    // Verifica individualmente qual campo está incorreto
    if (email !== storedEmail || senha !== storedSenha) {
        let errorMessage = '';
        if (email !== storedEmail && senha !== storedSenha) {
            errorMessage = 'Email e senha incorretos!';
            emailField.classList.add("inputError");
            senhaField.classList.add("inputError");
            emailField.focus();
        } else if (email !== storedEmail) {
            errorMessage = 'Email incorreto!';
            emailField.classList.add("inputError");
            emailField.focus();
        } else if (senha !== storedSenha) {
            errorMessage = 'Senha incorreta!';
            senhaField.classList.add("inputError");
            senhaField.focus();
        }
        mostrarNotificacao('error', errorMessage);
        return;
    }
    
    mostrarNotificacao('success', 'Login realizado com sucesso!');
    setTimeout(() => {
        window.location.href = "landingpage.html";
    }, 2000);
}