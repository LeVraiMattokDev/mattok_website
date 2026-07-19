/* ============================================
   matt0k · portfolio — script
   ============================================ */

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Data ---------- */
const SKILLS = [
  {
    title: 'Langages',
    icon: '💻',
    tags: ['Java', 'Kotlin', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'HTML5', 'PowerShell', 'Markdown'],
  },
  {
    title: 'Front & Frameworks',
    icon: '🎨',
    tags: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'Bootstrap', 'Three.js', 'Node.js', 'Laravel', 'NPM'],
  },
  {
    title: 'Bases de données',
    icon: '🗄️',
    tags: ['PostgreSQL', 'MySQL', 'MariaDB', 'SQLite', 'Redis', 'Supabase', 'Firebase'],
  },
  {
    title: 'DevOps & Infra',
    icon: '⚙️',
    tags: ['Docker', 'Nginx', 'Cloudflare', 'Git', 'GitHub', 'Gradle', 'Cisco'],
  },
  {
    title: 'Outils & Écosystème',
    icon: '🧰',
    tags: ['Godot', 'Steam', 'Plex', 'Nvidia', 'Bitwarden', 'itch.io', 'Windows Terminal'],
  },
];

const PROJECTS = [
  {
    icon: '⛏️',
    tag: 'Minecraft',
    name: 'RebornMC',
    desc: 'Serveur Minecraft survie en 1.21.8. Une communauté vivante, des systèmes custom et des plugins maison — mon projet de cœur depuis le début.',
    stack: ['Java', 'Kotlin', 'Gradle', 'MariaDB'],
    href: 'https://rebornmc.fr',
    linkLabel: 'rebornmc.fr',
  },
  {
    icon: '🤖',
    tag: 'IA / API',
    name: 'TokRouter',
    desc: 'Une application & API qui centralise des dizaines de modèles d\'IA sous un seul abonnement. Un point d\'accès unique, simple et abordable.',
    stack: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL'],
    href: 'https://tokrouter.mattok.ch',
    linkLabel: 'tokrouter.mattok.ch',
  },
  {
    icon: '🎮',
    tag: 'Studio',
    name: 'PinStudio',
    desc: 'La maison-mère de tous mes projets et le berceau de mes développements de jeux vidéo. Là où les idées deviennent réalité.',
    stack: ['Godot', 'C#', 'React', 'Cloudflare'],
    href: 'https://pinstudio.mattok.ch',
    linkLabel: 'pinstudio.mattok.ch',
  },
];

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/LeVraiMattokDev',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.8c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mathys.ce',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
  },
  {
    label: 'matt0k',
    href: 'https://discord.com/users/matt0k',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A19.8 19.8 0 0 0 15.4 3l-.2.5c1.6.4 2.9 1 4.2 1.8-2-1-4.1-1.5-6.4-1.5s-4.4.5-6.4 1.5c1.3-.8 2.7-1.4 4.2-1.8L10.6 3a19.8 19.8 0 0 0-4.9 1.5C2.5 9.3 1.7 14 2.1 18.6A19.9 19.9 0 0 0 8.1 21l.5-.7c-1-.3-2-.8-2.8-1.4l.7-.4c3.7 1.7 7.7 1.7 11.3 0l.7.4c-.9.6-1.8 1-2.8 1.4l.5.7a19.9 19.9 0 0 0 6-2.4c.5-5.3-.8-9.9-3.6-14.1zM9 15.3c-1 0-1.7-.9-1.7-2s.8-2 1.7-2 1.7.9 1.7 2-.7 2-1.7 2zm6 0c-1 0-1.7-.9-1.7-2s.8-2 1.7-2 1.7.9 1.7 2-.7 2-1.7 2z"/></svg>',
  },
  {
    label: 'Email',
    href: 'mailto:cerdeiramathys@gmail.com',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/></svg>',
  },
];

/* ---------- Render skills ---------- */
const skillsGrid = document.getElementById('skills-grid');
if (skillsGrid) {
  skillsGrid.innerHTML = SKILLS.map((g) => `
    <div class="skill-group reveal">
      <div class="skill-group__title"><span class="ico">${g.icon}</span>${g.title}</div>
      <div class="skill-tags">
        ${g.tags.map((t) => `<span class="skill-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ---------- Render projects ---------- */
const projectsGrid = document.getElementById('projects-grid');
if (projectsGrid) {
  projectsGrid.innerHTML = PROJECTS.map((p) => `
    <article class="project reveal">
      <div class="project__top">
        <div class="project__icon">${p.icon}</div>
        <span class="project__tag">${p.tag}</span>
      </div>
      <h3 class="project__name">${p.name}</h3>
      <p class="project__desc">${p.desc}</p>
      <div class="project__stack">${p.stack.map((s) => `<span>${s}</span>`).join('')}</div>
      <a class="project__link" href="${p.href}" target="_blank" rel="noopener">${p.linkLabel} ↗</a>
    </article>
  `).join('');

  // Cursor-follow glow
  projectsGrid.querySelectorAll('.project').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/* ---------- Render socials ---------- */
const socialsEl = document.getElementById('socials');
if (socialsEl) {
  socialsEl.innerHTML = SOCIALS.map((s) => `
    <a class="social" href="${s.href}" target="_blank" rel="noopener">${s.svg}${s.label}</a>
  `).join('');
}

/* ---------- Year ---------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Nav scroll state + burger ---------- */
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav__links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    })
  );
}

