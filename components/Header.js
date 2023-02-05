import Image from 'next/image';
import classNames from 'classnames';
import styles from '../styles/components/Header.module.scss';
import NavLinks from './NavLinks';

import Logo from '../public/logo.svg';
import MenuIcon from '../public/assets/images/icon-hamburger.svg';

const Header = ({ setMenuIsOpen }) => {
  return (
    <header>
      <div className={`${styles['logo']}`}>
        <Image
          src={Logo}
          className={`custom-slide-left`}
          alt="loopstudios"
        />
      </div>

      <Image
        src={MenuIcon}
        onClick={() => setMenuIsOpen(true)}
        className={`d-md-none`}
      />

      <nav
        className={classNames(
          styles['nav'],
          'custom-slide-right',
          'd-none d-md-block'
        )}
      >
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
