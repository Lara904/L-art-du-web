import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, Star, Coffee, Rocket, Globe } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.3 });

  const values = [
    {
      icon: Target,
      title: "Précision",
      description: "Chaque pixel compte, chaque ligne de code est optimisée"
    },
    {
      icon: Heart,
      title: "Créativité",
      description: "Des designs uniques qui captivent et convertissent"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Des sites ultra-rapides pour une expérience optimale"
    },
    {
      icon: Users,
      title: "Proximité client",
      description: "Votre succès est notre priorité absolue"
    }
  ];

  const stats = [
    { number: "5+", label: "Années d'expérience" },
    { number: "50+", label: "Projets réalisés" },
    { number: "98%", label: "Score Lighthouse moyen" },
    { number: "24h", label: "Temps de réponse" }
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
              L'excellence au service de votre vision
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Nous sommes une équipe passionnée d'experts du web, dédiée à créer des expériences digitales 
              exceptionnelles qui propulsent votre entreprise vers de nouveaux sommets.
            </p>
          </motion.div>

          {/* Contenu principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Texte et valeurs */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Votre partenaire digital de confiance
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Chez L'Art du Web, nous croyons que chaque projet est unique. Notre approche sur mesure 
                combine expertise technique de pointe et créativité sans limite pour donner vie à vos idées 
                les plus ambitieuses.
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Depuis plus de 5 ans, nous accompagnons des entreprises de toutes tailles dans leur 
                transformation digitale, en créant des solutions web qui allient esthétique, performance 
                et résultats mesurables.
              </p>

              <motion.a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-deep-blue to-purple text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>En savoir plus sur notre approche</span>
                <Rocket className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Image stylisée ou illustration */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-deep-blue to-purple rounded-2xl p-1">
                <div className="bg-white dark:bg-dark-bg rounded-2xl p-8">
                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={hasBeenInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center p-4 bg-gray-50 dark:bg-dark-card rounded-xl"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-2xl font-bold bg-gradient-to-r from-deep-blue to-purple bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
              
              {/* Éléments décoratifs */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gold/20 w-20 h-20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 bg-purple/20 w-16 h-16 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>

          {/* Nos valeurs */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Nos valeurs fondamentales
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
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
                    <value.icon className="w-8 h-8 text-deep-blue dark:text-purple" />
                  </motion.div>
                  
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {value.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies et expertise */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Technologies maîtrisées
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'SEO', 'Lighthouse', 'Figma'].map((tech, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-dark-card rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={hasBeenInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
