import { useEffect } from 'react';
import Lenis from 'lenis';

export default function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lenis = null;
    let rafId = null;

    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const shouldEnable = () => hoverQuery.matches && !motionQuery.matches;

    const initLenis = () => {
      if (!shouldEnable()) {
        destroyLenis();
        return;
      }

      if (lenis) return;

      lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        anchors: {
          offset: -80,
        },
      });

      window.__lenis = lenis;

      const raf = (time) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    };

    const destroyLenis = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
      delete window.__lenis;
    };

    initLenis();

    const handleQueryChange = () => {
      if (shouldEnable()) {
        initLenis();
      } else {
        destroyLenis();
      }
    };

    hoverQuery.addEventListener('change', handleQueryChange);
    motionQuery.addEventListener('change', handleQueryChange);

    return () => {
      hoverQuery.removeEventListener('change', handleQueryChange);
      motionQuery.removeEventListener('change', handleQueryChange);
      destroyLenis();
    };
  }, []);
}
