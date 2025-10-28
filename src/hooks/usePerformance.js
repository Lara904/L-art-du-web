import { useEffect, useRef, useState } from 'react';

/**
 * Hook personnalisé pour le lazy loading des images
 * Charge les images uniquement quand elles sont visibles
 */
export const useLazyLoadImage = (src, placeholder = '') => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!imageRef) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Charger l'image
            const img = new Image();
            
            img.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
            };
            
            img.onerror = () => {
              setIsError(true);
            };
            
            img.src = src;
            observer.unobserve(imageRef);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '50px'
      }
    );

    observer.observe(imageRef);

    return () => {
      if (imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, src]);

  return {
    imageSrc,
    setImageRef,
    isLoaded,
    isError
  };
};

/**
 * Hook pour précharger des images
 */
export const usePreloadImages = (imageUrls) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setIsAllLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const preloadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / totalImages) * 100);
          resolve(url);
        };
        
        img.onerror = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / totalImages) * 100);
          reject(url);
        };
        
        img.src = url;
      });
    };

    Promise.allSettled(imageUrls.map(url => preloadImage(url)))
      .then(() => {
        setIsAllLoaded(true);
      });
  }, [imageUrls]);

  return { loadingProgress, isAllLoaded };
};

/**
 * Hook pour optimiser les animations en désactivant
 * les animations complexes sur les appareils moins performants
 */
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
};

/**
 * Hook pour détecter les performances du dispositif
 */
export const useDevicePerformance = () => {
  const [performance, setPerformance] = useState('high');

  useEffect(() => {
    // Vérifier le nombre de cœurs CPU
    const cores = navigator.hardwareConcurrency || 1;
    
    // Vérifier la mémoire disponible (si disponible)
    const memory = navigator.deviceMemory || 4;
    
    // Vérifier la connexion réseau
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const connectionType = connection?.effectiveType || '4g';
    
    // Déterminer le niveau de performance
    if (cores < 4 || memory < 4 || connectionType === 'slow-2g' || connectionType === '2g') {
      setPerformance('low');
    } else if (cores < 8 || memory < 8 || connectionType === '3g') {
      setPerformance('medium');
    } else {
      setPerformance('high');
    }
  }, []);

  return performance;
};
