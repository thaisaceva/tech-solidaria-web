import { renderHome, renderProjetos, renderCadastro } from './templates.js';

const routes = {
    '#/': renderHome,
    '#/projetos': renderProjetos,
    '#/cadastro': renderCadastro
};

export function navigate() {
    const appContainer = document.getElementById('app');
    if (!appContainer) return;

    const hash = window.location.hash || '#/';
    const renderTemplate = routes[hash] || routes['#/'];

    // 1. Limpa o contêiner e injeta o novo fragmento HTML
    appContainer.innerHTML = '';
    appContainer.innerHTML = renderTemplate();

    // 2. Atualiza estado visual da navegação
    updateActiveMenu(hash);
    window.scrollTo(0, 0);
}

function updateActiveMenu(currentHash) {
    document.querySelectorAll('#main-nav a').forEach(link => {
        if (link.getAttribute('href') === currentHash) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

export function initRouter() {
    window.addEventListener('hashchange', navigate);
    window.addEventListener('DOMContentLoaded', navigate);
}