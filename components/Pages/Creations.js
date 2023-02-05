import { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useAnimation from '../../hooks/useAnimation';
import { AppContext } from '../../context/app-context';
import styles from '../../styles/components/Pages/Creations.module.scss';
import Items from '../Items';

const Creations = () => {
  const creationsRef = useRef();
  const [isLoaded] = useContext(AppContext);

  const { slide } = useAnimation();

  useEffect(() => {
    const creations = creationsRef.current;

    if (isLoaded && creations) {
      gsap.fromTo(
        ...slide({
          el: creations.querySelector('h1'),
          to: 'left',
          trigger: true,
        })
      );

      gsap.fromTo(
        ...slide({
          el: creations.querySelector('button'),
          trigger: true,
        })
      );
    }
  }, [isLoaded]);

  return (
    <section className={`${styles['creations']}`} ref={creationsRef}>
      <div className={`${styles['creations-header']}`}>
        <h1>Our creations</h1>
        <button className={`d-none d-md-block`}>See all</button>
      </div>

      <div className={`${styles['creation-items']}`}>
        <Items />
      </div>

      <button className={`d-block d-md-none mx-auto`}>See all</button>
    </section>
  );
};

export default Creations;
