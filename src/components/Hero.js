import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Générer des particules aléatoires
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  /*const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };*/

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-light-gray dark:from-dark-bg dark:via-gray-900 dark:to-dark-card">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
      </div>

      {/* Particules animées */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-deep-blue dark:bg-purple opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Cercles décoratifs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-deep-blue/10 dark:bg-purple/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple/10 dark:bg-gold/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Contenu principal */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-full shadow-lg mb-8"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Excellence & Innovation
          </span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-deep-blue to-purple bg-clip-text text-transparent">
            L'Art du Web
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-light"
        >
          Sublimez votre présence en ligne
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Création de sites web sur mesure, audit technique et SEO, optimisation de performances. 
          Nous transformons vos idées en expériences digitales exceptionnelles.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            className="group inline-flex items-center justify-center px-8 py-4 text-white bg-gradient-to-r from-deep-blue to-purple rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Demander un audit gratuit</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-4 text-deep-blue dark:text-white bg-white dark:bg-dark-card border-2 border-deep-blue dark:border-purple rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir nos réalisations
          </motion.a>
        </motion.div>

        {/* Statistiques 
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: '98%', label: 'Score Lighthouse' },
            { value: '+50', label: 'Projets réalisés' },
            { value: '100%', label: 'Clients satisfaits' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-deep-blue to-purple bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-600" />
      </motion.div>
    </section>
  );
};

export default Hero;
