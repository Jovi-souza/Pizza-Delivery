import { useContext } from 'react'
import {
  Article,
  BookOpen,
  Chats,
  House,
  List,
  Pizza,
  Tote,
  X,
} from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartContext } from '../../context/cartContext'

export function Header() {
  const { cartItens, toggleMenu, handleToggleMenu } =
    useContext(ShoppingCartContext)

  return (
    <header className="flex justify-between items-center bg-white p-4 overflow-hidden border-b-2 lg:justify-around">
      <div>
        <Image src={Logo} alt="Logo" className="w-36 lg:w-44" />
      </div>
      <nav className="relative">
        <List
          size={20}
          weight="bold"
          className="cursor-pointer lg:hidden"
          onClick={handleToggleMenu}
        />
        <ul
          className={`flex flex-col items-center gap-2 top-0 right-0 px-4 py-6 bg-white fixed z-20 h-screen border-l-2 border-gray-200 transform duration-300 ${toggleMenu} lg:static lg:z-0 lg:translate-x-0 lg:flex-row lg:h-max lg:border-none lg:gap-12`}
        >
          <X
            onClick={handleToggleMenu}
            size={20}
            className="cursor-pointer lg:hidden"
          />
          <li className="p-2 rounded-md border-b-2 border-transparent  hover:text-white hover:bg-red-500 lg:p-0 lg:hover:bg-white lg:hover:text-red-500">
            <Link href="/" about="Home" as="Home">
              <House size={20} weight="bold" className="lg:hidden" />
              <span className="hidden lg:flex">Home</span>
            </Link>
          </li>
          <li className="p-2 rounded-md border-b-2 border-transparent  hover:text-white hover:bg-red-500 lg:p-0 lg:hover:bg-white lg:hover:text-red-500">
            <Link href="/catering" as="Catering">
              <BookOpen size={20} weight="bold" className="lg:hidden" />
              <span className="hidden lg:flex">Catering</span>
            </Link>
          </li>
          <li className="p-2 rounded-md border-b-2 border-transparent  hover:text-white hover:bg-red-500 lg:p-0 lg:hover:bg-white lg:hover:text-red-500">
            <Link href="/contact" as="Contact">
              <Chats size={20} weight="bold" className="lg:hidden" />
              <span className="hidden lg:flex">Contact</span>
            </Link>
          </li>
          <li className="p-2 rounded-md border-b-2 border-transparent  hover:text-white hover:bg-red-500 lg:p-0 lg:hover:bg-white lg:hover:text-red-500">
            <Link href="/about_us" as="About us">
              <Article size={20} weight="bold" className="lg:hidden" />
              <span className="hidden lg:flex">About us</span>
            </Link>
          </li>
          <li className="p-2 rounded-md border-b-2 border-transparent  hover:text-white hover:bg-red-500 lg:p-0 lg:hover:bg-white lg:hover:text-red-500">
            <Link href="/menu" as="Menu">
              <Pizza size={20} weight="bold" className="lg:hidden" />
              <span className="hidden lg:block">Menu</span>
            </Link>
          </li>
          <Link
            href="order/basket"
            as="Basket"
            className="text-white bg-red-600 p-2 rounded-md"
          >
            <div className="relative lg:hidden">
              <Tote size={20} weight="bold" />
              <span className="absolute -top-4 -right-3 bg-red-600 px-1 border-2 border-white rounded-full text-[10px]">
                {cartItens.length}
              </span>
            </div>
            <div className="hidden gap-2 lg:flex">
              <span>Basket</span>
              <span className="border"></span>
              <span>{cartItens.length}</span>
            </div>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
