import type { Variants } from 'framer-motion';

/**
 * Common animation variants for consistent Framer Motion usage across sections.
 * Optimized for 'whileInView' triggers with standard agency-style reveal.
 */

const LUXURY_EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeInUp: Variants = {
  initial: { 
    opacity: 0, 
    y: 40,
    scale: 0.98
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: LUXURY_EASE,
    }
  },
};

export const fadeIn: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: LUXURY_EASE,
    }
  },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -60, scale: 0.98 },
  animate: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    }
  },
};

export const letterAnimation: Variants = {
  initial: { y: '100%', opacity: 0 },
  animate: { 
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: LUXURY_EASE,
    }
  },
};

export const hoverLift: Variants = {
  hover: {
    y: -6,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: LUXURY_EASE,
    }
  }
};
