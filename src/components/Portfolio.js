import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronRight, Award, Clock, Code2, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Portfolio = () => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "OhMyFood",
      category: "animation",
      description: "Site d'une foodtech en mobile first avec animations CSS avancées",
      longDescription: "Implémentation complète du site OhMyFood avec Sass, incluant des animations CSS sophistiquées pour améliorer l'expérience utilisateur. Focus sur la performance mobile et l'accessibilité.",
      image: "/images/p4.jpg",
      tags: ["HTML", "Sass", "Animations CSS", "Mobile First"],
      github: "https://github.com/Lara904",
      demo: "#",
      duration: "60 heures",
      highlights: [
        "Score Lighthouse 99%",
        "Animations fluides",
        "100% responsive",
        "Performance optimale"
      ]
    },
    {
      id: 2,
      title: "Print it !",
      category: "javascript",
      description: "Carrousel dynamique pour une imprimerie avec JavaScript vanilla",
      longDescription: "Développement d'un carrousel interactif en JavaScript pur pour le site d'une imprimerie. Gestion des événements, manipulation du DOM et optimisation des performances.",
      image: "/images/p5.jpg",
      tags: ["JavaScript", "DOM", "Events", "Carousel"],
      github: "https://github.com/Lara904",
      demo: "#",
      duration: "20 heures",
      highlights: [
        "JavaScript vanilla",
        "Code modulaire",
        "Gestion d'événements",
        "Performance optimisée"
      ]
    },
    {
      id: 3,
      title: "Sophie Bluel",
      category: "api",
      description: "Site dynamique d'architecte avec API et gestion admin",
      longDescription: "Création d'un site web dynamique pour une architecte d'intérieur. Intégration avec une API REST, authentification, et interface d'administration pour gérer le portfolio.",
      image: "/images/p6.png",
      tags: ["JavaScript", "API REST", "Auth", "Dynamic"],
      github: "https://github.com/Lara904",
      demo: "#",
      duration: "60 heures",
      highlights: [
        "API REST intégration",
        "Authentification JWT",
        "Interface admin",
        "Formulaires dynamiques"
      ]
    },
    {
      id: 4,
      title: "Kasa",
      category: "react",
      description: "Application de location immobilière avec React et React Router",
      longDescription: "Développement d'une application web de location de logements avec React. Utilisation de React Router pour la navigation, composants réutilisables et animations CSS.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      tags: ["React", "React Router", "Sass", "Components"],
      github: "https://github.com/Lara904",
      demo: "#",
      duration: "60 heures",
      highlights: [
        "React moderne",
        "Routing dynamique",
        "Composants réutilisables",
        "Animations fluides"
      ]
    },
    {
      id: 5,
      title: "Nina Carducci",
      category: "seo",
      description: "Optimisation SEO et performance d'un site de photographe",
      longDescription: "Audit et optimisation complète d'un site de photographe. Amélioration du référencement naturel, de la performance et de l'accessibilité pour atteindre les premières positions Google.",
      image: "/images/p8.webp",
      tags: ["SEO", "Performance", "Lighthouse", "Accessibilité"],
      github: "https://github.com/Lara904",
      demo: "#",
      duration: "40 heures",
      highlights: [
        "Score SEO 100%",
        "Performance x3",
        "Accessibilité WCAG",
        "Top Google Search"
      ]
    },
    {
      id: 6,
      title: "724events",
      category: "debug",
      description: "Débogage complet du site d'une agence événementielle",
      longDescription: "Prise en charge du débogage d'un site d'agence événementielle. Utilisation des Chrome DevTools, rédaction de tests et cahier de recette complet.",
      image: "/images/p9.png",
      tags: ["Debug", "Testing", "DevTools", "QA"],
      github: "https://github.com/Lara904",
      demo: "#",
      duration: "60 heures",
      highlights: [
        "Bugs critiques résolus",
        "Tests unitaires",
        "Documentation complète",
        "Performance améliorée"
      ]
    },
    {
      id: 7,
      title: "ArgentBank",
      category: "react",
      description: "Application bancaire avec React et Redux",
      longDescription: "Développement du front-end d'une application bancaire avec React et Redux. Intégration API REST, authentification sécurisée et gestion d'état globale.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      tags: ["React", "Redux", "API", "Authentication"],
      github: "https://github.com/Lara904",
      demo: "#",
      duration: "80 heures",
      highlights: [
        "Redux état global",
        "API REST sécurisée",
        "Authentification JWT",
        "Interface moderne"
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'react', label: 'React' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'api', label: 'API & Backend' },
    { id: 'seo', label: 'SEO & Performance' },
    { id: 'animation', label: 'Animations' },
    { id: 'debug', label: 'Debug & Tests' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={hasBeenInView ? "visible" : "hidden"}
        >
          {/* En-tête */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/10 dark:bg-gold/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Portfolio</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Nos réalisations
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Découvrez une sélection de nos projets récents et les technologies utilisées
            </p>
          </motion.div>

          {/* Filtres */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-deep-blue to-purple text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Grille de projets */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="group relative bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -10 }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Badge de durée */}
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {project.duration}
                      </span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium text-gray-500">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <motion.button
                        className="inline-flex items-center space-x-1 text-deep-blue dark:text-purple font-semibold hover:underline"
                        whileHover={{ x: 5 }}
                      >
                        <span>Voir détails</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                      
                      <div className="flex space-x-2">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal de détails du projet */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-dark-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header du modal */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white dark:bg-dark-bg rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Contenu du modal */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{selectedProject.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Code2 className="w-4 h-4" />
                        <span>{selectedProject.category}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-deep-blue to-purple text-white rounded-lg hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                    <Award className="w-5 h-5 mr-2 text-gold" />
                    Points forts du projet
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Technologies utilisées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
