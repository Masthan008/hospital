import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  ScrollTrigger.matchMedia({
    // Desktop animations
    '(min-width: 768px)': function () {
      gsap.utils.toArray('.animate-fade-in').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        });
      });

      gsap.utils.toArray('.animate-slide-in-left').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: -100,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        });
      });

      gsap.utils.toArray('.animate-slide-in-right').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: 100,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        });
      });

      gsap.utils.toArray('.animate-scale-in').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        });
      });
    },

    // Mobile-specific animations (if any)
    '(max-width: 767px)': function () {
      // For mobile, we can have simpler animations or none at all to improve performance.
      // For now, we'll keep the same animations, but this is where you'd make changes.
      gsap.utils.toArray('.animate-fade-in').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        });
      });

      gsap.utils.toArray('.animate-slide-in-left').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: -50,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        });
      });

      gsap.utils.toArray('.animate-slide-in-right').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        });
      });

      gsap.utils.toArray('.animate-scale-in').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        });
      });
    },
  });
};
