'use client';

import Link from 'next/link';
import Logo from './logo';
import { ModeToggle } from '../darkmode-toggle';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { useState } from 'react';

type NavbarProps = {};

const Navbar = ({}: NavbarProps): JSX.Element => {
  const [open, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((open) => !open);
  };

  return (
    <header className='flex relative justify-between items-center px-4 py-6 sm:px-10 z-50'>
      <Logo />
      <nav className='flex items-center space-x-4'>
        <div className='space-x-4 hidden sm:flex'>
          <Link href={`/`}>Home</Link>
          <Link href={`/about`}>Company</Link>
          <Link href={`/services`}>Services</Link>
          <Link href={`/contact`}>Connect</Link>
        </div>
        {open ? (
          <Cross1Icon
            onClick={handleOpen}
            className='h-5 z-50 w-5 cursor-pointer flex sm:hidden'
          />
        ) : (
          <HamburgerMenuIcon
            onClick={handleOpen}
            className='h-5 z-50 w-5 cursor-pointer flex sm:hidden'
          />
        )}

        <ModeToggle />
      </nav>
      {open && (
        <>
          <div
            onClick={handleOpen}
            className='fixed inset-0 bg-slate-600/40'
          ></div>
          <div className='absolute shadow-md dark:bg-slate-950 bg-white top-[4.2rem] rounded-md left-4 right-4 p-4'>
            <div className='space-y-2 flex flex-col'>
              <Link
                className='hover:bg-slate-200 dark:hover:bg-slate-900 px-4 py-2 rounded'
                href={`/`}
              >
                Home
              </Link>
              <Link
                className='hover:bg-slate-200 dark:hover:bg-slate-900 px-4 py-2 rounded'
                href={`/about`}
              >
                Company
              </Link>
              <Link
                className='hover:bg-slate-200 dark:hover:bg-slate-900 px-4 py-2 rounded'
                href={`/services`}
              >
                Services
              </Link>
              <Link
                className='hover:bg-slate-200 dark:hover:bg-slate-900 px-4 py-2 rounded'
                href={`/contact`}
              >
                Connect
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
