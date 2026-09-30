// Base de dados mockada para renderização dinâmica dos projetos
const projetosData = [
    {
        id: 'reconecta',
        badgeClass: 'badge-success',
        badgeText: 'Ativo',
        titulo: 'Projeto Reconecta',
        descricao: 'Coleta, recondicionamento e doação de computadores para escolas públicas e centros comunitários.',
        publico: 'Escolas públicas e estudantes em vulnerabilidade social.',
        btnText: 'Quero Doar Computador',
        btnClass: 'btn-primary'
    },
    {
        id: 'letramento',
        badgeClass: 'badge-warning',
        badgeText: 'Inscrições Abertas',
        titulo: 'Letramento Digital',
        descricao: 'Oficinas presenciais gratuitas de informática básica, navegação segura e introdução à programação.',
        publico: 'Jovens e idosos em busca de capacitação digital.',
        btnText: 'Seja Instrutor Voluntário',
        btnClass: 'btn-primary'
    },
    {
        id: 'elixo',
        badgeClass: 'badge-primary',
        badgeText: 'Sustentabilidade',
        titulo: 'Estação E-Lixo',
        descricao: 'Pontos de coleta e descarte ecológico correto para resíduos eletrônicos e peças sem uso.',
        publico: 'Comunidade local e meio ambiente.',
        btnText: 'Encontrar Ponto de Coleta',
        btnClass: 'btn-secondary'
    }
];

// Função geradora do template da página de Projetos
export function renderProjetos() {
    // Processamento do array de dados convertendo em cards HTML
    const cardsHTML = projetosData.map(projeto => `
        <article id="${projeto.id}" class="card-item card-project">
            <span class="badge ${projeto.badgeClass}">${projeto.badgeText}</span>
            <h2>${projeto.titulo}</h2>
            <p>${projeto.descricao}</p>
            <p><strong>Público Impactado:</strong> ${projeto.publico}</p>
            <a href="#/cadastro" class="btn ${projeto.btnClass}" style="margin-top: var(--space-xs);">${projeto.btnText}</a>
        </article>
    `).join('');

    return `
        <section style="margin-bottom: var(--space-lg);">
            <h1>Nossos Projetos Sociais</h1>
            <p>Conheça as iniciativas da ONG Tech Solidária voltadas para democratizar o acesso à tecnologia.</p>
        </section>

        <div class="card-grid">
            ${cardsHTML}
        </div>
    `;
}

// Template da página Home
export function renderHome() {
    return `
        <section class="hero-section" style="padding: var(--space-lg) 0; text-align: center;">
            <h1>Tecnologia para Transformar Vidas</h1>
            <p style="margin-bottom: var(--space-md);">Promovemos inclusão digital e descarte sustentável de eletrônicos no Distrito Federal.</p>
            <a href="#/cadastro" class="btn btn-primary">Participe da Nossa Rede</a>
        </section>
    `;
}

// Template da página de Cadastro
export function renderCadastro() {
    return `
        <section style="max-width: 800px; margin: 0 auto;">
            <h1>Formulário de Cadastro</h1>
            <p style="margin-bottom: var(--space-md);">Registre-se como voluntário ou doador de equipamentos.</p>
            <form id="form-cadastro">
                <div class="form-group">
                    <label for="nome" class="form-label">Nome Completo:*</label>
                    <input type="text" id="nome" name="nome" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="email" class="form-label">E-mail:*</label>
                    <input type="email" id="email" name="email" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary">Enviar Cadastro</button>
            </form>
        </section>
    `;
}