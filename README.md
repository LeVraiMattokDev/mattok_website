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

## 📈 Analytics (optionnel, sans cookies)

Un emplacement [GoatCounter](https://www.goatcounter.com) est prêt en commentaire à la fin de `index.html`. Crée un compte gratuit, remplace `TON-CODE`, puis dé-commente la ligne.

## 🌐 Déploiement (GitHub Pages, sans Actions)

Site 100 % statique → aucune GitHub Action (donc aucune facturation).

> ⚠️ Pages gratuit exige un repo **public**. Sur un repo privé, il faut GitHub Pro.

1. Rends le repo **public** : **Settings → General → Danger zone → Change visibility**
2. **Settings → Pages → Source : _Deploy from a branch_** → branche `main`, dossier `/ (root)`
3. Le site sort sur `https://levraimattokdev.github.io/mattok_website/` après 1-2 min

### Domaine personnalisé (mattok.ch)

Ajoute un fichier `CNAME` contenant `mattok.ch`, puis configure les DNS chez ton registrar (apex → IP GitHub Pages, ou `www` → `levraimattokdev.github.io`). Les URLs SEO (`canonical`, Open Graph, `sitemap.xml`, `robots.txt`, `llms.txt`) pointent déjà vers `https://mattok.ch/`.

## Sections

Projets · Stack · Contact
