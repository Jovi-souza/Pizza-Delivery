import Image from 'next/image'
import Link from 'next/link'
import LogoWhite from '../../assets/LogoWhite.svg'
export function Footer() {
  return (
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
  )
}
