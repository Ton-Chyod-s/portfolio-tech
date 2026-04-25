<h1 align="center">Klayton Dias</h1>
<p align="center">Full Back-End Developer · Node.js · TypeScript · RESTful APIs</p>
<p align="center">
  <a href="https://ton-chyod-s.me"><img src="https://img.shields.io/badge/Portfolio-ton--chyod--s.me-000?style=flat&logo=googlechrome&logoColor=white" /></a>
  <a href="mailto:klayton.dias@hotmail.com"><img src="https://img.shields.io/badge/Email-000?style=flat&logo=gmail&logoColor=white" /></a>
  <a href="https://www.linkedin.com/in/ton-chyod-s/"><img src="https://img.shields.io/badge/LinkedIn-000?style=flat&logo=linkedin&logoColor=0E76A8" /></a>
</p>

---

Full Back-End Developer specialized in RESTful APIs, process automation, and Clean Architecture. Production projects with Node.js, TypeScript, Python, and C#. Focus on security, scalability, and sustainable code.

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

## Projects

| Project | Description |
|---|---|
| [**api-scraper-mailer**](https://github.com/Ton-Chyod-s/api-scraper-mailer) | Scraping of static and dynamic pages with automated email report delivery. **In production with active users.** |
| [**nexo-task-api**](https://github.com/Ton-Chyod-s/nexo-task-api) | Full-stack task management system — JWT authentication, email delivery, CI/CD via GitHub Actions, and containerized deployment. [View site →](https://nexo-task-api.vercel.app/) |
| [**node-api-starter-typescript**](https://github.com/Ton-Chyod-s/node-api-starter-typescript) | Production boilerplate for Node.js APIs with Clean Architecture, JWT + CSRF, rate limiting, Helmet, OpenAPI, and Jest test coverage. |
| [**api-precatory-creditor**](https://github.com/Chyod-s/api-precatory-creditor) | API + integrated frontend for precatory and creditor management, with JWT, Alembic migrations, and production deployment. [View system →](https://api-precatory-creditor.up.railway.app/) |
| [**syt-playlist-downloader**](https://github.com/Ton-Chyod-s/syt-playlist-downloader) | Cross-platform desktop app (Tauri + Rust + React) for downloading YouTube and Spotify playlists as MP4/MP3, with 4K support. |
| [**public-records-api**](https://github.com/Ton-Chyod-s/public-records-api) | RESTful API in C# (.NET 9) for querying public records and official gazettes, with authentication and serverless database. |
| [**portfolio-counter-api**](https://github.com/Ton-Chyod-s/portfolio-counter-api) | Serverless visit counter API with atomic IP-based rate limiting via Redis and restricted CORS. Deployed on Vercel. [Docs →](https://api.ton-chyod-s.me) |
| [**portfolio-tech**](https://github.com/Ton-Chyod-s/portfolio-tech) | This portfolio — static site with Docsify, dark mode, PT/EN toggle, and print-ready résumé. [View site →](https://ton-chyod-s.me) |

---

<details>
<summary>About this repository</summary>

Source code for the personal portfolio — a static site built with [Docsify](https://docsify.js.org), with no build process. Content is written in Markdown and rendered directly in the browser.

**Features**
- Dark mode with `localStorage` persistence
- Real-time PT ↔ EN language toggle
- Visit counter integrated with [`portfolio-counter-api`](https://github.com/Ton-Chyod-s/portfolio-counter-api)
- HTML/CSS résumé optimized for printing (`/cv.html`)
- Deployed via GitHub Pages with a custom domain

**Structure**
```
docs/           → Portuguese content (Markdown)
docs/en/        → English content (Markdown)
assets/css/     → custom styles and CV theme
cv.html         → print-ready résumé
index.html      → Docsify entry point
_sidebar.md     → PT navigation / _sidebar_en.md → EN navigation
```

**Running locally**
```bash
npm install
npx docsify-cli serve .
# open http://localhost:3000
```

</details>
