document.addEventListener('DOMContentLoaded', function() {
    // Pegando os botões
    const loginSubmit = document.getElementById('login-submit');
    const signupSubmit = document.getElementById('signup-submit');
    const forgotSubmit = document.getElementById('forgot-submit');

    // Login Screen
    if (loginSubmit) {
        loginSubmit.addEventListener('click', function(event) {
            event.preventDefault();

            // Obtendo valores dos campos de login
            const logEmail = document.getElementById('logemail').value.trim();
            const logPass = document.getElementById('logpass').value.trim();

            // Validação
            if (!logEmail || !logPass) {
                alert('Por favor, preencha todos os campos de login.');
                return;
            }

            if (logPass.length < 6) {
                alert('A senha deve ter pelo menos 6 caracteres.');
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(logEmail)) {
                alert('Por favor, insira um email válido.');
                return;
            }

            // Mensagem de sucesso
            alert('Login realizado com sucesso!');

            // Redirecionar
            window.location.href = '/Portifolio/Home/Home.html';

        });
    }

    // Signup Screen
    if (signupSubmit) {
        signupSubmit.addEventListener('click', function(event) {
            event.preventDefault();

            const signUpName = document.getElementById('logname').value.trim();
            const signUpEmail = document.getElementById('logemail-signup').value.trim();
            const signUpPass = document.getElementById('logpass-signup').value.trim();

            if (!signUpName || !signUpEmail || !signUpPass) {
                alert('Por favor, preencha todos os campos de cadastro.');
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(signUpEmail)) {
                alert('Por favor, insira um email válido.');
                return;
            }

            if (signUpPass.length < 6) {
                alert('A senha deve ter pelo menos 6 caracteres.');
                return;
            }

            alert('Cadastro realizado com sucesso!');

            window.location.href = 'Home/Home.html';
        });
    }

    // Forgot Password Screen
    if (forgotSubmit) {
        forgotSubmit.addEventListener("click", function(event) {
            event.preventDefault();

            const forgotEmail = document.getElementById("forgotlogemail").value.trim();

            if (!forgotEmail) {
                alert("Por favor, insira seu e-mail.");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(forgotEmail)) {
                alert("Por favor, insira um email válido.");
                return;
            }

            alert("Um e-mail de redefinição de senha foi enviado para sua caixa de mensagens.");
        });
    }
});
