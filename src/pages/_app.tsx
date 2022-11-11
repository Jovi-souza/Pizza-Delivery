import '../../styles/globals.css'
import Logo from '../assets/Logo.svg'
import { List, X } from 'phosphor-react'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [toggleMenu, setToggleMenu] = useState('translate-x-96')

  function handleToggleMenu() {
    setToggleMenu(
      toggleMenu === 'translate-x-96' ? 'translate-x-0' : 'translate-x-96',
    )
  }

  return (
    <div className="overflow-hidden relative">
      <header className="flex justify-between items-center p-4 overflow-hidden">
        <div>
          <Image src={Logo} alt="Logo" className="w-40" />
        </div>
        <nav className="flex">
          <List
            size={24}
            weight="bold"
            className="cursor-pointer"
            onClick={handleToggleMenu}
          />
          <ul
            className={`flex flex-col items-end gap-4 top-0 right-0 p-6 bg-white fixed z-20 h-screen border-l-2 border-gray-200 transform duration-300 ${toggleMenu} `}
          >
            <X
              onClick={handleToggleMenu}
              size={20}
              className="ml-auto cursor-pointer"
            />
            <li>
              <a
                href=""
                className="border-b-2 border-transparent  focus:text-red-500 focus:border-red-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className="border-b-2 border-transparent  focus:text-red-500 focus:border-red-500"
              >
                Catering
              </a>
            </li>
            <li>
              <a
                href=""
                className="border-b-2 border-transparent  focus:text-red-500 focus:border-red-500"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href=""
                className="border-b-2 border-transparent  focus:text-red-500 focus:border-red-500"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  )
}
