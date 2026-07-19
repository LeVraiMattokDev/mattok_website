/* ============================================
   matt0k — editorial portfolio · script
   ============================================ */

/* ---------- Content ---------- */
const WORK = [
  {
    name: 'RebornMC',
    meta: 'Serveur Minecraft',
    desc: 'Serveur de survie en 1.21.8 — systèmes, mécaniques et plugins maison, une communauté que je fais vivre au quotidien.',
    href: 'https://rebornmc.fr',
    go: 'rebornmc.fr',
  },
  {
    name: 'TokRouter',
    meta: 'IA · API',
    desc: 'Une passerelle qui unifie des dizaines de modèles d\'IA derrière une seule API et un seul abonnement.',
    href: 'https://tokrouter.mattok.ch',
    go: 'tokrouter.mattok.ch',
  },
  {
    name: 'PinStudio',
    meta: 'Studio · Jeux vidéo',
    desc: 'Ma structure : la maison-mère de tous mes projets et l\'atelier où je développe mes jeux vidéo.',
    href: 'https://pinstudio.mattok.ch',
    go: 'pinstudio.mattok.ch',
  },
];

// Primary items get emphasis (var(--fg)); the rest stay muted.
const STACK = [
  { key: 'Langages',   primary: ['Java', 'Kotlin', 'TypeScript'], rest: ['JavaScript', 'Python', 'PHP'] },
  { key: 'Front',      primary: ['React', 'Next.js'], rest: ['Vue.js', 'TailwindCSS', 'Three.js'] },
  { key: 'Back · Data',primary: ['Node.js', 'PostgreSQL'], rest: ['Laravel', 'MySQL', 'MariaDB', 'Redis', 'SQLite'] },
  { key: 'Infra',      primary: ['Docker'], rest: ['Nginx', 'Cloudflare', 'Supabase', 'Firebase'] },
  { key: 'Outils',     primary: ['Git'], rest: ['Godot', 'Gradle', 'GitHub'] },
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
    const prim = s.primary.map((t) => `<span>${t}</span>`);
    const rest = s.rest.map((t) => t);
    const items = [...prim, ...rest].join('<i>·</i>');
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
        // slight stagger for grouped items
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
