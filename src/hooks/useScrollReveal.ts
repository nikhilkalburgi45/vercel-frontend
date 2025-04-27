import { useEffect, useRef } from 'react';
import { useInView, useAnimation } from 'framer-motion';

export const useScrollReveal = (threshold = 0.2) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return { ref, controls, isInView };
};
