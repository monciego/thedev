import Link from 'next/link';
import Logo from './logo';
import { ModeToggle } from '../darkmode-toggle';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

type NavbarProps = {};

const Navbar = ({}: NavbarProps): JSX.Element => {
  return (
    <header className='flex justify-between items-center px-4 py-6 sm:px-10'>
      <Logo />
      <nav className='flex items-center space-x-4'>
        <div className='space-x-4 hidden sm:flex'>
          <Link href={`/`}>Home</Link>
          <Link href={`/about`}>Company</Link>
          <Link href={`/services`}>Services</Link>
          <Link href={`/contact`}>Connect</Link>
        </div>
        <HamburgerMenuIcon className='h-5 w-5 flex sm:hidden' />
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
