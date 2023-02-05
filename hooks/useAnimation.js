import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useAnimation = () => {
  function init() {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      toggleActions: 'play reverse play reverse',
    });
  }

  function slide({ el, to, trigger = false, name = '' }) {
    const arr = [
      el,
      { opacity: 0, x: to == 'left' ? '100px' : '-100px' },
      trigger
        ? {
            scrollTrigger: el,
            duration: 0.3,
            autoAlpha: 1,
            x: 0,
            ease: 'power0',
          }
        : { duration: 1.2, autoAlpha: 1, x: 0 },
    ];

    if (name) arr.push(name);

    return arr;
  }

  function batchAnimate(el) {
    gsap.set(el, {
      opacity: 0,
      y: 100,
      duration: 0.3,
      ease: 'power3',
    });

    ScrollTrigger.batch(el, {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: { each: 0.15, grid: [1, 3] },
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true,
        }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    });

    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(el, { y: 0 })
    );
  }

  return {
    init,
    slide,
    batchAnimate,
  };
};

export default useAnimation;
