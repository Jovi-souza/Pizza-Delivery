import { useState, useContext } from 'react'
import { List, ShoppingCart, X } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartContext } from '../../context/cartContext'

export function Header() {
  const [toggleMenu, setToggleMenu] = useState('translate-x-96')
  const { itens } = useContext(ShoppingCartContext)

  function handleToggleMenu() {
    setToggleMenu(
      toggleMenu === 'translate-x-96' ? 'translate-x-0' : 'translate-x-96',
    )
  }

  return (
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
          <button className="relative">
            <div className="bg-red-600 p-2 rounded-full">
              <ShoppingCart size={24} weight="fill" color="white" />
            </div>
            <span className="text-xs text-white border-2 rounded-full absolute -right-1 -top-2 bg-red-600 px-1">
              {itens.length}
            </span>
          </button>
        </ul>
      </nav>
    </header>
  )
}
