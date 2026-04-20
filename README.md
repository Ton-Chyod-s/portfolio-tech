<h1 align="center">Klayton Dias</h1>
<p align="center">Desenvolvedor Back-End Pleno · Node.js · TypeScript · APIs RESTful</p>
<p align="center">
  <a href="https://ton-chyod-s.me"><img src="https://img.shields.io/badge/Portfólio-ton--chyod--s.me-000?style=flat&logo=googlechrome&logoColor=white" /></a>
  <a href="mailto:klayton.dias@hotmail.com"><img src="https://img.shields.io/badge/Email-000?style=flat&logo=gmail&logoColor=white" /></a>
  <a href="https://www.linkedin.com/in/ton-chyod-s/"><img src="https://img.shields.io/badge/LinkedIn-000?style=flat&logo=linkedin&logoColor=0E76A8" /></a>
</p>

---

Desenvolvedor Back-End Pleno especializado em APIs RESTful, automação de processos e Clean Architecture. Projetos em produção com Node.js, TypeScript, Python e C#. Foco em segurança, escalabilidade e código sustentável.

## Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![C#](https://img.shields.io/badge/C%23-512BD4?style=flat&logo=csharp&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)

## Projetos

| Projeto | Descrição |
|---|---|
| [**api-scraper-mailer**](https://github.com/Ton-Chyod-s/api-scraper-mailer) | Scraping de páginas estáticas e dinâmicas com envio automatizado de relatórios por e-mail. **Em produção com usuários ativos.** |
| [**nexo-task-api**](https://github.com/Ton-Chyod-s/nexo-task-api) | Sistema full stack de gerenciamento de tarefas — autenticação JWT, envio de e-mails, CI/CD via GitHub Actions e deploy containerizado. [Ver site →](https://nexo-task-api.vercel.app/) |
| [**node-api-starter-typescript**](https://github.com/Ton-Chyod-s/node-api-starter-typescript) | Boilerplate de produção para APIs Node.js com Clean Architecture, JWT + CSRF, rate limit, Helmet, OpenAPI e cobertura de testes com Jest. |
| [**api-precatory-creditor**](https://github.com/Chyod-s/api-precatory-creditor) | API + frontend integrado para gestão de precatórios e credores, com JWT, Alembic para migrações e deploy em produção. [Ver sistema →](https://api-precatory-creditor.up.railway.app/) |
| [**syt-playlist-downloader**](https://github.com/Ton-Chyod-s/syt-playlist-downloader) | App desktop multiplataforma (Tauri + Rust + React) para download de playlists do YouTube e Spotify em MP4/MP3, com suporte a 4K. |
| [**public-records-api**](https://github.com/Ton-Chyod-s/public-records-api) | API RESTful em C# (.NET 9) para consulta de registros públicos e diários oficiais, com autenticação e banco serverless. |
| [**portfolio-counter-api**](https://github.com/Ton-Chyod-s/portfolio-counter-api) | API serverless de contagem de visitas com rate limiting atômico por IP via Redis e CORS restrito. Deploy na Vercel. [Docs →](https://api.ton-chyod-s.me) |
| [**portfolio-tech**](https://github.com/Ton-Chyod-s/portfolio-tech) | Este portfólio — site estático com Docsify, modo escuro, alternância PT/EN e currículo para impressão. [Ver site →](https://ton-chyod-s.me) |

---

<details>
<summary>Sobre este repositório</summary>

Código-fonte do portfólio pessoal — site estático construído com [Docsify](https://docsify.js.org), sem processo de build. O conteúdo é escrito em Markdown e renderizado diretamente no browser.

**Funcionalidades**
- Modo escuro com persistência via `localStorage`
- Alternância de idioma PT ↔ EN em tempo real
- Contador de visitas integrado à [`portfolio-counter-api`](https://github.com/Ton-Chyod-s/portfolio-counter-api)
- Currículo em HTML/CSS otimizado para impressão (`/cv.html`)
- Deploy via GitHub Pages com domínio customizado

**Estrutura**
```
docs/           → conteúdo em português (Markdown)
docs/en/        → conteúdo em inglês (Markdown)
assets/css/     → estilos customizados e tema do CV
cv.html         → currículo para impressão
index.html      → entry point do Docsify
_sidebar.md     → navegação PT / _sidebar_en.md → navegação EN
```

**Rodando localmente**
```bash
npm install
npx docsify-cli serve .
# acesse http://localhost:3000
```

</details>
