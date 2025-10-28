import React from 'react';
import { motion } from 'framer-motion';
import { Code, Search, Zap, ArrowUpRight, CheckCircle, TrendingUp, Palette, Shield, Gauge } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Services = () => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.2 });

  const services = [
    {
      icon: Code,
      title: "Création de sites web sur mesure",
      description: "Intégration moderne, design responsive, performance garantie",
      features: [
        "React & Technologies modernes",
        "Design responsive adaptatif",
        "Animations fluides",
        "Code optimisé et maintenable"
      ],
      color: "from-deep-blue to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Search,
      title: "Audit technique & SEO",
      description: "Analyse Lighthouse, vitesse, UX et référencement",
      features: [
        "Analyse Lighthouse complète",
        "Optimisation SEO avancée",
        "Rapport détaillé",
        "Recommandations concrètes"
      ],
      color: "from-purple to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: Zap,
      title: "Optimisation & amélioration",
      description: "Refonte, fluidité, accessibilité, conversion",
      features: [
        "Performance maximale",
        "Accessibilité WCAG",
        "Amélioration UX/UI",
        "Taux de conversion optimisé"
      ],
      color: "from-gold to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    }
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

  const iconVariants = {
    hover: {
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-bg relative overflow-hidden">
      {/* Décoration de fond */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-deep-blue/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={hasBeenInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-2 bg-deep-blue/10 dark:bg-purple/10 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-deep-blue dark:text-purple" />
            <span className="text-sm font-medium text-deep-blue dark:text-purple">Services Premium</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Nos expertises à votre service
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Des solutions sur mesure pour transformer votre vision en réalité digitale performante
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasBeenInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className={`h-full ${service.bgColor} rounded-2xl p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300`}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icône avec gradient */}
                <motion.div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Titre */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={hasBeenInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  className={`inline-flex items-center space-x-2 text-deep-blue dark:text-purple font-semibold group-hover:underline`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>En savoir plus</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>

                {/* Badge de qualité */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={hasBeenInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                >
                  Premium
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section additionnelle - Processus */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={hasBeenInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 dark:bg-green-900/20 rounded-full mb-8">
            <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-700 dark:text-green-400">
              Processus certifié
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Notre approche en 4 étapes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Analyse", icon: Search },
              { step: "02", title: "Conception", icon: Palette },
              { step: "03", title: "Développement", icon: Code },
              { step: "04", title: "Optimisation", icon: Gauge }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={hasBeenInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="bg-gray-50 dark:bg-dark-card rounded-xl p-6">
                  <div className="text-3xl font-bold text-deep-blue/20 dark:text-purple/20 mb-2">
                    {item.step}
                  </div>
                  <item.icon className="w-8 h-8 text-deep-blue dark:text-purple mx-auto mb-2" />
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowUpRight className="w-6 h-6 text-gray-300 dark:text-gray-700 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
