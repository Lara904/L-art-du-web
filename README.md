# L'Art du Web - Site Vitrine

## 🚀 Description

Site vitrine moderne et ultra-performant pour L'Art du Web, spécialisée en création de sites web sur mesure, audit technique et SEO, et optimisation de performances.

## ✨ Caractéristiques

- **Score Lighthouse ≥ 98%** (Performance, Accessibilité, SEO, Best Practices)
- **100% Responsive** (Mobile, Tablette, Desktop)
- **Mode Clair/Sombre** dynamique
- **Animations fluides** avec Framer Motion
- **Formulaire de contact** avec EmailJS
- **Design moderne** et minimaliste
- **Optimisation SEO** complète

## 🛠️ Technologies

- **React 18** - Framework UI
- **TailwindCSS** - Styling utility-first
- **Framer Motion** - Animations
- **React Hook Form** - Gestion des formulaires
- **EmailJS** - Envoi d'emails
- **Lucide React** - Icônes

## 📦 Installation

1. Cloner le repository :
```bash
git clone https://github.com/Lara904/lart-du-web.git
cd lart-du-web
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm start
```

L'application sera accessible sur `http://localhost:3000`


## 🏗️ Build de production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `build/`.

## 📊 Optimisations Lighthouse

### Performance
- Images lazy loading
- Code splitting automatique avec React
- Minification CSS/JS
- Compression Gzip/Brotli (serveur)
- Prefetch/Preload des ressources critiques

### Accessibilité
- Attributs ARIA appropriés
- Contraste des couleurs WCAG AAA
- Navigation au clavier
- Labels sur tous les formulaires
- Focus styles visibles

### SEO
- Balises meta optimisées
- Open Graph tags
- Structured data
- Sitemap.xml
- Robots.txt
- URLs sémantiques

### Best Practices
- HTTPS requis
- Pas de vulnérabilités connues
- Images optimisées
- Manifest.json pour PWA

## 🎨 Personnalisation

### Couleurs
Modifier les couleurs dans `tailwind.config.js` :
```javascript
colors: {
  'cream': '#FDFBF7',
  'deep-blue': '#1E3A8A',
  'purple': '#8B5CF6',
  'gold': '#F59E0B'
}
```

### Polices
Les polices sont définies dans `public/index.html` et `tailwind.config.js`.

## 📱 PWA (Progressive Web App)

Le site est configuré comme une PWA avec :
- Manifest.json
- Service Worker (optionnel)
- Icons pour installation
- Mode offline (avec Service Worker)


## 📝 Structure du projet

```
lart-du-web/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Services.js
│   │   ├── About.js
│   │   ├── Portfolio.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   └── Loader.js
│   ├── hooks/
│   │   ├── ThemeContext.js
│   │   └── useInView.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🤝 Contact

Pour toute question ou demande de personnalisation :
- Email : lartDuWeb@proton.me
- GitHub : [https://github.com/Lara904](https://github.com/Lara904)

## 📄 Licence

Ce projet est propriétaire de L'Art du Web. Tous droits réservés.

---

Développé avec ❤️ par L'Art du Web
