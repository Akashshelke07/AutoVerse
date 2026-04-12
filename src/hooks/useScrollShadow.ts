import { useState, useEffect } from 'react';

/**
 * Hook to detect if the page has been scrolled past a certain threshold.
 * Used for navbar styling (shadow and border transitions).
 */
export const useScrollShadow = (threshold = 20) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};
