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

## 🌐 Déploiement (GitHub Pages, sans Actions)

Site 100 % statique → aucune GitHub Action nécessaire (donc aucune facturation).
GitHub Pages sert les fichiers directement depuis la branche.

> ⚠️ Pages gratuit exige un repo **public**. Sur un repo privé, il faut GitHub Pro.

1. Rends le repo **public** : **Settings → General → Danger zone → Change visibility → Public**
2. **Settings → Pages → Build and deployment → Source : _Deploy from a branch_**
3. Choisis la branche (`main` après merge) et le dossier `/ (root)`, puis **Save**
4. Le site sort sur `https://levraimattokdev.github.io/mattok_website/` après 1-2 min

### Domaine personnalisé (mattok.ch)

Pour utiliser un domaine comme `mattok.ch`, ajoute un fichier `CNAME` à la racine contenant le domaine, puis configure les DNS chez ton registrar (enregistrement `CNAME` vers `levraimattokdev.github.io`, ou les IP GitHub Pages pour un apex).

## Sections

À propos · Compétences · Projets · Contact
