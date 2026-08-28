// Pré-renderiza as rotas do Docsify em HTML estático, pra bots/crawlers
// sem JS conseguirem ler o conteúdo direto. Gera tudo em /dist.

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const puppeteer = require('puppeteer');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const PORT = 4444;

const ROUTES = [
  { hash: '', out: '' },
  { hash: 'docs/sobre', out: 'sobre' },
  { hash: 'docs/experiencias', out: 'experiencias' },
  { hash: 'docs/tecnologias', out: 'tecnologias' },
  { hash: 'docs/projetos', out: 'projetos' },
  { hash: 'docs/contato', out: 'contato' },
  { hash: 'docs/en/home', out: 'en' },
  { hash: 'docs/en/about', out: 'en/about' },
  { hash: 'docs/en/experiences', out: 'en/experiences' },
  { hash: 'docs/en/technologies', out: 'en/technologies' },
  { hash: 'docs/en/projects', out: 'en/projects' },
  { hash: 'docs/en/contact', out: 'en/contact' },
];

const PRETTY_ROUTES = {
  'docs/sobre': '/sobre/',
  'docs/experiencias': '/experiencias/',
  'docs/tecnologias': '/tecnologias/',
  'docs/projetos': '/projetos/',
  'docs/contato': '/contato/',
  'docs/en/home': '/en/',
  'docs/en/about': '/en/about/',
  'docs/en/experiences': '/en/experiences/',
  'docs/en/technologies': '/en/technologies/',
  'docs/en/projects': '/en/projects/',
  'docs/en/contact': '/en/contact/',
};

const SKIP = new Set(['node_modules', '.git', 'dist', 'scripts', '.github', '.claude']);

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (SKIP.has(path.basename(src))) return;
    fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function prepareDist() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });
  for (const item of fs.readdirSync(ROOT)) {
    if (SKIP.has(item)) continue;
    copyRecursive(path.join(ROOT, item), path.join(DIST, item));
  }
}

function startServer() {
  return new Promise((resolve, reject) => {
    const server = spawn('npx', ['http-server', DIST, '-p', String(PORT), '-s'], {
      shell: true,
      stdio: 'pipe',
      detached: true,
    });
    server.stdout.on('data', (data) => {
      if (data.toString().includes('Available on')) resolve(server);
    });
    server.stderr.on('data', (data) => console.error(data.toString()));
    setTimeout(() => resolve(server), 4000);
    server.on('error', reject);
  });
}

function killServer(server) {
  try {
    process.kill(-server.pid, 'SIGKILL');
  } catch (e) {
    server.kill('SIGKILL');
  }
}

async function renderRoute(browser, route) {
  const page = await browser.newPage();

  const lang = route.hash.startsWith('docs/en') ? 'en' : 'pt';
  await page.evaluateOnNewDocument((l) => {
    localStorage.setItem('portfolioLang', l);
  }, lang);

  const url = `http://localhost:${PORT}/#/${route.hash}`;
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

  try {
    await page.waitForSelector('.markdown-section', { timeout: 10000 });
    await page.waitForFunction(
      () => {
        const el = document.querySelector('.markdown-section');
        return el && el.innerText.trim().length > 50;
      },
      { timeout: 10000 }
    );
  } catch (e) {
    console.warn(`Aviso: conteúdo não confirmado pra rota "${route.hash}" (seguindo mesmo assim)`);
  }

  // Deixa os links do HTML estático rastreáveis sem quebrar as âncoras do Docsify.
  await page.evaluate((prettyRoutes) => {
    document.querySelectorAll('a[href^="#/"]').forEach((link) => {
      const href = link.getAttribute('href');
      const target = href.slice(2);
      const routeName = target.split('?')[0].replace(/\.md$/, '');
      const prettyPath = prettyRoutes[routeName];
      if (!prettyPath) return;

      const queryIndex = target.indexOf('?');
      link.setAttribute(
        'href',
        queryIndex === -1 ? prettyPath : `${prettyPath}#/${target}`
      );
    });
  }, PRETTY_ROUTES);

  const html = await page.content();
  await page.close();

  const outDir = path.join(DIST, route.out);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
  console.log(`Renderizado: /${route.out || ''} <- #/${route.hash}`);
}

async function main() {
  console.log('Preparando dist/...');
  prepareDist();

  console.log('Subindo servidor local...');
  const server = await startServer();

  console.log('Abrindo navegador headless...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const route of ROUTES) {
    await renderRoute(browser, route);
  }

  await browser.close();
  killServer(server);
  console.log('Pré-renderização concluída em /dist');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
