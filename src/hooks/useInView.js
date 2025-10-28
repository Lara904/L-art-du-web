import { useState, useEffect, useRef } from 'react';

/**
 * Hook personnalisé pour détecter quand un élément est visible à l’écran.
 * @param {Object} options - options pour l'IntersectionObserver (threshold, rootMargin, etc.)
 */
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const [, setIsInView] = useState(false); // ✅ on ne garde que le setter, car isInView n'est pas utilisé

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      if (entry.isIntersecting && !hasBeenInView) {
        setHasBeenInView(true);
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
      ...options
    });

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options, hasBeenInView]); // ✅ options ajouté ici

  return { ref, hasBeenInView };
};