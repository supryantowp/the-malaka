import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import Button from '../buttons/Button';
import NextImage from '../NextImage';

const links = [
  { href: '/', label: 'Top' },
  { href: '/for-everyone', label: 'For Everyone' },
  { href: '/benefit', label: 'Benefit' },
  { href: '/preview', label: 'Preview' },
  { href: '/penulis', label: 'Penulis' },
];

export default function Header() {
  return (
    <header className='bg-dark-primary sticky top-0 z-50 py-4 text-white'>
      <div className='layout flex justify-between items-center h-14'>
        <UnstyledLink
          href='/'
          className='flex items-center space-x-4 font-bold hover:text-gray-100'
        >
          <NextImage
            src='/images/logo.png'
            width='50px'
            height='50px'
            layout='fixed'
            alt='logo'
            objectFit='cover'
          />
          <h5>The Malaka</h5>
        </UnstyledLink>
        <nav className='hidden md:block'>
          <ul className='flex justify-between items-center space-x-8'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-100'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
        <Button className='text-dark-primary px-6 py-3 bg-white rounded-full'>
          Download
        </Button>
      </div>
    </header>
  );
}
