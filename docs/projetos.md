# Projetos

## Full Page Capture – Extensão Chrome para Captura de Páginas
*Abr 2026*

Extensão para Google Chrome que captura automaticamente a página inteira de cada URL visitada durante a sessão, permitindo registrar e revisar o histórico visual de navegação.

**Funcionalidades principais:**
- Captura automática de página completa por URL visitada
- Armazenamento local das capturas durante a sessão
- Interface popup para visualização e gerenciamento das capturas

**Tecnologias:** JavaScript, HTML, CSS, Chrome Extension API (Manifest V3), debugger API

---


## SYT Playlist Downloader – App Desktop para Download de Playlists
*Abr 2026*

App desktop multiplataforma para download de playlists do YouTube e Spotify, construído com Tauri + React + TypeScript + Rust.

**Funcionalidades principais:**
- Modo Playlist: baixa em MP4 1080p (H.264 + MP3), compatível com qualquer dispositivo
- Modo Original: melhor qualidade disponível (4K, VP9, AV1), para vídeos individuais ou playlists inteiras
- Modo Spotify: busca as faixas no YouTube Music e baixa como MP3 de alta qualidade

**Tecnologias:** Tauri, React, TypeScript, Rust
**Repositório:** [github.com/Ton-Chyod-s/syt-playlist-downloader](https://github.com/Ton-Chyod-s/syt-playlist-downloader)

---

## node-api-starter-typescript – Boilerplate Profissional para APIs Node.js
*Dez 2025*

Codebase base para novos projetos Web e Mobile/CLI, com toda a infraestrutura pronta: autenticação, segurança, documentação e pipeline de qualidade.

**Funcionalidades principais:**
- Autenticação JWT com suporte a cookie + CSRF (Web) e Bearer token (Mobile/CLI)
- Middlewares de segurança: CORS, rate limit, Helmet
- Clean Architecture (domain, usecases, interfaces, infrastructure, main)
- Documentação com Docsify e validação OpenAPI
- Pipeline de qualidade: ESLint, Prettier, Jest

**Tecnologias:** Node.js, TypeScript, Express, Prisma, PostgreSQL, Docker
**Repositório:** [github.com/Ton-Chyod-s/node-api-starter-typescript](https://github.com/Ton-Chyod-s/node-api-starter-typescript)

---

## api-precatory-creditor – Sistema de Gestão de Precatórios
*Mai 2025*

API com frontend integrado para gerenciamento de precatórios, credores, certidões e documentos pessoais, desenvolvida com Python, Flask e Clean Architecture.

**Funcionalidades principais:**
- CRUD completo de precatórios e credores
- Autenticação JWT
- Agendador de tarefas customizado
- Frontend responsivo com Tailwind CSS e Jinja2
- Versionamento de schema com Alembic

**Tecnologias:** Python, Flask, SQLAlchemy, Alembic, JWT, Tailwind CSS, Docker
**Repositório:** [github.com/Chyod-s/api-precatory-creditor](https://github.com/Chyod-s/api-precatory-creditor)

---

## Flask ANAC Dashboard – Análise de Dados de Aviação
*Mar 2025*

Aplicação web para análise de dados públicos da ANAC com foco em voos da GOL, com filtros personalizados e gráficos interativos.

**Tecnologias:** Python, Flask, Docker
**Repositório:** [github.com/Chyod-s/flask-anac-dashboard](https://github.com/Chyod-s/flask-anac-dashboard)

---

## NexoTask – Sistema de Gerenciamento de Tarefas (Full Stack)
*Mar 2025 – Abr 2025*

Aplicação completa para gestão de tarefas, com backend em Node.js (TypeScript, Prisma, JWT, PostgreSQL) e frontend em React (Vite, Tailwind CSS). Estruturado com Clean Architecture no backend e SPA no frontend, garantindo organização, escalabilidade e boas práticas.

**Funcionalidades principais:**
- Autenticação JWT
- CRUD de Tarefas
- Envio automatizado de e-mails
- Interface responsiva e intuitiva
- Ambiente padronizado com Docker e CI/CD via GitHub Actions

**Repositório:** [github.com/Ton-Chyod-s/nexo-task-api](https://github.com/Ton-Chyod-s/nexo-task-api)

---

## Public Records API – API RESTful para Consulta de Registros Públicos
*Dez 2024 – Jan 2025*

API RESTful em C# usando Entity Framework e banco serverless (NEON) para simular backend de aplicativo. Funcionalidades incluem cadastro, validação e exclusão de usuários, integração com APIs públicas (DOE/DIOGRANDE), salvamento otimizado de dados, documentação e testes com Swagger.

**Tecnologias:** C#, Entity Framework, Swagger, Banco serverless (NEON)
**Repositório:** [github.com/Ton-Chyod-s/public-records-api](https://github.com/Ton-Chyod-s/public-records-api)

---

## Python Application Stract
*Jan 2025*

Projeto para busca e agregação de dados analíticos usando Python e Flask. Arquitetura baseada em Clean Architecture com elementos de Hexagonal e Layered Architecture.

**Estrutura:**
- Controllers (rotas da API)
- Usecases (regras de negócio)
- Swagger (documentação)
- Plataform/request (adaptação de chamadas externas)

**Repositório:** [github.com/Chyod-s/python-application-stract](https://github.com/Chyod-s/python-application-stract)

---

## Aplicação Web para Gerenciamento de Bancos de Dados
*Jun 2024 – Out 2024*

Aplicação web para controle e gerenciamento de banco de dados SQLite com interface gráfica para criação e manipulação de tabelas e colunas, gerando comandos SQL automaticamente.

**Funcionalidades em desenvolvimento:**
- Manipulação de tabelas e colunas (adicionar, atualizar, excluir)
- Execução de comandos SQL gerados dinamicamente
- Interface amigável para usuários técnicos e não técnicos

**Repositório:** [github.com/Ton-Chyod-s/myControl](https://github.com/Ton-Chyod-s/myControl)
**Site:** [ton-chyod-s.github.io/myControl](https://ton-chyod-s.github.io/myControl/)

---

## Análise de Dados – Automação de Processamento para Dashboards
*Ago 2023 – Jul 2024*

Automação em Python para tratamento de planilhas Excel e geração de arquivos integráveis com dashboards Power BI, incluindo limpeza, padronização e cálculo de métricas financeiras (DRE).

**Scripts principais:**
- tratamentov2.py (base de dados para Dashboard DRE)
- limpando_planilha.py (preparação para análise de resultados)

---

## Elo7 Review Scraper API
*Mai 2024 – Jun 2024*

API de web scraping utilizando Axios e Cheerio para capturar avaliações do site Elo7 em múltiplas páginas. Integração com frontend em HTML/CSS/JS que carrega as avaliações via fetch. Arquitetura escalável para adicionar lojas e funcionalidades.

---

## api-scraper-mailer
*Jun 2024*

Aplicativo de web scraping em Node.js com axios, cheerio, puppeteer e nodemailer para extração de dados web e envio automatizado por email.

**Funcionalidades:**
- Extração de dados em páginas estáticas e dinâmicas
- Navegação automatizada para interações complexas
- Envio automático de relatórios por email
- Interface simples e scripts configuráveis

**Repositório:** [github.com/Ton-Chyod-s/api-scraper-mailer](https://github.com/Ton-Chyod-s/api-scraper-mailer)
**Status:** Em produção com 5 usuários

---

## git-hub-follower-manager
*Mai 2024*

Ferramenta para monitorar seguidores no GitHub e manter rede de seguidores recíproca, fortalecendo conexões e facilitando manutenção de seguidores.

**Tecnologias:** Node.js, Cheerio, Axios
**Repositório:** [github.com/Ton-Chyod-s/git-hub-follower-manager](https://github.com/Ton-Chyod-s/git-hub-follower-manager)
