# 🚀 ONG Tech Solidária — Single Page Application (SPA)

Aplicação web interativa e reativa desenvolvida para a **ONG Tech Solidária**, com foco em democratizar a inclusão digital e o descarte consciente de lixo eletrônico. O projeto foi transformado de uma estrutura estática para uma **Single Page Application (SPA)** utilizando **JavaScript Vanilla (ES6+)**.

---

## 🛠️ Tecnologias e Recursos Utilizados

* **HTML5 Semântico**: Estruturação acessível da interface.
* **CSS3**: Design System modular com CSS Grid, Flexbox e Variáveis Globais (`:root`).
* **JavaScript (ES6 Modules)**: Arquitetura modularizada (`import`/`export`) e orientada ao Princípio da Responsabilidade Única (SRP).
* **Hash Routing**: Roteamento dinâmico sem recarregamento de página (`hashchange`).
* **Web Storage API**: Persistência de dados locais no navegador via `localStorage`.
* **Notyf & IMask.js**: Bibliotecas externas para notificações do tipo *toast* e máscaras de formulário em tempo real.

---

## 📁 Estrutura do Projeto

```text
ong-tech-solidaria/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   └── modules/
│       ├── router.js
│       ├── templates.js
│       ├── storage.js
│       └── validator.js
└── assets/
    └── img/