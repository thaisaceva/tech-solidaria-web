# 🌐 ONG Tech Solidária — Plataforma Web Institucional

[![W3C Validation](https://img.shields.io/badge/W3C-Valid%20HTML5-success)](https://validator.w3.org/)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-blue)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Plataforma web institucional desenvolvida para a **ONG Tech Solidária**, organização voltada à promoção da inclusão digital, letramento tecnológico e descarte sustentável de resíduos eletrônicos (E-Lixo) em comunidades vulneráveis.

🔗 **Acesse o projeto publicado (GitHub Pages):** [https://thaisaceva.github.io/ong-tech-solidaria/](https://thaisaceva.github.io/ong-tech-solidaria/)

---

## 🎯 Objetivos do Projeto

- **Impacto Social:** Apresentar a missão da ONG, métricas de impacto e captar voluntários/doadores de equipamentos.
- **Conformidade Técnica:** Aplicação rigorosa dos padrões de semântica do **HTML5**, regras de acessibilidade (**WCAG 2.1 AA**) e validação completa junto ao **W3C Validator**.
- **TI Verde & Performance:** Otimização do carregamento e reutilização de recursos visuais para reduzir a pegada de carbono da aplicação.

---

## 🛠️ Tecnologias e Recursos Utilizados

- **HTML5 Semântico:** Marcação estruturada utilizando tags como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` e `<footer>`.
- **CSS3 Moderno:** Folha de estilos externa com reset universal, CSS Grid/Flexbox para layout responsivo, variáveis de cor e regras de acessibilidade de foco.
- **Validação Nativa de Formulários:** Padrões em Expressões Regulares (`pattern`), máscaras dinâmicas e restrições nativas do HTML5 para validação de CPF, CEP e Telefone sem dependências de scripts pesados.
- **Acessibilidade (ARIA):** Implementação de atributos `aria-labelledby`, `aria-current` e suporte pleno para leitores de tela e navegação via teclado.

---

## 📁 Estrutura do Repositório

```text
ong-tech-solidaria/
│
├── index.html               # Página inicial institucional (Home)
├── projetos.html            # Página de apresentação dos projetos sociais
├── cadastro.html            # Formulário interativo de doações e voluntariado
├── README.md                # Documentação oficial do repositório
│
├── css/
│   └── style.css            # Folha de estilos centralizada e responsiva
│
└── assets/
    └── img/                 # Mídias e vetores otimizados (SVG / JPG)
        ├── logo-tech-solidaria.svg
        ├── inclusao-digital.jpg
        ├── projeto-reconecta.jpg
        ├── oficinas-letramento.jpg
        └── estacao-elixo.jpg
