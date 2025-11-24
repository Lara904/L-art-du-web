import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronRight, Award, Clock, Code2, Sparkles, Target, Brain, Shield, BookOpen } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Portfolio = () => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  // Projets de formation avec structure P12
 const projetsFormation = [
    {
      id: 1,
      title: "OhMyFood",
      category: "formation",
      type: "formation",
      description: "Site mobile-first d'une foodtech avec animations CSS avancées",
      longDescription: "Développement complet d'un site responsive pour une startup foodtech, mettant l'accent sur l'expérience mobile et les animations CSS sophistiquées.",
      
      // Structure P12 requise
      contexte: "Création d'un site vitrine pour une startup de commande de repas gastronomiques, avec un focus sur l'expérience mobile premium.",
      objectifs: "Développer une interface mobile-first avec animations fluides pour améliorer l'engagement utilisateur et créer une expérience mémorable.",
      stackTechnique: ["HTML5", "Sass/SCSS", "CSS3 Animations", "Mobile First", "Git"],
      competencesDeveloppees: "Maîtrise des animations CSS, méthodologie mobile-first, préprocesseur Sass, et gestion de projet avec Git.",
      resultatsImpact: "Score Lighthouse de 99%, animations fluides 60fps, 100% responsive sur tous les devices, temps de chargement <2s.",
      perspectivesAmelioration: "Intégration d'une API pour les commandes, ajout d'animations JavaScript avancées, optimisation du SEO.",
      
      image: "/images/p4.jpg",
      placeholderImage: "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='600' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-family='sans-serif' font-size='24'%3EOhMyFood%3C/text%3E%3C/svg%3E",
      tags: ["HTML5", "Sass", "Animations CSS", "Mobile First"],
      github: "https://github.com/Lara904/ohmyfood",
      demo: "#",
      duration: "60 heures",
      highlights: [
        "Score Lighthouse 99%",
        "Animations fluides 60fps", 
        "100% responsive",
        "Performance mobile optimale"
      ]
    },
    {
      id: 2,
      title: "Print it !",
      category: "formation",
      type: "formation",
      description: "Carrousel dynamique interactif avec JavaScript vanilla",
      longDescription: "Développement d'un carrousel interactif en JavaScript pur pour le site d'une imprimerie. Focus sur la manipulation du DOM et la gestion des événements.",
      
      contexte: "Création d'un carrousel dynamique pour une imprimerie locale afin d'améliorer la présentation de leurs services sur leur site vitrine.",
      objectifs: "Développer un carrousel fonctionnel en JavaScript vanilla, gérer les événements utilisateur et optimiser les performances sans framework.",
      stackTechnique: ["JavaScript ES6+", "HTML5", "CSS3", "DOM Manipulation", "Event Handling"],
      competencesDeveloppees: "Maîtrise du JavaScript natif, manipulation avancée du DOM, gestion des événements, optimisation des performances, et debugging.",
      resultatsImpact: "Carrousel fluide et responsive, code JavaScript modulaire et réutilisable, amélioration de l'UX du site client.",
      perspectivesAmelioration: "Ajout d'animations CSS3, lazy loading des images, support tactile mobile, et configuration automatique.",
      
      image: "/images/p5.jpg",
      placeholderImage: "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='600' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-family='sans-serif' font-size='24'%3EPrint it!%3C/text%3E%3C/svg%3E",
      tags: ["JavaScript", "DOM", "Events", "Carousel"],
      github: "https://github.com/Lara904/Print-it",
      demo: "#",
      duration: "20 heures",
      highlights: [
        "JavaScript vanilla pur",
        "Code modulaire et propre",
        "Gestion d'événements optimisée",
        "Performance native"
      ]
    },
    {
      id: 3,
      title: "Sophie Bluel - Portfolio Architecte",
      category: "formation", 
      type: "formation",
      description: "Site dynamique avec API REST, authentification et interface d'administration",
      longDescription: "Développement d'un portfolio dynamique pour une architecte d'intérieur avec gestion complète du contenu via une API REST et interface d'administration sécurisée.",
      
      contexte: "Création d'un site vitrine pour une architecte d'intérieur nécessitant une gestion dynamique de ses projets avec interface d'administration.",
      objectifs: "Intégrer une API REST, implémenter un système d'authentification JWT et créer une interface d'administration intuitive pour la gestion de contenu.",
      stackTechnique: ["JavaScript ES6+", "API REST", "JWT Authentication", "HTML5/CSS3", "Fetch API"],
      competencesDeveloppees: "Intégration d'API REST, gestion de l'authentification, manipulation du DOM, gestion des états d'application et sécurité front-end.",
      resultatsImpact: "Interface d'administration fonctionnelle, authentification sécurisée JWT, CRUD complet sur les projets, UX fluide admin/visiteur.",
      perspectivesAmelioration: "Ajout d'un système de cache, optimisation des requêtes API, implémentation d'un système de notifications.",
      
      image: "/images/p6.png",
      placeholderImage: "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='600' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-family='sans-serif' font-size='24'%3ESophie Bluel%3C/text%3E%3C/svg%3E",
      tags: ["JavaScript", "API REST", "JWT Auth", "Dynamic"],
      github: "https://github.com/Lara904/Portfolio-Sophie-Bluel",
      demo: "#",
      duration: "60 heures",
      highlights: [
        "API REST intégration",
        "Authentification JWT sécurisée",
        "Interface admin intuitive", 
        "CRUD complet"
      ]
    },
    {
      id: 4,
      title: "Kasa - Application de Location",
      category: "formation",
      type: "formation", 
      description: "Application React moderne avec React Router et composants réutilisables",
      longDescription: "Développement d'une application de location de logements avec React, mettant l'accent sur l'architecture modulaire et l'expérience utilisateur moderne.",
      
      contexte: "Refonte moderne d'une plateforme de location de logements pour améliorer l'expérience utilisateur et la maintenabilité du code.",
      objectifs: "Créer une application React moderne avec routing dynamique, composants réutilisables et animations fluides pour une expérience utilisateur premium.",
      stackTechnique: ["React 18", "React Router v6", "Sass/SCSS", "JavaScript ES6+", "Composants fonctionnels"],
      competencesDeveloppees: "Architecture React moderne, gestion du routing, création de composants réutilisables, hooks React, et optimisation des performances.",
      resultatsImpact: "Application 100% responsive, navigation fluide SPA, composants modulaires réutilisables, animations CSS optimisées.",
      perspectivesAmelioration: "Ajout d'un système de réservation, intégration d'une API backend, implémentation du lazy loading des images.",
      
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      tags: ["React", "React Router", "Sass", "Components"],
      github: "https://github.com/Lara904/Kasa", 
      demo: "#",
      duration: "60 heures",
      highlights: [
        "React 18 moderne",
        "Routing dynamique",
        "Composants réutilisables",
        "Animations fluides"
      ]
    },
    {
      id: 5,
      title: "724events - Agence Événementielle", 
      category: "formation",
      type: "formation",
      description: "Débogage complet d'une application React avec tests unitaires",
      longDescription: "Prise en charge du débogage d'un site d'agence événementielle React. Identification et résolution des bugs, rédaction de tests unitaires et documentation technique complète.",
      
      contexte: "Reprise d'un projet React d'agence événementielle avec de nombreux bugs critiques affectant l'expérience utilisateur et les fonctionnalités principales.",
      objectifs: "Identifier et corriger tous les bugs, implémenter des tests unitaires pour éviter les régressions, et documenter les corrections apportées.",
      stackTechnique: ["React", "JavaScript", "Jest", "Chrome DevTools", "Testing Library", "Git"],
      competencesDeveloppees: "Debugging avancé, tests unitaires React, utilisation des DevTools, documentation technique, et méthodologie de résolution de problèmes.",
      resultatsImpact: "Application fonctionnelle sans bugs critiques, couverture de tests à 80%+, documentation complète des corrections, amélioration des performances.",
      perspectivesAmelioration: "Ajout de tests d'intégration, mise en place de CI/CD, monitoring des erreurs en production, et optimisation des performances.",
      
      image: "/images/p9.png",
      placeholderImage: "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='600' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-family='sans-serif' font-size='24'%3E724events%3C/text%3E%3C/svg%3E",
      tags: ["React", "Debug", "Testing", "Jest"],
      github: "https://github.com/Lara904/77events-react-debug",
      demo: "#",
      duration: "60 heures",
      highlights: [
        "Bugs critiques résolus",
        "Tests unitaires complets",
        "Documentation technique",
        "Performance optimisée"
      ]
    },
    {
      id: 6,
      title: "ArgentBank - Application Bancaire",
      category: "formation",
      type: "formation",
      description: "Application bancaire complexe avec React, Redux et authentification sécurisée", 
      longDescription: "Développement du front-end d'une application bancaire moderne avec gestion d'état Redux, authentification sécurisée et interface utilisateur intuitive.",
      
      contexte: "Développement du front-end d'une nouvelle application bancaire nécessitant une gestion d'état complexe et une sécurité renforcée.",
      objectifs: "Implémenter une architecture Redux robuste, gérer l'authentification utilisateur et créer une interface bancaire intuitive et sécurisée.",
      stackTechnique: ["React", "Redux Toolkit", "API REST", "JWT", "CSS Modules", "React Router"],
      competencesDeveloppees: "Maîtrise de Redux pour la gestion d'état, sécurisation des données utilisateur, architecture d'application complexe, et intégration d'API sécurisées.",
      resultatsImpact: "Application bancaire fonctionnelle, authentification sécurisée, gestion d'état centralisée Redux, interface utilisateur moderne et accessible.",
      perspectivesAmelioration: "Ajout de fonctionnalités de virement, graphiques de données financières, notifications push, et dashboard analytique.",
      
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      tags: ["React", "Redux", "API", "Authentication"],
      github: "https://github.com/Lara904/Impl-mentez-le-front-end-d-une-application-bancaire-avec-React",
      demo: "#",
      duration: "80 heures", 
      highlights: [
        "Redux état global",
        "API REST sécurisée",
        "Authentification JWT",
        "Interface bancaire moderne"
      ]
    }
  ];

  // Projets personnels en cybersécurité et IA
  const projetsPersonnels = [
    {
      id: 101,
      title: "Recherches en Intelligence Artificielle",
      category: "personnel",
      type: "personnel",
      description: "Exploration des technologies d'IA et développement d'applications intelligentes",
      longDescription: "Projets de recherche personnels en intelligence artificielle, incluant l'exploration de modèles de machine learning et le développement d'applications utilisant des API d'IA modernes.",
      
      contexte: "Passion personnelle pour l'IA et volonté de comprendre les technologies émergentes pour les intégrer dans le développement web moderne.",
      objectifs: "Explorer les APIs d'IA (OpenAI, Hugging Face), développer des applications intelligentes et comprendre les principes du machine learning.",
      stackTechnique: ["Python", "OpenAI API", "JavaScript", "TensorFlow.js", "Hugging Face", "React"],
      competencesDeveloppees: "Intégration d'APIs d'IA, bases du machine learning, développement d'interfaces intelligentes, et optimisation de prompts.",
      resultatsImpact: "Plusieurs prototypes fonctionnels, maîtrise des APIs d'IA modernes, compréhension des enjeux éthiques de l'IA.",
      perspectivesAmelioration: "Approfondissement du deep learning, contribution à des projets open-source d'IA, spécialisation en IA éthique.",
      
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tags: ["Python", "OpenAI API", "Machine Learning", "TensorFlow"],
      github: "#",
      demo: "#",
      duration: "Projet continu",
      highlights: [
        "APIs d'IA intégrées",
        "Prototypes fonctionnels",
        "Interface intelligente",
        "Veille technologique active"
      ]
    },
    {
      id: 102, 
      title: "Cybersécurité & Ethical Hacking",
      category: "personnel",
      type: "personnel",
      description: "Formation continue en cybersécurité via TryHackMe et participation aux CTF",
      longDescription: "Apprentissage actif de la cybersécurité via TryHackMe labs, participation à des Capture The Flag (CTF) et étude des vulnérabilités web.",
      
      contexte: "Passion pour la sécurité informatique et volonté de comprendre les vulnérabilités web pour mieux sécuriser mes développements.",
      objectifs: "Maîtriser les bases de l'ethical hacking, identifier les vulnérabilités web courantes et développer une approche sécurisée du développement.",
      stackTechnique: ["TryHackMe", "Burp Suite", "Kali Linux", "Python", "OWASP", "CTF Tools"],
      competencesDeveloppees: "Analyse de vulnérabilités, tests de pénétration web, sécurisation d'applications, et méthodologies de sécurité.",
      resultatsImpact: "Completion de modules TryHackMe avancés, participation réussie à des CTF, application des bonnes pratiques sécuritaires dans mes projets web.",
      perspectivesAmelioration: "Certification en cybersécurité, spécialisation en sécurité des applications web, contribution à la communauté CTF.",
      
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", 
      tags: ["TryHackMe", "CTF", "Burp Suite", "OWASP", "Ethical Hacking"],
      github: "#",
      demo: "#",
      duration: "Formation continue",
      highlights: [
        "Modules TryHackMe complétés",
        "CTF challenges réussis",
        "Vulnérabilités web identifiées",
        "Développement sécurisé"
      ],
      
      // Détails spécifiques cybersécurité
      ctfCompleted: [
        "OverTheWire: Bandit (Niveaux 1-25)",
        "PicoCTF: Web Exploitation",
        "TryHackMe: Blue (Windows Exploitation)",
        "HackTheBox: Legacy (Easy)"
      ],
      tryhackmeModules: [
        "Web Fundamentals",
        "OWASP Top 10", 
        "Network Security",
        "Linux Fundamentals"
      ]
    }
  ];

  // Combinaison des projets
  const allProjects = [...projetsFormation, ...projetsPersonnels];

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'formation', label: 'Projets de Formation' },
    { id: 'personnel', label: 'Projets Personnels' },
    { id: 'react', label: 'React' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'api', label: 'API & Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : filter === 'formation' 
    ? projetsFormation
    : filter === 'personnel'
    ? projetsPersonnels
    : allProjects.filter(project => project.tags.some(tag => tag.toLowerCase().includes(filter)));

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
          {/* En-tête de section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple/10 dark:bg-purple/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-purple" />
              <span className="text-sm font-medium text-purple">Portfolio</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Mes réalisations & projets
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Découvrez une sélection de projets qui illustrent mon parcours de formation 
              et mes explorations personnelles en développement web, IA et cybersécurité.
            </p>
          </motion.div>

          {/* Filtres de catégories */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-deep-blue to-purple text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid des projets */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -5 }}
                >
                  {/* Image du projet */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = project.placeholderImage || project.image;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Badge type de projet */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.type === 'formation' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-purple-500 text-white'
                      }`}>
                        {project.type === 'formation' ? (
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-3 h-3" />
                            <span>Formation</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1">
                            <Brain className="w-3 h-3" />
                            <span>Personnel</span>
                          </div>
                        )}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-4 right-4 text-white">
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Contenu de la carte */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
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

                    {/* CTA et liens */}
                    <div className="flex items-center justify-between">
                      <motion.button
                        className="inline-flex items-center space-x-1 text-deep-blue dark:text-purple font-semibold hover:underline"
                        whileHover={{ x: 5 }}
                      >
                        <span>Voir détails</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                      
                      <div className="flex space-x-2">
                        {project.github && project.github !== "#" && (
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
                        )}
                        {project.demo && project.demo !== "#" && (
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
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal de détails du projet avec structure P12 */}
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
              className="bg-white dark:bg-dark-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
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
                
                {/* Badge type */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2 ${
                    selectedProject.type === 'formation' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-purple-500 text-white'
                  }`}>
                    {selectedProject.type === 'formation' ? (
                      <>
                        <BookOpen className="w-4 h-4" />
                        <span>Projet de Formation</span>
                      </>
                    ) : (
                      <>
                        <Brain className="w-4 h-4" />
                        <span>Projet Personnel</span>
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Contenu du modal */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
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
                    {selectedProject.github && selectedProject.github !== "#" && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {selectedProject.demo && selectedProject.demo !== "#" && (
                      <motion.a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gradient-to-r from-deep-blue to-purple text-white rounded-lg hover:shadow-lg transition-shadow"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Structure P12 pour projets de formation */}
                {selectedProject.type === 'formation' && (
                  <div className="space-y-6">
                    {/* Contexte */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                        <Target className="w-5 h-5 mr-2 text-blue-500" />
                        Contexte du projet
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">{selectedProject.contexte}</p>
                    </div>

                    {/* Objectifs */}
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                        <Award className="w-5 h-5 mr-2 text-purple-500" />
                        Objectifs & Problématiques
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">{selectedProject.objectifs}</p>
                    </div>

                    {/* Stack technique */}
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                        <Code2 className="w-5 h-5 mr-2 text-green-500" />
                        Stack Technique
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stackTechnique.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Compétences développées */}
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                        <Brain className="w-5 h-5 mr-2 text-orange-500" />
                        Compétences Développées
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">{selectedProject.competencesDeveloppees}</p>
                    </div>

                    {/* Résultats et impact */}
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                        <Award className="w-5 h-5 mr-2 text-green-500" />
                        Résultats & Impact
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProject.resultatsImpact}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedProject.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span className="text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Perspectives d'amélioration */}
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                        <Sparkles className="w-5 h-5 mr-2 text-yellow-500" />
                        Perspectives d'Amélioration
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">{selectedProject.perspectivesAmelioration}</p>
                    </div>
                  </div>
                )}

                {/* Structure pour projets personnels */}
                {selectedProject.type === 'personnel' && (
                  <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                      {selectedProject.longDescription}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Contexte & Objectifs */}
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                        <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                          <Target className="w-5 h-5 mr-2 text-purple-500" />
                          Contexte & Motivation
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProject.contexte}</p>
                        <p className="text-gray-700 dark:text-gray-300">{selectedProject.objectifs}</p>
                      </div>

                      {/* Compétences & Technologies */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                        <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                          <Code2 className="w-5 h-5 mr-2 text-blue-500" />
                          Technologies & Compétences
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {selectedProject.stackTechnique.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{selectedProject.competencesDeveloppees}</p>
                      </div>
                    </div>

                    {/* Réalisations spéciales pour cybersécurité */}
                    {selectedProject.id === 102 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                            <Shield className="w-5 h-5 mr-2 text-red-500" />
                            CTF Completés
                          </h4>
                          <ul className="space-y-2">
                            {selectedProject.ctfCompleted.map((ctf, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{ctf}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                            <BookOpen className="w-5 h-5 mr-2 text-green-500" />
                            Modules TryHackMe
                          </h4>
                          <ul className="space-y-2">
                            {selectedProject.tryhackmeModules.map((module, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{module}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    <div className="bg-gold/10 rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                        <Award className="w-5 h-5 mr-2 text-gold" />
                        Points Forts & Réalisations
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedProject.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                            <div className="w-2 h-2 bg-gold rounded-full" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Perspectives */}
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                        <Sparkles className="w-5 h-5 mr-2 text-indigo-500" />
                        Perspectives d'Évolution
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">{selectedProject.perspectivesAmelioration}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;