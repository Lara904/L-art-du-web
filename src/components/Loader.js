import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-cream dark:bg-dark-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          className="text-4xl font-bold text-deep-blue dark:text-purple mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          L'Art du Web
        </motion.div>
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-deep-blue dark:bg-purple rounded-full loader-dot"></div>
          <div className="w-3 h-3 bg-deep-blue dark:bg-purple rounded-full loader-dot"></div>
          <div className="w-3 h-3 bg-deep-blue dark:bg-purple rounded-full loader-dot"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
