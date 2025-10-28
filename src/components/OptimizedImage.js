import React from 'react';
import { motion } from 'framer-motion';
import { useLazyLoadImage } from '../hooks/usePerformance';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f3f4f6"/%3E%3C/svg%3E',
  ...props 
}) => {
  const { imageSrc, setImageRef, isLoaded, isError } = useLazyLoadImage(src, placeholder);

  return (
    <div className={`relative overflow-hidden ${className}`} {...props}>
      <motion.img
        ref={setImageRef}
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        initial={{ filter: 'blur(20px)' }}
        animate={{ filter: isLoaded ? 'blur(0px)' : 'blur(20px)' }}
        transition={{ duration: 0.5 }}
      />
      
      {!isLoaded && !isError && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
        </div>
      )}
      
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Erreur de chargement
          </span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
