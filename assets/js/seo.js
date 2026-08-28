(function () {
  'use strict';

  var ORIGIN = 'https://ton-chyod-s.me';
  var IMAGE = ORIGIN + '/assets/img/ton_chyods-04.jpg';

  var pages = {
    '': {
      path: '/',
      alternate: '/en/',
      lang: 'pt-BR',
      locale: 'pt_BR',
      alternateLocale: 'en_US',
      title: 'Klayton Dias | Desenvolvedor Full Stack',
      description: 'Portfólio de Klayton Dias, desenvolvedor Full Stack especializado em APIs, integrações, automação, Node.js, TypeScript, PostgreSQL e Python.'
    },
    'docs/sobre': {
      path: '/sobre/',
      alternate: '/en/about/',
      lang: 'pt-BR',
      locale: 'pt_BR',
      alternateLocale: 'en_US',
      title: 'Sobre Klayton Dias | Desenvolvedor Full Stack',
      description: 'Conheça a trajetória, formação e perfil profissional de Klayton Dias, desenvolvedor Full Stack especializado em soluções de software.'
    },
    'docs/experiencias': {
      path: '/experiencias/',
      alternate: '/en/experiences/',
      lang: 'pt-BR',
      locale: 'pt_BR',
      alternateLocale: 'en_US',
      title: 'Experiência Profissional | Klayton Dias',
      description: 'Experiência profissional de Klayton Dias em desenvolvimento Full Stack, APIs, integrações, automação, dados e arquitetura de software.'
    },
    'docs/tecnologias': {
      path: '/tecnologias/',
      alternate: '/en/technologies/',
      lang: 'pt-BR',
      locale: 'pt_BR',
      alternateLocale: 'en_US',
      title: 'Tecnologias e Competências | Klayton Dias',
      description: 'Tecnologias utilizadas por Klayton Dias: Node.js, TypeScript, Python, PostgreSQL, Docker, APIs REST, testes, segurança e CI/CD.'
    },
    'docs/projetos': {
      path: '/projetos/',
      alternate: '/en/projects/',
      lang: 'pt-BR',
      locale: 'pt_BR',
      alternateLocale: 'en_US',
      title: 'Projetos Full Stack e APIs | Klayton Dias',
      description: 'Projetos de Klayton Dias com aplicações Full Stack, APIs, integrações, automações, pipelines de dados e soluções em produção.'
    },
    'docs/contato': {
      path: '/contato/',
      alternate: '/en/contact/',
      lang: 'pt-BR',
      locale: 'pt_BR',
      alternateLocale: 'en_US',
      title: 'Contato | Klayton Dias',
      description: 'Entre em contato com Klayton Dias para oportunidades em desenvolvimento Full Stack, APIs, integrações e automação de processos.'
    },
    'docs/en/home': {
      path: '/en/',
      alternate: '/',
      lang: 'en',
      locale: 'en_US',
      alternateLocale: 'pt_BR',
      title: 'Klayton Dias | Full-Stack Developer',
      description: 'Portfolio of Klayton Dias, a full-stack developer specializing in APIs, integrations, automation, Node.js, TypeScript, PostgreSQL, and Python.'
    },
    'docs/en/about': {
      path: '/en/about/',
      alternate: '/sobre/',
      lang: 'en',
      locale: 'en_US',
      alternateLocale: 'pt_BR',
      title: 'About Klayton Dias | Full-Stack Developer',
      description: 'Learn about the professional background, education, and profile of Klayton Dias, a full-stack developer focused on software solutions.'
    },
    'docs/en/experiences': {
      path: '/en/experiences/',
      alternate: '/experiencias/',
      lang: 'en',
      locale: 'en_US',
      alternateLocale: 'pt_BR',
      title: 'Professional Experience | Klayton Dias',
      description: 'Klayton Dias professional experience in full-stack development, APIs, integrations, automation, data, and software architecture.'
    },
    'docs/en/technologies': {
      path: '/en/technologies/',
      alternate: '/tecnologias/',
      lang: 'en',
      locale: 'en_US',
      alternateLocale: 'pt_BR',
      title: 'Technologies and Skills | Klayton Dias',
      description: 'Technologies used by Klayton Dias: Node.js, TypeScript, Python, PostgreSQL, Docker, REST APIs, testing, security, and CI/CD.'
    },
    'docs/en/projects': {
      path: '/en/projects/',
      alternate: '/projetos/',
      lang: 'en',
      locale: 'en_US',
      alternateLocale: 'pt_BR',
      title: 'Full-Stack Projects and APIs | Klayton Dias',
      description: 'Projects by Klayton Dias featuring full-stack applications, APIs, integrations, automation, data pipelines, and production solutions.'
    },
    'docs/en/contact': {
      path: '/en/contact/',
      alternate: '/contato/',
      lang: 'en',
      locale: 'en_US',
      alternateLocale: 'pt_BR',
      title: 'Contact | Klayton Dias',
      description: 'Contact Klayton Dias about opportunities involving full-stack development, APIs, integrations, and process automation.'
    }
  };

  var prettyRoutes = {
    'sobre': 'docs/sobre',
    'experiencias': 'docs/experiencias',
    'tecnologias': 'docs/tecnologias',
    'projetos': 'docs/projetos',
    'contato': 'docs/contato',
    'en': 'docs/en/home',
    'en/about': 'docs/en/about',
    'en/experiences': 'docs/en/experiences',
    'en/technologies': 'docs/en/technologies',
    'en/projects': 'docs/en/projects',
    'en/contact': 'docs/en/contact'
  };

  function currentRoute() {
    var hash = (window.location.hash || '')
      .replace(/^#\/?/, '')
      .split('?')[0]
      .replace(/\/$/, '')
      .replace(/\.md$/, '');
    if (hash && pages[hash]) return hash;

    var pathname = window.location.pathname.replace(/^\/+|\/+$/g, '');
    return prettyRoutes[pathname] || '';
  }

  function setMeta(selector, attribute, value) {
    var element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      document.head.appendChild(element);
    }
    Object.keys(attribute).forEach(function (key) {
      element.setAttribute(key, attribute[key]);
    });
    element.setAttribute('content', value);
  }

  function setLink(hreflang, href) {
    var selector = hreflang
      ? 'link[rel="alternate"][hreflang="' + hreflang + '"]'
      : 'link[rel="canonical"]';
    var element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', hreflang ? 'alternate' : 'canonical');
      if (hreflang) element.setAttribute('hreflang', hreflang);
      document.head.appendChild(element);
    }
    element.setAttribute('href', href);
  }

  function applySeo(route) {
    var page = pages[route] || pages[''];
    var isEnglish = page.lang === 'en';
    var canonical = ORIGIN + page.path;
    var alternate = ORIGIN + page.alternate;

    document.documentElement.setAttribute('lang', page.lang);
    document.title = page.title;

    setMeta('meta[name="description"]', { name: 'description' }, page.description);
    setMeta('meta[property="og:title"]', { property: 'og:title' }, page.title);
    setMeta('meta[property="og:description"]', { property: 'og:description' }, page.description);
    setMeta('meta[property="og:url"]', { property: 'og:url' }, canonical);
    setMeta('meta[property="og:image"]', { property: 'og:image' }, IMAGE);
    setMeta('meta[property="og:locale"]', { property: 'og:locale' }, page.locale);
    setMeta('meta[property="og:locale:alternate"]', { property: 'og:locale:alternate' }, page.alternateLocale);
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, page.title);
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, page.description);
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, IMAGE);

    setLink('', canonical);
    setLink(page.lang, canonical);
    setLink(isEnglish ? 'pt-BR' : 'en', alternate);
    setLink('x-default', ORIGIN + '/');

    var structuredData = document.getElementById('page-structured-data');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'page-structured-data';
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      name: page.title,
      description: page.description,
      url: canonical,
      inLanguage: page.lang,
      mainEntity: {
        '@type': 'Person',
        name: 'Klayton Dias',
        url: ORIGIN + '/'
      }
    });
  }

  window.applyPortfolioSeo = function () {
    applySeo(currentRoute());
  };

  window.rewritePortfolioLinks = function () {
    document.querySelectorAll('a[href^="#/"]').forEach(function (link) {
      var originalTarget = link.getAttribute('href').slice(2);
      var queryIndex = originalTarget.indexOf('?');
      var routeName = (queryIndex === -1 ? originalTarget : originalTarget.slice(0, queryIndex))
        .replace(/\.md$/, '');
      var page = pages[routeName];
      if (!page) return;

      var docsifyTarget = routeName + (queryIndex === -1 ? '' : originalTarget.slice(queryIndex));
      link.setAttribute('data-docsify-route', docsifyTarget);
      link.setAttribute(
        'href',
        queryIndex === -1 ? page.path : page.path + '#/' + docsifyTarget
      );
    });
  };

  window.applyPortfolioSeo();
  window.addEventListener('hashchange', window.applyPortfolioSeo);

  // No servidor local, mantém a navegação SPA mesmo sem as pastas pré-renderizadas.
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[data-docsify-route]');
    var isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (!link || !isLocal) return;

    event.preventDefault();
    window.location.hash = '/' + link.getAttribute('data-docsify-route');
  });
}());
