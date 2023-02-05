import { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import useAnimation from '../../hooks/useAnimation';
import { AppContext } from '../../context/app-context';
import styles from '../../styles/components/Pages/About.module.scss';

import InteractiveVR from '../../public/assets/images/image-interactive.jpg';

const About = () => {
  const aboutContainerRef = useRef();
  const [isLoaded] = useContext(AppContext);

  const { slide } = useAnimation();

  useEffect(() => {
    const about = aboutContainerRef.current;

    if (isLoaded && about) {
      gsap.fromTo(
        ...slide({
          el: about.firstChild,
          trigger: true,
        })
      );

      gsap.fromTo(
        ...slide({
          el: about.lastChild,
          to: 'left',
          trigger: true,
        })
      );
    }
  }, [isLoaded]);

  return (
    <section className={`${styles['about']}`} ref={aboutContainerRef}>
      <div className={`${styles['interactive-img']}`}>
        <Image src={InteractiveVR} alt="Interactive VR" />
      </div>

      <div className={`${styles['about-description']}`}>
        <h1>The leader in interactive VR</h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class
          virtual reality projects for some of the best companies
          around the globe. Our award-winning creations have
          transformed businesses through digital experiences that bind
          to their brand.
        </p>
      </div>
    </section>
  );
};

export default About;
