# Projects

## portfolio-tech – Personal Portfolio
*Ago 2025 - Abr 2026*

Personal portfolio website built with Docsify, showcasing projects, experiences, technologies, and an HTML/CSS printable resume. Features dark mode, visit counter, sidebar navigation, and multi-language support (PT/EN).

**Main features:**
- Dark mode with localStorage persistence
- Visit counter with per-IP rate limiting
- HTML/CSS resume optimized for printing
- Sidebar navigation with PT and EN support

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Docsify](https://img.shields.io/badge/Docsify-2ECE53?logo=docsify&logoColor=white)

**Repository:** [github.com/Ton-Chyod-s/portfolio-tech](https://github.com/Ton-Chyod-s/portfolio-tech)
**Site:** [ton-chyod-s.me](https://ton-chyod-s.me)

---

## portfolio-counter-api – Serverless Visit Counter API
*Apr 2026*

Serverless API for portfolio visit counting, deployed on Vercel with Upstash Redis as the database. Includes interactive Swagger UI documentation.

**Main features:**
- `POST /api/visit` — increments the counter with a rate limit of 1 req/IP every 10 min
- `GET /api/count` — returns the total visit count without incrementing
- Origin validation via `ALLOWED_ORIGINS` (restricted CORS)
- Atomic per-IP rate limiting with `SET NX EX` on Redis (no race condition)

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Redis](https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

**Repository:** [github.com/Ton-Chyod-s/portfolio-counter-api](https://github.com/Ton-Chyod-s/portfolio-counter-api)
**Docs:** [api.ton-chyod-s.me](https://api.ton-chyod-s.me)

---

## Full Page Capture – Chrome Extension for Page Capturing
*Apr 2026*

Chrome extension that automatically captures the full page of each URL visited during the session, allowing users to record and review the visual browsing history.

**Main features:**
- Automatic full-page capture per visited URL
- Local storage of captures during the session
- Popup interface for viewing and managing captures

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Chrome](https://img.shields.io/badge/Chrome_Extension-4285F4?logo=googlechrome&logoColor=white)

---

## SYT Playlist Downloader – Desktop App for Playlist Download
*Maio 2025 - Apr 2026*

Cross-platform desktop app for downloading YouTube and Spotify playlists, built with Tauri + React + TypeScript + Rust.

**Main features:**
- Playlist Mode: downloads in MP4 1080p (H.264 + MP3), compatible with any device
- Original Mode: best available quality (4K, VP9, AV1), for individual videos or entire playlists
- Spotify Mode: searches tracks on YouTube Music and downloads as high-quality MP3

![Tauri](https://img.shields.io/badge/Tauri-24C8D8?logo=tauri&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-000000?logo=rust&logoColor=white)

**Repository:** [github.com/Ton-Chyod-s/syt-playlist-downloader](https://github.com/Ton-Chyod-s/syt-playlist-downloader)
**Download:** [Latest release](https://github.com/Ton-Chyod-s/syt-playlist-downloader/releases/latest)

---

## node-api-starter-typescript – Professional Boilerplate for Node.js APIs
*Dec 2025*

Base codebase for new Web and Mobile/CLI projects, with all infrastructure ready: authentication, security, documentation, and quality pipeline.

**Main features:**
- JWT authentication with cookie + CSRF (Web) and Bearer token (Mobile/CLI) support
- Security middlewares: CORS, rate limiting, Helmet
- Clean Architecture (domain, usecases, interfaces, infrastructure, main)
- Documentation with Docsify and OpenAPI validation
- Quality pipeline: ESLint, Prettier, Jest

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

**Repository:** [github.com/Ton-Chyod-s/node-api-starter-typescript](https://github.com/Ton-Chyod-s/node-api-starter-typescript)

---

## api-precatory-creditor – Precatory Management System
*May 2025*

API with integrated frontend for managing precatories, creditors, certificates, and personal documents, developed with Python, Flask, and Clean Architecture.

**Main features:**
- Full CRUD for precatories and creditors
- JWT authentication
- Custom task scheduler
- Responsive frontend with Tailwind CSS and Jinja2
- Schema versioning with Alembic

![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?logo=flask&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

**Repository:** [github.com/Chyod-s/api-precatory-creditor](https://github.com/Chyod-s/api-precatory-creditor) | **Site:** [api-precatory-creditor.up.railway.app](https://api-precatory-creditor.up.railway.app/)

---

## Flask ANAC Dashboard – Aviation Data Analysis
*Mar 2025*

Web application for analyzing public ANAC data focused on GOL flights, with custom filters and interactive charts.

![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?logo=flask&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

**Repository:** [github.com/Chyod-s/flask-anac-dashboard](https://github.com/Chyod-s/flask-anac-dashboard)

---

## NexoTask – Task Management System (Full Stack)
*Mar 2025 – Apr 2025*

Complete task management application, with backend in Node.js (TypeScript, Prisma, JWT, PostgreSQL) and frontend in React (Vite, Tailwind CSS). Structured with Clean Architecture on the backend and SPA on the frontend, ensuring organization, scalability, and best practices.

**Main features:**
- JWT authentication
- Task CRUD
- Automated email sending
- Responsive and intuitive interface
- Standardized environment with Docker and CI/CD via GitHub Actions

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

**Repository:** [github.com/Ton-Chyod-s/nexo-task-api](https://github.com/Ton-Chyod-s/nexo-task-api)

---

## Public Records API – RESTful API for Public Records Query
*Dec 2024 – Jan 2025*

RESTful API in C# using Entity Framework and serverless database (NEON) to simulate application backend. Features include user registration, validation and deletion, public API integration (DOE/DIOGRANDE), optimized data saving, documentation and testing with Swagger.

![C#](https://img.shields.io/badge/C%23-512BD4?logo=csharp&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-512BD4?logo=dotnet&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=black)

**Repository:** [github.com/Ton-Chyod-s/public-records-api](https://github.com/Ton-Chyod-s/public-records-api)

---

## Python Application Stract
*Jan 2025*

Project for searching and aggregating analytical data using Python and Flask. Architecture based on Clean Architecture with Hexagonal and Layered Architecture elements.

**Structure:**
- Controllers (API routes)
- Usecases (business rules)
- Swagger (documentation)
- Platform/request (external call adaptation)

![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?logo=flask&logoColor=white)

**Repository:** [github.com/Chyod-s/python-application-stract](https://github.com/Chyod-s/python-application-stract)

---


## Data Analysis – Processing Automation for Dashboards
*Aug 2023 – Jul 2024*

Python automation for processing Excel spreadsheets and generating files integrable with Power BI dashboards, including cleaning, standardization, and financial metric calculation (P&L).

![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![Power BI](https://img.shields.io/badge/Power_BI-F2C811?logo=powerbi&logoColor=black)

**Main scripts:**
- tratamentov2.py (database for P&L Dashboard)
- limpando_planilha.py (preparation for results analysis)

---

## Elo7 Review Scraper API
*May 2024 – Jun 2024*

Web scraping API using Axios and Cheerio to capture reviews from the Elo7 website across multiple pages. Integration with HTML/CSS/JS frontend that loads reviews via fetch. Scalable architecture for adding stores and features.

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

**Site:** [ton-chyod-s.github.io/av-card](https://ton-chyod-s.github.io/av-card/)

---

## api-scraper-mailer
*Jun 2024*

Node.js web scraping application with axios, cheerio, puppeteer, and nodemailer for web data extraction and automated email sending.

**Features:**
- Data extraction from static and dynamic pages
- Automated navigation for complex interactions
- Automatic report sending via email
- Simple interface and configurable scripts

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Puppeteer](https://img.shields.io/badge/Puppeteer-40B5A4?logo=puppeteer&logoColor=white)

**Repository:** [github.com/Ton-Chyod-s/api-scraper-mailer](https://github.com/Ton-Chyod-s/api-scraper-mailer)
**Status:** In production with 5 users

---

## git-hub-follower-manager
*May 2024*

Tool for monitoring GitHub followers and maintaining a reciprocal follower network, strengthening connections and facilitating follower maintenance.

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

**Repository:** [github.com/Ton-Chyod-s/git-hub-follower-manager](https://github.com/Ton-Chyod-s/git-hub-follower-manager)
