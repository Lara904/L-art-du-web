import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Accueil', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'À propos', href: '#about' },
        { label: 'Réalisations', href: '#portfolio' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Création de sites', href: '#services' },
        { label: 'Audit SEO', href: '#services' },
        { label: 'Optimisation', href: '#services' },
        { label: 'Maintenance', href: '#contact' }
      ]
    },
    {
      title: 'Ressources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'FAQ', href: '#contact' },
        { label: 'Mentions légales', href: '#' },
        { label: 'Politique de confidentialité', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Lara904', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:lartDuWeb@proton.me', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative">
      {/* Gradient de transition */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contenu principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <motion.div
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="w-8 h-8 text-purple" />
              <span className="text-xl font-bold">L'Art du Web</span>
            </motion.div>
            
            <p className="text-gray-400 mb-6">
              Sublimez votre présence en ligne avec des solutions web 
              performantes et sur mesure.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-gray-800 hover:bg-purple rounded-lg transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Liens de navigation */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-purple transition-colors inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          className="bg-gray-800 dark:bg-gray-900 rounded-xl p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">
                Restez informé
              </h3>
              <p className="text-gray-400">
                Recevez nos dernières actualités et conseils web
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple w-full sm:w-auto"
              />
              <motion.button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-deep-blue to-purple text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                S'abonner
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <motion.p
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © {2020} L'Art du Web. Tous droits réservés. 
              Fait avec <Heart className="inline w-4 h-4 text-red-500 mx-1" /> en France
            </motion.p>

            {/* Badges de performance */}
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-500">
                Score Lighthouse
              </span>
              <div className="flex space-x-2">
                {['98', '100', '100', '100'].map((score, index) => (
                  <motion.div
                    key={index}
                    className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {score}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton retour en haut */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-deep-blue to-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all z-30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
