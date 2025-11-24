import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, Rocket, Brain, Shield} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.3 });

  const competences = [
    {
      icon: Target,
      title: "Développement Front-End",
      description: "React, JavaScript, HTML/CSS, animations et responsive design"
    },
    {
      icon: Heart,
      title: "Intégration Web",
      description: "Sass, TailwindCSS, optimisation des performances et accessibilité"
    },
    {
      icon: Rocket,
      title: "Outils & DevOps", 
      description: "Git, GitHub, Lighthouse, SEO et débogage avancé"
    },
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      description: "Exploration des technologies IA et machine learning"
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "TryHackMe, Capture The Flag, sécurité web et tests de pénétration"
    },
    {
      icon: Users,
      title: "Méthodologie",
      description: "Agile, documentation technique et résolution de problèmes"
    }
  ];

  const technologies = [
    'React', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'TailwindCSS', 
    'Git', 'GitHub', 'API REST', 'Node.js', 'SEO', 'Lighthouse',
    'Python', 'TryHackMe', 'Burp Suite', 'Figma'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-deep-blue/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={hasBeenInView ? "visible" : "hidden"}
        >
          {/* En-tête de section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple/10 dark:bg-purple/20 rounded-full mb-4">
              <Award className="w-4 h-4 text-purple" />
              <span className="text-sm font-medium text-purple">À propos</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Mon parcours et ma passion
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              De la logique algorithmique à l'art du web, découvrez mon histoire et ma vision du développement moderne.
            </p>
          </motion.div>

          {/* Pitch personnel en 6 actes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Contenu principal du pitch */}
            <motion.div variants={itemVariants} className="space-y-6">
              
              {/* 1. Accroche identitaire */}
              <div className="bg-white dark:bg-dark-card rounded-xl p-6 border-l-4 border-purple">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  Lara Oueriagli, Intégratrice Web passionnée par l'innovation technologique
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Développeuse front-end spécialisée dans l'intégration web moderne, à l'intersection entre 
                  design élégant, performance optimale et sécurité numérique.
                </p>
              </div>

              {/* 2. Parcours et légitimité */}
              <div className="bg-white dark:bg-dark-card rounded-xl p-6 border-l-4 border-deep-blue">
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                  <Target className="w-5 h-5 mr-2 text-deep-blue" />
                  Parcours et Formation
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Passionnée de programmation depuis toujours, j'ai d'abord créé des jeux et logiciels personnels 
                  avant de me tourner vers le développement web. J'ai récemment terminé ma formation 
                  d'Intégrateur Web (Bac+2) chez OpenClassrooms, où j'ai découvert ma vocation 
                  pour créer des expériences utilisateur exceptionnelles.
                </p>
              </div>

              {/* 3. Stack technique et expertise */}
              <div className="bg-white dark:bg-dark-card rounded-xl p-6 border-l-4 border-gold">
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                  <Rocket className="w-5 h-5 mr-2 text-gold" />
                  Expertise Technique
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Je maîtrise React, JavaScript ES6+, et les frameworks CSS modernes (Sass, TailwindCSS), 
                  avec une expertise particulière en optimisation performance et accessibilité web. 
                  Mes projets atteignent régulièrement des scores Lighthouse de 98%+.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              
              {/* 4. Projets marquants */}
              <div className="bg-white dark:bg-dark-card rounded-xl p-6 border-l-4 border-green-500">
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                  <Award className="w-5 h-5 mr-2 text-green-500" />
                  Projets Marquants
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Je suis particulièrement fière du projet ArgentBank, une application bancaire complexe 
                  développée avec React et Redux, et du site Nina Carducci où j'ai multiplié les performances 
                  par 3 tout en atteignant le score SEO parfait de 100/100.
                </p>
              </div>

              {/* 5. Approche unique */}
              <div className="bg-white dark:bg-dark-card rounded-xl p-6 border-l-4 border-purple">
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-purple" />
                  Mon Approche
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Mon approche allie rigueur technique et créativité, en appliquant les méthodologies Agile 
                  et une attention obsessionnelle aux détails. Je crois qu'un code propre et une UX parfaite 
                  sont les fondements d'un web accessible et performant.
                </p>
              </div>

              {/* 6. Ambitions */}
              <div className="bg-white dark:bg-dark-card rounded-xl p-6 border-l-4 border-red-500">
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-red-500" />
                  Ambitions & Passions
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Mon objectif est d'intégrer une équipe innovante où je pourrais contribuer à des projets 
                  d'envergure tout en développant mon expertise en Intelligence Artificielle et Cybersécurité, 
                  deux domaines qui me passionnent et que j'explore activement.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Compétences détaillées */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Mes domaines de compétences
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {competences.map((competence, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-dark-card rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hasBeenInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="inline-flex p-3 bg-gradient-to-br from-deep-blue/10 to-purple/10 dark:from-purple/20 dark:to-deep-blue/20 rounded-full mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <competence.icon className="w-8 h-8 text-deep-blue dark:text-purple" />
                  </motion.div>
                  
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {competence.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {competence.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies maîtrisées */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Stack Technique & Outils
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-dark-card rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-purple/10 dark:hover:bg-purple/20 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={hasBeenInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={hasBeenInView ? { opacity: 1 } : {}}
              transition={{ delay: 2 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-deep-blue to-purple text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Découvrons nos synergies</span>
                <Rocket className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;