<div class="portfolio-home">
  <section class="home-hero">
    <div class="home-hero-copy">
      <span class="home-eyebrow">Open to new opportunities</span>
      <h1 class="home-title">Klayton Dias</h1>
      <p class="home-role">Mid-Level Software Developer specialized in APIs, integrations, and automation.</p>
      <p class="home-lead">I turn complex processes into reliable systems with sustainable architecture, security, and a clear focus on user outcomes.</p>
      <div class="home-actions">
        <a class="home-btn home-btn-primary" href="#/docs/en/projects">View selected projects</a>
        <a class="home-btn home-btn-secondary" href="/cv-en.html?print=1" target="_blank" rel="noopener">Open résumé</a>
      </div>
      <div class="home-social-links" aria-label="Professional channels">
        <a href="https://www.linkedin.com/in/ton-chyod-s/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/Ton-Chyod-s" target="_blank" rel="noopener">GitHub</a>
        <a href="mailto:klayton.dias@gmail.com">Email</a>
      </div>
      <div class="home-proof-grid" aria-label="Professional results">
        <div class="home-proof"><strong>5</strong><span>products handled concurrently</span></div>
        <div class="home-proof"><strong>43</strong><span>spreadsheets automated</span></div>
        <div class="home-proof"><strong>&gt;70%</strong><span>less time on repetitive tasks</span></div>
      </div>
    </div>
    <aside class="home-focus-card" aria-label="Core capabilities">
      <span class="home-focus-label">What I deliver</span>
      <h2>Complete solutions, from problem to production.</h2>
      <ul>
        <li><span>01</span> Robust APIs and integrations</li>
        <li><span>02</span> Automation and data pipelines</li>
        <li><span>03</span> Architecture, security, and CI/CD</li>
      </ul>
      <div class="home-focus-stack">Node.js · TypeScript · PostgreSQL · Python</div>
    </aside>
  </section>
  <section class="home-section" id="selected-projects">
    <div class="home-section-heading">
      <div>
        <span class="home-section-kicker">Featured work</span>
        <h2>Projects that show how I solve problems</h2>
      </div>
      <a class="home-text-link" href="#/docs/en/projects">View all projects →</a>
    </div>
    <div class="home-project-grid">
      <article class="home-project-card home-project-featured">
        <div class="home-project-topline"><span>Published product</span><b>Mobile + API</b></div>
        <h3>SyncLar</h3>
        <p>Shared-expense app with camera-based NFC-e reading, PIX integration, and a complete mobile experience.</p>
        <div class="home-project-impact"><strong>Delivery:</strong> full-stack product published on Google Play</div>
        <div class="home-project-links">
          <a href="https://sync-lar-frontend.vercel.app/" target="_blank" rel="noopener">Explore SyncLar →</a>
          <a href="#/docs/en/projects?id=synclar-shared-expense-splitting-full-stack">Details</a>
        </div>
      </article>
      <article class="home-project-card">
        <div class="home-project-topline"><span>Full-stack system</span><b>Node.js + React</b></div>
        <h3>NexoTask</h3>
        <p>Task management with JWT authentication, automated emails, PostgreSQL, Docker, and a CI/CD pipeline.</p>
        <div class="home-project-impact"><strong>Highlight:</strong> complete back-end and front-end architecture</div>
        <div class="home-project-links">
          <a href="https://nexo-task-api.vercel.app/" target="_blank" rel="noopener">Open demo →</a>
          <a href="https://github.com/Chyod-s/nexo-task-api" target="_blank" rel="noopener">Code</a>
        </div>
      </article>
      <article class="home-project-card">
        <div class="home-project-topline"><span>Business automation</span><b>Python + Power BI</b></div>
        <h3>Accounting pipeline</h3>
        <p>Automated the processing of 43 spreadsheets, replacing a manual routine with an ETL pipeline and financial dashboard.</p>
        <div class="home-project-impact"><strong>Impact:</strong> less manual work and fewer consolidation errors</div>
        <div class="home-project-links">
          <a href="#/docs/en/experiences?id=systems-development-analyst-perin-assessoria-cont%C3%A1bil">View Perin experience →</a>
        </div>
      </article>
    </div>
  </section>
  <section class="home-section home-capabilities">
    <div class="home-section-heading">
      <div>
        <span class="home-section-kicker">Capabilities</span>
        <h2>Technology applied to real products</h2>
      </div>
    </div>
    <div class="home-capability-grid">
      <div><strong>Back-end</strong><span>Node.js, TypeScript, C#, REST APIs</span></div>
      <div><strong>Data</strong><span>PostgreSQL, SQL, ETL, Power BI</span></div>
      <div><strong>Product</strong><span>React, React Native, Expo</span></div>
      <div><strong>Delivery</strong><span>Docker, CI/CD, testing, and security</span></div>
    </div>
  </section>
  <section class="home-final-cta">
    <span class="home-section-kicker">Your next challenge</span>
    <h2>Need to turn a complex operation into a reliable product?</h2>
    <p>I am available for job opportunities, freelance projects, and collaborations.</p>
    <div class="home-actions home-actions-centered">
      <a class="home-btn home-btn-primary" href="https://wa.me/5567991799956" target="_blank" rel="noopener">Let's talk</a>
      <a class="home-btn home-btn-secondary" href="mailto:klayton.dias@gmail.com">Send an email</a>
    </div>
  </section>
</div>

---

<details>
<summary>About this repository</summary>

Source code for the personal portfolio — a static site built with [Docsify](https://docsify.js.org), with no build process. Content is written in Markdown and rendered directly in the browser.

**Features**
- Dark mode with `localStorage` persistence
- Real-time PT ↔ EN language toggle
- Visit counter integrated with [`portfolio-counter-api`](https://github.com/Ton-Chyod-s/portfolio-counter-api)
- English HTML/CSS résumé optimized for printing (`/cv-en.html`)
- Deployed via GitHub Pages with a custom domain

**Structure**
```
docs/           → Portuguese content (Markdown)
docs/en/        → English content (Markdown)
assets/css/     → custom styles and CV theme
cv-en.html      → print-ready English résumé
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
