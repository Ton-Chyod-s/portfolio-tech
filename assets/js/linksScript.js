(function () {
  const API = 'https://api.ton-chyod-s.me';
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

})();

const btn = document.getElementById('darkToggle');
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    btn.textContent = '☀️';
}
btn.addEventListener('click', () => {
    const dark = document.body.classList.toggle('dark-mode');
    btn.textContent = dark ? '☀️' : '🌙';
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
    bioEl.innerHTML = d.bio || '<span style="opacity:0.4">Desenvolvedor de software</span>';

    document.getElementById('statRepos').textContent     = d.public_repos ?? '—';
    document.getElementById('statFollowers').textContent = d.followers     ?? '—';
    document.getElementById('statFollowing').textContent = d.following     ?? '—';
    })
    .catch(() => {
    document.getElementById('avatarFallback').style.display = 'flex';
    document.getElementById('githubBio').innerHTML = '';
    });
