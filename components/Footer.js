import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/Footer.module.scss';
import NavLinks from './NavLinks';

import Facebook from '../public/assets/images/socials/icon-facebook.svg';
import Twitter from '../public/assets/images/socials/icon-twitter.svg';
import Pinterest from '../public/assets/images/socials/icon-pinterest.svg';
import Instagram from '../public/assets/images/socials/icon-instagram.svg';

import Logo from '../public/logo.svg';

const Footer = () => {
  return (
    <footer className={`${styles['footer']}`}>
      <div className={`${styles['footer-quick-links']}`}>
        <Image src={Logo} alt="loopstudios" />
        <NavLinks />
      </div>

      <div className={`${styles['footer-socials']}`}>
        <ul className={`${styles['social-media']}`}>
          <li>
            <Link href="javascript:;">
              <Image src={Facebook} alt="Facebook" />
            </Link>
          </li>
          <li>
            <Link href="javascript:;">
              <Image src={Twitter} alt="Twitter" />
            </Link>
          </li>
          <li>
            <Link href="javascript:;">
              <Image src={Pinterest} alt="Pinterest" />
            </Link>
          </li>
          <li>
            <Link href="javascript:;">
              <Image src={Instagram} alt="Instagram" />
            </Link>
          </li>
        </ul>

        <span className={`${styles['copyright']}`}>
          &copy; 2021 Loopstudios. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