/* ---------- Typewriter ---------- */
const typed = document.getElementById('typed');
if (typed) {
  const roles = [
    'Développeur full-stack',
    'Créateur de systèmes',
    'Fondateur de PinStudio',
    'Bidouilleur d\'IA',
    'Game developer',
  ];
  if (prefersReduced) {
    typed.textContent = roles[0];
  } else {
    let ri = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = roles[ri];
      typed.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) {
        ci++;
        setTimeout(tick, 70);
      } else if (!deleting && ci === word.length) {
        deleting = true;
        setTimeout(tick, 1700);
      } else if (deleting && ci > 0) {
        ci--;
        setTimeout(tick, 35);
      } else {
        deleting = false;
        ri = (ri + 1) % roles.length;
        setTimeout(tick, 220);
      }
    };
    tick();
  }
}

/* ---------- Reveal on scroll ---------- */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('visible'));
}

/* ---------- Count-up stats ---------- */
const statNums = document.querySelectorAll('.stat__num[data-count]');
if ('IntersectionObserver' in window && !prefersReduced) {
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let cur = 0;
      const step = Math.max(1, Math.round(target / 28));
      const run = () => {
        cur = Math.min(target, cur + step);
        el.textContent = cur;
        if (cur < target) requestAnimationFrame(run);
      };
      run();
      countObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  statNums.forEach((el) => countObs.observe(el));
} else {
  statNums.forEach((el) => { el.textContent = el.dataset.count; });
}

/* ---------- Starfield canvas ---------- */
(function starfield() {
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, dpr, stars = [], shooting = null, raf;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = Math.floor(innerWidth * dpr);
    h = canvas.height = Math.floor(innerHeight * dpr);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    const count = Math.min(220, Math.floor((innerWidth * innerHeight) / 7000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.3 + 0.3) * dpr,
      a: Math.random() * 0.6 + 0.2,
      tw: Math.random() * 0.02 + 0.004,
      ph: Math.random() * Math.PI * 2,
      vy: (Math.random() * 0.12 + 0.02) * dpr,
    }));
  }

  function spawnShooting() {
    if (shooting || Math.random() > 0.4) return;
    const startX = Math.random() * w * 0.7;
    shooting = {
      x: startX, y: Math.random() * h * 0.4,
      len: (Math.random() * 120 + 90) * dpr,
      speed: (Math.random() * 6 + 7) * dpr,
      life: 1,
    };
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      s.ph += s.tw;
      s.y += s.vy;
      if (s.y > h) { s.y = 0; s.x = Math.random() * w; }
      const tw = s.a + Math.sin(s.ph) * 0.25;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 214, 255, ${Math.max(0, tw)})`;
      ctx.fill();
    }

    if (shooting) {
      const sx = shooting.x, sy = shooting.y;
      const ex = sx - shooting.len, ey = sy - shooting.len * 0.5;
      const grad = ctx.createLinearGradient(sx, sy, ex, ey);
      grad.addColorStop(0, `rgba(140, 190, 255, ${shooting.life})`);
      grad.addColorStop(1, 'rgba(140, 190, 255, 0)');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2 * dpr;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.stroke();
      shooting.x += shooting.speed;
      shooting.y += shooting.speed * 0.5;
      shooting.life -= 0.012;
      if (shooting.life <= 0 || shooting.x > w) shooting = null;
    } else if (Math.random() < 0.004) {
      spawnShooting();
    }

    raf = requestAnimationFrame(frame);
  }

  resize();
  addEventListener('resize', resize, { passive: true });

  if (!prefersReduced) {
    frame();
  } else {
    // Static render: draw stars once, no motion
    for (const s of stars) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 214, 255, ${s.a})`;
      ctx.fill();
    }
  }

  // Pause when tab hidden to save CPU
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(raf); }
    else if (!prefersReduced) { raf = requestAnimationFrame(frame); }
  });
})();
