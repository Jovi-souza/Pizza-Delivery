import '../../styles/globals.css'
import Logo from '../assets/Logo.svg'
import LogoWhite from '../assets/LogoWhite.svg'
import { List, X } from 'phosphor-react'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  const [toggleMenu, setToggleMenu] = useState('translate-x-96')

  function handleToggleMenu() {
    setToggleMenu(
      toggleMenu === 'translate-x-96' ? 'translate-x-0' : 'translate-x-96',
    )
  }

  return (
    <div className="overflow-hidden relative">
      <header className="flex justify-between items-center p-4 overflow-hidden border-b-2 mb-4 lg:justify-around">
        <div>
          <Image src={Logo} alt="Logo" className="max-w-xs md:w-screen" />
        </div>
        <nav className="flex">
          <List
            size={24}
            weight="bold"
            className="cursor-pointer lg:hidden"
            onClick={handleToggleMenu}
          />
          <ul
            className={`flex flex-col items-end gap-4 top-0 right-0 p-6 bg-white fixed z-20 h-screen border-l-2 border-gray-200 transform duration-300 ${toggleMenu} lg:static lg:z-0 lg:translate-x-0 lg:flex-row lg:h-max lg:border-none lg:gap-12`}
          >
            <X
              onClick={handleToggleMenu}
              size={20}
              className="ml-auto cursor-pointer lg:hidden"
            />
            <li>
              <Link
                href="/"
                className="border-b-2 border-transparent  focus:text-red-500 focus:border-red-500 lg:text-xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/catering"
                className="border-b-2 border-transparent  focus:text-red-500 focus:border-red-500 lg:text-xl"
              >
                Catering
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="border-b-2 border-transparent  focus:text-red-500 focus:border-red-500 lg:text-xl"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/about_us"
                className="border-b-2 border-transparent  focus:text-red-500 focus:border-red-500 lg:text-xl"
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
      <footer className="flex flex-col gap-8 bg-gray-700 px-4 py-6 text-gray-400 sm:flex-row sm:flex-wrap sm:py-16 md:gap-16">
        <div className="max-w-lg sm:w-full">
          <Image src={LogoWhite} alt="" className="w-full max-w-md" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-2xl md:text-3xl">Salvation Pizza</h1>
          <Link href="/">Home</Link>
          <Link href="/catering">Catering</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about_us">About Us</Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-2xl md:text-3xl">Social media</h1>
          <Link href="/">Instagram</Link>
          <Link href="/catering">Facebook</Link>
          <Link href="/contact">Twitter</Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-2xl md:text-3xl">Contact</h1>
          <p>(83) 9 9369-3665</p>
        </div>
      </footer>
    </div>
  )
}
