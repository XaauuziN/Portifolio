//Login Screen

document.addEventListener('DOMContentLoaded', function() {
    const loginSubmit = document.getElementById('login-submit');
    const signupSubmit = document.getElementById('signup-submit');

    loginSubmit.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        // Obtendo valores dos campos de login
        const logEmail = document.getElementById('logemail').value.trim();
        const logPass = document.getElementById('logpass').value.trim();

        // Validação
        if (!logEmail || !logPass) {
            alert('Por favor, preencha todos os campos de login.');
            return;
        }

        // Validação da senha
        if (logPass.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        // Validação simples de email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(logEmail)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        // Redirecionar para a página de home (ou enviar dados para o servidor)
        window.location.href = '../Home/Home.html';
    });


    //Signup Screen

    signupSubmit.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        // Obtendo valores dos campos de cadastro
        const signUpName = document.getElementById('logname').value.trim();
        const signUpEmail = document.getElementById('logemail-signup').value.trim();
        const signUpPass = document.getElementById('logpass-signup').value.trim();

        // Validação
        if (!signUpName || !signUpEmail || !signUpPass) {
            alert('Por favor, preencha todos os campos de cadastro.');
            return;
        }

        // Validação simples de email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(signUpEmail)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        // Validação da senha
        if (signUpPass.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        // Redirecionar para a página de home (ou enviar dados para o servidor)
        window.location.href = '../Home/Home.html';
        


    });
});