# matt0k · portfolio

Portfolio personnel de **matt0k** — développeur de 17 ans, créateur de RebornMC, TokRouter et PinStudio.

Site statique, sans build. Direction **éditoriale / typographique** : une seule colonne, beaucoup d'espace blanc, un serif élégant (*Instrument Serif*) mêlé à du monospace, sur un noir chaud presque monochrome — dans l'esprit des portfolios d'antfu.me, Brittany Chiang & co.

## 🚀 Aperçu

- **`index.html`** — structure de la page
- **`styles.css`** — thème, typographie, mise en page
- **`script.js`** — contenu (projets, stack, contact) + apparition au scroll

Aucune dépendance à installer : ouvre simplement `index.html` dans un navigateur, ou lance un petit serveur local :

```bash
python3 -m http.server 8080
# puis ouvre http://localhost:8080
```

## ✏️ Personnaliser

Le contenu est centralisé pour être facile à modifier :

- **Projets / Stack / Contact** → tableaux `WORK`, `STACK`, `CONTACT` en haut de `script.js`
- **Bio & textes d'intro** → directement dans `index.html`
- **Couleurs & typo** → variables CSS dans `:root` (voir `--accent`, `--serif`) au début de `styles.css`

## 🌐 Déploiement (GitHub Pages)

Un workflow GitHub Actions (`.github/workflows/deploy.yml`) publie automatiquement le site sur GitHub Pages à chaque push sur `main`.

1. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**
2. Pousse sur `main` — le site se déploie tout seul.

### Domaine personnalisé (mattok.ch)

Pour utiliser un domaine comme `mattok.ch`, ajoute un fichier `CNAME` à la racine contenant le domaine, puis configure les DNS chez ton registrar (enregistrement `CNAME` vers `levraimattokdev.github.io`, ou les IP GitHub Pages pour un apex).

## Sections

À propos · Compétences · Projets · Contact
