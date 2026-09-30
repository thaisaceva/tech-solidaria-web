import { saveCadastro } from './storage.js';

const notyf = new Notyf({
    duration: 4000,
    position: { x: 'right', y: 'top' }
});

export function setupValidation() {
    const form = document.getElementById('form-cadastro');
    if (!form) return;

    // Aplica máscara de telefone via IMask.js
    const phoneInput = document.getElementById('telefone');
    if (phoneInput && window.IMask) {
        IMask(phoneInput, { mask: '(00) 00000-0000' });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const telefone = document.getElementById('telefone');

        let isValid = true;

        // Validação do Nome
        if (nome.value.trim().length < 3) {
            showError(nome, 'error-nome', 'O nome deve ter pelo menos 3 caracteres.');
            isValid = false;
        } else {
            clearError(nome, 'error-nome');
        }

        // Validação do Email via RegEx
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            showError(email, 'error-email', 'Insira um e-mail válido.');
            isValid = false;
        } else {
            clearError(email, 'error-email');
        }

        // Validação do Telefone
        if (telefone.value.trim().length < 14) {
            showError(telefone, 'error-telefone', 'Insira um telefone válido.');
            isValid = false;
        } else {
            clearError(telefone, 'error-telefone');
        }

        if (isValid) {
            const dados = {
                nome: nome.value.trim(),
                email: email.value.trim(),
                telefone: telefone.value.trim()
            };

            if (saveCadastro(dados)) {
                notyf.success('Cadastro realizado com sucesso!');
                form.reset();
                document.querySelectorAll('.form-control').forEach(i => i.classList.remove('is-valid'));
            } else {
                notyf.error('Erro ao guardar os dados.');
            }
        } else {
            notyf.error('Por favor, corrija os erros no formulário.');
        }
    });
}

function showError(input, errorId, message) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
        errorEl.innerText = message;
        errorEl.classList.add('is-visible');
    }
}

function clearError(input, errorId) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
        errorEl.innerText = '';
        errorEl.classList.remove('is-visible');
    }
}