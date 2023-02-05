import { useContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import useAnimation from '../../hooks/useAnimation';
import { AppContext } from '../../context/app-context';
import styles from '../../styles/components/Pages/Main.module.scss';
import Header from '../Header';
import Menu from '../Menu';

const Main = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const [isLoaded] = useContext(AppContext);
  const callToActionContainerRef = useRef();

  const { slide } = useAnimation();

  useEffect(() => {
    const landing = callToActionContainerRef.current;

    if (isLoaded && landing) {
      const tl = gsap.timeline();

      tl.fromTo(
        ...slide({
          el: landing.querySelectorAll('.custom-slide-left'),
          to: 'left',
          name: 'parallel',
        })
      ).fromTo(
        ...slide({
          el: landing.querySelectorAll('.custom-slide-right'),
          name: 'parallel',
        })
      );
    }
  }, [isLoaded]);

  return (
    <section
      className={`${styles['landing']}`}
      ref={callToActionContainerRef}
    >
      <Header setMenuIsOpen={setMenuIsOpen} />
      <Menu isMenuOpen={isMenuOpen} setMenuIsOpen={setMenuIsOpen} />
      <div className={`${styles['banner']} custom-slide-left`}>
        <h1>Immersive experiences that deliver</h1>
      </div>
    </section>
  );
};

export default Main;
