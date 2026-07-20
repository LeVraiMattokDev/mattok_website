/* ============================================
   matt0k — editorial × personal · script
   ============================================ */

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Content ---------- */
const WORK = [
  {
    name: 'RebornMC',
    meta: 'Minecraft',
    desc: 'Serveur survie, 1.21.8.',
    href: 'https://rebornmc.fr',
    go: 'rebornmc.fr',
  },
  {
    name: 'TokRouter',
    meta: 'IA · API',
    desc: 'Des dizaines de modèles d\'IA, une seule API.',
    href: 'https://tokrouter.mattok.ch',
    go: 'tokrouter.mattok.ch',
  },
  {
    name: 'PinStudio',
    meta: 'Studio · Jeux',
    desc: 'Mon studio & mes jeux.',
    href: 'https://pinstudio.mattok.ch',
    go: 'pinstudio.mattok.ch',
  },
];

const STACK = [
  { key: 'Langages',    primary: ['Java', 'Kotlin', 'TypeScript'], rest: ['JavaScript', 'Python', 'PHP'] },
  { key: 'Front',       primary: ['React', 'Next.js'], rest: ['Vue.js', 'TailwindCSS', 'Three.js'] },
  { key: 'Back · Data', primary: ['Node.js', 'PostgreSQL'], rest: ['Laravel', 'MySQL', 'MariaDB', 'Redis', 'SQLite'] },
  { key: 'Infra',       primary: ['Docker'], rest: ['Nginx', 'Cloudflare', 'Supabase', 'Firebase'] },
  { key: 'Outils',      primary: ['Git'], rest: ['Godot', 'Gradle', 'GitHub'] },
];

const CONTACT = [
  { key: 'Email',     val: 'cerdeiramathys@gmail.com', href: 'mailto:cerdeiramathys@gmail.com' },
  { key: 'GitHub',    val: 'LeVraiMattokDev',          href: 'https://github.com/LeVraiMattokDev' },
  { key: 'Instagram', val: '@mathys.ce',               href: 'https://www.instagram.com/mathys.ce' },
  { key: 'Discord',   val: 'matt0k',                   href: 'https://discord.com/users/matt0k' },
];

/* ---------- Render: work ---------- */
const workList = document.getElementById('work-list');
if (workList) {
  workList.innerHTML = WORK.map((w) => `
    <li class="work__item reveal">
      <a class="work__link" href="${w.href}" target="_blank" rel="noopener">
        <span class="work__name">${w.name}</span>
        <span class="work__meta">${w.meta}</span>
        <span class="work__desc">${w.desc}</span>
        <span class="work__go">${w.go} ↗</span>
      </a>
    </li>
  `).join('');
}

/* ---------- Render: stack ---------- */
const stackList = document.getElementById('stack-list');
if (stackList) {
  stackList.innerHTML = STACK.map((s) => {
    const items = [...s.primary.map((t) => `<span>${t}</span>`), ...s.rest].join(' <i>·</i> ');
    return `
      <div class="stack__row reveal">
        <dt class="stack__key">${s.key}</dt>
        <dd class="stack__val">${items}</dd>
      </div>
    `;
  }).join('');
}

/* ---------- Render: contact ---------- */
const contactList = document.getElementById('contact-list');
if (contactList) {
  contactList.innerHTML = CONTACT.map((c) => {
    const ext = c.href.startsWith('mailto') ? '' : ' target="_blank" rel="noopener"';
    return `
      <li>
        <a href="${c.href}"${ext}>
          <span class="contact__key">${c.key}</span>
          <span class="contact__val">${c.val}</span>
        </a>
      </li>
    `;
  }).join('');
}

/* ---------- Year ---------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Theme toggle (dark / light) ---------- */
const themeToggle = document.getElementById('theme-toggle');
const isLight = () => document.documentElement.getAttribute('data-theme') === 'light';
function syncToggle() {
  if (!themeToggle) return;
  themeToggle.textContent = isLight() ? '☀' : '☾';
  themeToggle.setAttribute('aria-label', isLight() ? 'Passer en thème sombre' : 'Passer en thème clair');
}
syncToggle();
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = isLight() ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', next === 'light' ? '#eff1f5' : '#1a1a26');
    syncToggle();
  });
}

/* ---------- Copy email on click ---------- */
if (contactList) {
  const mail = contactList.querySelector('a[href^="mailto"]');
  if (mail && navigator.clipboard) {
    const val = mail.querySelector('.contact__val');
    const orig = val ? val.textContent : '';
    mail.setAttribute('title', 'Cliquer pour copier');
    mail.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('cerdeiramathys@gmail.com').then(() => {
        if (!val) return;
        val.textContent = 'copié ✓';
        mail.classList.add('copied');
        setTimeout(() => { val.textContent = orig; mail.classList.remove('copied'); }, 1600);
      }).catch(() => { window.location.href = mail.href; });
    });
  }
}

/* ---------- Active section in nav ---------- */
(function activeNav() {
  const links = {};
  document.querySelectorAll('.topbar__nav a').forEach((a) => {
    links[a.getAttribute('href').slice(1)] = a;
  });
  if (!('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      Object.values(links).forEach((a) => a.classList.remove('is-active'));
      if (links[en.target.id]) links[en.target.id].classList.add('is-active');
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  ['work', 'stack', 'contact'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });
})();

/* ---------- Reveal on scroll ---------- */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${Math.min(i * 40, 160)}ms`;
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('visible'));
}

/* ---------- Subtle starfield (hero only) ---------- */
(function stars() {
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, dpr, pts = [], raf;

  function size() {
    const r = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = Math.max(1, Math.floor(r.width * dpr));
    h = canvas.height = Math.max(1, Math.floor(r.height * dpr));
    const n = Math.min(90, Math.floor((r.width * r.height) / 9000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.1 + 0.25) * dpr,
      a: Math.random() * 0.5 + 0.15,
      tw: Math.random() * 0.015 + 0.003,
      ph: Math.random() * Math.PI * 2,
      blue: Math.random() > 0.72,
    }));
  }

  function draw(twinkle) {
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      if (twinkle) p.ph += p.tw;
      const a = twinkle ? p.a + Math.sin(p.ph) * 0.22 : p.a;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.blue
        ? `rgba(203, 166, 247, ${Math.max(0, a)})`
        : `rgba(245, 194, 231, ${Math.max(0, a * 0.85)})`;
      ctx.fill();
    }
  }

  function loop() { draw(true); raf = requestAnimationFrame(loop); }

  size();
  window.addEventListener('resize', () => { size(); if (prefersReduced) draw(false); }, { passive: true });

  if (prefersReduced) { draw(false); }
  else {
    loop();
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(loop);
    });
  }
})();
