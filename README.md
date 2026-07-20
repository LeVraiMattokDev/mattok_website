# matt0k · portfolio

Portfolio personnel de **matt0k** — développeur suisse de 17 ans, créateur de RebornMC, TokRouter et PinStudio.

Site statique, sans build. Direction **monospace × pastel** (façon Catppuccin) : tout en *JetBrains Mono*, palette pastel douce, touches terminal (`/nav`, `// sections`, `> projets`, `~ stack`), avatar pixel-art et thème clair/sombre.

## 🚀 Aperçu

- **`index.html`** — structure, meta SEO/GEO, données structurées JSON-LD
- **`styles.css`** — thème (mocha/latte), typographie, mise en page, responsive
- **`script.js`** — contenu (projets, stack, contact), thème, copie e-mail, nav active, étoiles
- **`fonts/`** — polices auto-hébergées (JetBrains Mono + Press Start 2P, sous-ensemble latin)
- **`pp.png`** — avatar · **`og.png`** — image de partage 1200×630
- **`robots.txt` · `sitemap.xml` · `llms.txt` · `site.webmanifest`** — SEO / GEO

Aucune dépendance : ouvre `index.html`, ou sers le dossier :

```bash
python3 -m http.server 8080   # puis http://localhost:8080
```

## ✏️ Personnaliser

- **Projets / Stack / Contact** → tableaux `WORK`, `STACK`, `CONTACT` en haut de `script.js`
- **Textes d'intro** → directement dans `index.html`
- **Couleurs** → variables CSS dans `:root` (thème sombre) et `:root[data-theme="light"]` (thème clair) de `styles.css`

## 📈 Analytics (sans cookies)

[GoatCounter](https://www.goatcounter.com) est actif (`mattok.goatcounter.com`), sans cookies ni données personnelles. Le script est en bas de `index.html` ; les stats sont sur https://mattok.goatcounter.com.

## 🌐 Héberger

Site 100 % statique, sans build ni dépendance : sers simplement le dossier
avec n'importe quel serveur web (auto-hébergé : Nginx, Caddy, Apache… ou tout
hébergeur statique). Toutes les URLs internes sont **relatives**, donc le site
fonctionne quel que soit le domaine, sans reconfiguration.

Exemple Nginx :

```nginx
server {
  listen 80;
  server_name _;
  root /var/www/mattok_website;
  index index.html;
}
```

> Les balises `og:image` / `twitter:image` sont relatives (portable). Pour un
> aperçu de partage optimal sur un domaine fixe, tu peux les repasser en URL
> absolue (`https://ton-domaine/og.png`).

## Sections

Projets · Stack · Contact
