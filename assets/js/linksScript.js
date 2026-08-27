(function () {
  const API = PORTFOLIO_API;
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

  if (!isLocal && !sessionStorage.getItem('links_visited')) {
    fetch(API + '/api/visit-links', { method: 'POST' })
      .then(r => r.json())
      .then(() => sessionStorage.setItem('links_visited', '1'))
      .catch(() => {});
  }
})();

const btn = document.getElementById('darkToggle');
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    btn.textContent = '☀️';
    btn.setAttribute('aria-pressed', 'true');
    btn.setAttribute('aria-label', 'Mudar para modo claro');
}
btn.addEventListener('click', () => {
    const dark = document.body.classList.toggle('dark-mode');
    btn.textContent = dark ? '☀️' : '🌙';
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    btn.setAttribute('aria-label', dark ? 'Mudar para modo claro' : 'Mudar para modo escuro');
    localStorage.setItem('darkMode', dark);
});

fetch('https://api.github.com/users/Ton-Chyod-s')
    .then(r => r.json())
    .then(d => {
    const img = document.getElementById('githubAvatar');
    img.src = d.avatar_url;
    img.style.display = 'block';
    document.getElementById('avatarFallback').style.display = 'none';

    const bioEl = document.getElementById('githubBio');
    bioEl.textContent = d.bio || 'Desenvolvedor de software';
    if (!d.bio) bioEl.style.opacity = '0.4';

    document.getElementById('statRepos').textContent     = d.public_repos ?? '—';
    document.getElementById('statFollowers').textContent = d.followers     ?? '—';
    document.getElementById('statFollowing').textContent = d.following     ?? '—';
    })
    .catch(() => {
    document.getElementById('avatarFallback').style.display = 'flex';
    document.getElementById('githubBio').textContent = '';
    });
