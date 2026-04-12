import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Hook to animate a number from 0 to a target value when the element enters the viewport.
 */
export const useCountUp = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true;
      const endValue = end;
      const totalFrames = duration * 60;
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        // Ease out quad
        const currentCount = Math.round(endValue * (progress * (2 - progress)));
        
        if (frame >= totalFrames) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(currentCount);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return { count, ref };
};
