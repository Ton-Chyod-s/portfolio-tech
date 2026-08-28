<div class="portfolio-home">
  <section class="home-hero">
    <div class="home-hero-copy">
      <span class="home-eyebrow">Disponível para novas oportunidades</span>
      <h1 class="home-title">Klayton Dias</h1>
      <p class="home-role">Desenvolvedor de Software Pleno especializado em APIs, integrações e automação.</p>
      <p class="home-lead">Transformo processos complexos em sistemas confiáveis, com arquitetura sustentável, segurança e foco no resultado de quem usa o produto.</p>
      <div class="home-actions">
        <a class="home-btn home-btn-primary" href="#/docs/projetos">Ver projetos selecionados</a>
        <a class="home-btn home-btn-secondary" href="cv.html?print=1" target="_blank" rel="noopener">Abrir currículo</a>
      </div>
      <div class="home-social-links" aria-label="Canais profissionais">
        <a href="https://www.linkedin.com/in/ton-chyod-s/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/Ton-Chyod-s" target="_blank" rel="noopener">GitHub</a>
        <a href="mailto:klayton.dias@gmail.com">E-mail</a>
      </div>
      <div class="home-proof-grid" aria-label="Resultados profissionais">
        <div class="home-proof"><strong>5</strong><span>produtos atendidos simultaneamente</span></div>
        <div class="home-proof"><strong>43</strong><span>planilhas automatizadas</span></div>
        <div class="home-proof"><strong>&gt;70%</strong><span>menos tempo em tarefas repetitivas</span></div>
      </div>
    </div>
    <aside class="home-focus-card" aria-label="Principais competências">
      <span class="home-focus-label">O que eu entrego</span>
      <h2>Soluções completas, do problema à produção.</h2>
      <ul>
        <li><span>01</span> APIs e integrações robustas</li>
        <li><span>02</span> Automações e pipelines de dados</li>
        <li><span>03</span> Arquitetura, segurança e CI/CD</li>
      </ul>
      <div class="home-focus-stack">Node.js · TypeScript · PostgreSQL · Python</div>
    </aside>
  </section>
  <section class="home-section" id="projetos-selecionados">
    <div class="home-section-heading">
      <div>
        <span class="home-section-kicker">Trabalho em destaque</span>
        <h2>Projetos que mostram como eu resolvo problemas</h2>
      </div>
      <a class="home-text-link" href="#/docs/projetos">Ver todos os projetos →</a>
    </div>
    <div class="home-project-grid">
      <article class="home-project-card home-project-featured">
        <div class="home-project-topline"><span>Produto publicado</span><b>Mobile + API</b></div>
        <h3>SyncLar</h3>
        <p>Aplicativo de divisão de despesas compartilhadas com leitura de NFC-e pela câmera, integração PIX e experiência mobile completa.</p>
        <div class="home-project-impact"><strong>Entrega:</strong> produto full stack publicado na Play Store</div>
        <div class="home-project-links">
          <a href="https://sync-lar-frontend.vercel.app/" target="_blank" rel="noopener">Conhecer o SyncLar →</a>
          <a href="#/docs/projetos?id=synclar-divis%C3%A3o-de-despesas-compartilhadas-full-stack">Detalhes</a>
        </div>
      </article>
      <article class="home-project-card">
        <div class="home-project-topline"><span>Sistema full stack</span><b>Node.js + React</b></div>
        <h3>NexoTask</h3>
        <p>Gerenciamento de tarefas com autenticação JWT, e-mails automatizados, banco PostgreSQL, Docker e pipeline de CI/CD.</p>
        <div class="home-project-impact"><strong>Destaque:</strong> arquitetura completa de back-end e front-end</div>
        <div class="home-project-links">
          <a href="https://nexo-task-api.vercel.app/" target="_blank" rel="noopener">Abrir demonstração →</a>
          <a href="https://github.com/Chyod-s/nexo-task-api" target="_blank" rel="noopener">Código</a>
        </div>
      </article>
      <article class="home-project-card">
        <div class="home-project-topline"><span>Automação corporativa</span><b>Python + Power BI</b></div>
        <h3>Pipeline contábil</h3>
        <p>Automação do processamento de 43 planilhas, substituindo uma rotina manual por um pipeline ETL e dashboard financeiro.</p>
        <div class="home-project-impact"><strong>Impacto:</strong> menos trabalho manual e erros de consolidação</div>
        <div class="home-project-links">
          <a href="#/docs/experiencias?id=analista-de-desenvolvimento-de-sistemas-perin-assessoria-cont%C3%A1bil">Ver experiência na Perin →</a>
        </div>
      </article>
    </div>
  </section>
  <section class="home-section home-capabilities">
    <div class="home-section-heading">
      <div>
        <span class="home-section-kicker">Competências</span>
        <h2>Tecnologia aplicada a produtos reais</h2>
      </div>
    </div>
    <div class="home-capability-grid">
      <div><strong>Back-end</strong><span>Node.js, TypeScript, C#, REST APIs</span></div>
      <div><strong>Dados</strong><span>PostgreSQL, SQL, ETL, Power BI</span></div>
      <div><strong>Produto</strong><span>React, React Native, Expo</span></div>
      <div><strong>Entrega</strong><span>Docker, CI/CD, testes e segurança</span></div>
    </div>
  </section>
  <section class="home-final-cta">
    <span class="home-section-kicker">Próximo desafio</span>
    <h2>Precisa transformar uma operação complexa em um produto confiável?</h2>
    <p>Estou disponível para oportunidades de trabalho, projetos freelance e colaborações.</p>
    <div class="home-actions home-actions-centered">
      <a class="home-btn home-btn-primary" href="#/docs/contato">Vamos conversar</a>
      <a class="home-btn home-btn-secondary" href="mailto:klayton.dias@gmail.com">Enviar e-mail</a>
    </div>
  </section>
</div>

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
