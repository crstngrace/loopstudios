import Link from 'next/link';

const NavLinks = () => {
  return (
    <ul>
      <li>
        <Link href="javascript:;">About</Link>
      </li>
      <li>
        <Link href="javascript:;">Careers</Link>
      </li>
      <li>
        <Link href="javascript:;">Events</Link>
      </li>
      <li>
        <Link href="javascript:;">Products</Link>
      </li>
      <li>
        <Link href="javascript:;">Support</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
