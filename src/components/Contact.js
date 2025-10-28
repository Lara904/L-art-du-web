import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Clock,
  MessageSquare,
  User
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.3 });
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // Nouvelle fonction onSubmit pour Netlify Forms
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message);

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      setSubmitStatus('success');
      reset();

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "lartDuWeb@proton.me",
      link: "mailto:lartDuWeb@proton.me"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 6 XX XX XX XX",
      link: "tel:+33600000000"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "France",
      link: null
    },
    {
      icon: Clock,
      title: "Disponibilité",
      value: "Lun-Ven 9h-18h",
      link: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-deep-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={hasBeenInView ? "visible" : "hidden"}>

          {/* En-tête */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-deep-blue/10 dark:bg-deep-blue/20 rounded-full mb-4">
              <MessageSquare className="w-4 h-4 text-deep-blue dark:text-purple" />
              <span className="text-sm font-medium text-deep-blue dark:text-purple">Contact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Parlons de votre projet
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Prêt à transformer votre vision en réalité ? Contactez-nous pour un audit gratuit 
              et découvrez comment nous pouvons vous aider.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire Netlify */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Envoyez-nous un message
              </h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                data-netlify="true"
                netlify-honeypot="bot-field"
                name="contact"
                method="POST"
              >
                {/* Champ caché obligatoire */}
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <input name="bot-field" />
                </div>

                {/* Champ Nom */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <User className="inline w-4 h-4 mr-1" />
                    Nom complet
                  </label>
                  <input
                    {...register('name', { required: 'Le nom est requis', minLength: { value: 2, message: 'Le nom doit contenir au moins 2 caractères' } })}
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-deep-blue dark:focus:ring-purple'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                    placeholder="Jean Dupont"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>

                {/* Champ Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Mail className="inline w-4 h-4 mr-1" />
                    Email
                  </label>
                  <input
                    {...register('email', { 
                      required: 'L\'email est requis',
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email invalide' }
                    })}
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-deep-blue dark:focus:ring-purple'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                    placeholder="jean@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>

                {/* Champ Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-1" />
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: 'Le message est requis', minLength: { value: 10, message: 'Le message doit contenir au moins 10 caractères' } })}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-deep-blue dark:focus:ring-purple'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors resize-none`}
                    placeholder="Décrivez votre projet..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>

                {/* Bouton Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-deep-blue to-purple hover:shadow-lg transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>

                {/* Messages de statut */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-green-700 dark:text-green-300">
                      Merci ! Nous vous répondrons rapidement 👋
                    </span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <span className="text-red-700 dark:text-red-300">
                      Une erreur est survenue. Veuillez réessayer.
                    </span>
                  </div>
                )}
              </form>
            </motion.div>

            {/*Informations de contact + FAQ corrigée */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-gradient-to-br from-deep-blue to-purple rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Commençons votre projet</h3>
                <p className="mb-6 opacity-90">
                  Nous sommes là pour transformer vos idées en solutions web exceptionnelles. 
                  Un audit gratuit vous attend !
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div key={index} className="bg-white dark:bg-dark-card rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <info.icon className="w-5 h-5 text-deep-blue dark:text-purple" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{info.title}</div>
                        {info.link ? (
                          <a href={info.link} className="text-gray-900 dark:text-white hover:text-deep-blue dark:hover:text-purple transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-900 dark:text-white">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FAQ corrigée */}
              <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Questions fréquentes
                </h4>
                <div className="space-y-3">
                  {[
                    {
                      question: "Combien coûte un site web ?",
                      answer: "Les tarifs varient selon la complexité : site vitrine à partir de 1500€, e-commerce à partir de 3000€. Devis gratuit personnalisé sous 24h."
                    },
                    {
                      question: "Quel est le délai de réalisation ?",
                      answer: "Site vitrine : 2-3 semaines. Site e-commerce : 4-6 semaines. Site sur mesure : 6-8 semaines. Livraison garantie dans les délais."
                    },
                    {
                      question: "Proposez-vous la maintenance ?",
                      answer: "Oui, forfait maintenance à partir de 50€/mois incluant : mises à jour, sauvegardes, support technique et modifications mineures."
                    }
                  ].map((item, index) => (
                    <details
                      key={index}
                      className="group p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                      <summary className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {item.question}
                      </summary>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;