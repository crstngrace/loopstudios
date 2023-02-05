import { useContext } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { AppContext } from '../context/app-context';
import styles from '../styles/components/Loader.module.scss';

import Logo from '../public/logo.svg';

const Loader = ({ loaderRef }) => {
  const [isLoaded] = useContext(AppContext);

  return (
    <div
      className={classNames(styles['loader'], {
        [styles['loaded']]: isLoaded,
      })}
    >
      <Image
        src={Logo}
        alt="loopstudios"
        className={styles['logo']}
        ref={loaderRef}
      />
    </div>
  );
};

export default Loader;
