import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image src='/hilink-logo.svg' alt='logo' width={74} height={29} />
      </Link>

      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
