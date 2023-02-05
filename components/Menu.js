import Image from 'next/image';
import classNames from 'classnames';
import styles from '../styles/components/Menu.module.scss';
import NavLinks from './NavLinks';

import Logo from '../public/logo.svg';
import Close from '../public/assets/images/icon-close.svg';

const Menu = ({ isMenuOpen, setMenuIsOpen }) => {
  return (
    <div
      className={classNames(styles['menu-container'], {
        [styles['open']]: isMenuOpen,
      })}
    >
      <header className={`${styles['header']}`}>
        <div className={`${styles['logo']}`}>
          <Image src={Logo} alt="loopstudios" />
        </div>

        <nav className={`${styles['nav']}`}>
          <Image
            src={Close}
            className={`d-md-none`}
            onClick={() => setMenuIsOpen(false)}
            alt="X"
          />
        </nav>
      </header>

      <div className={classNames(styles['main-nav'], 'main-nav')}>
        <NavLinks />
      </div>
    </div>
  );
};

export default Menu;
