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
    const items = [...s.primary.map((t) => `<span>${t}</span>`), ...s.rest].join('<i>·</i>');
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
