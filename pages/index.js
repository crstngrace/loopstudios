import { useContext, useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import Animation from '../hooks/useAnimation';
import { AppContext } from '../context/app-context';

import Loader from '../components/Loader';
import Main from '../components/Pages/Main.js';
import About from '../components/Pages/About';
import Footer from '../components/Footer.js';
import Creations from '../components/Pages/Creations';

export default function Home() {
  const [isLoaded, setIsLoaded] = useContext(AppContext);
  const loaderRef = useRef();
  const mainContainerRef = useRef();
  const { init } = Animation();

  init();

  const loaderAnimation = () => {
    gsap.to(loaderRef.current, {
      duration: 1,
      scale: 3,
      autoAlpha: 0,
      ease: 'none',
      onComplete: () => {
        gsap.to(mainContainerRef.current, {
          visibility: 'visible',
        });

        setIsLoaded(1);
      },
    });
  };

  useEffect(() => {
    loaderAnimation();
  }, []);

  return (
    <>
      <Loader loaderRef={loaderRef} />
      <main ref={mainContainerRef}>
        <Main />
        <About />
        <Creations />
      </main>
      <Footer />
    </>
  );
}
