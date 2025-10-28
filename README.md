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

## 📧 Configuration EmailJS

Pour activer l'envoi d'emails via le formulaire de contact :

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)

2. Créer un service email (Gmail, Outlook, etc.)

3. Créer un template d'email avec les variables :
   - `from_name` - Nom de l'expéditeur
   - `from_email` - Email de l'expéditeur
   - `message` - Message du formulaire
   - `to_email` - lartDuWeb@proton.me

4. Modifier le fichier `src/components/Contact.js` :
```javascript
const EMAILJS_SERVICE_ID = 'votre_service_id';
const EMAILJS_TEMPLATE_ID = 'votre_template_id';
const EMAILJS_PUBLIC_KEY = 'votre_public_key';
```

5. Décommenter le code EmailJS dans la fonction `onSubmit` du composant Contact.

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

## 🚀 Déploiement

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Build le projet : `npm run build`
2. Déployer le dossier `build/` sur Netlify

### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Ajouter dans `package.json` :
```json
"homepage": "https://Lara904.github.io/lart-du-web",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Puis :
```bash
npm run deploy
```

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
