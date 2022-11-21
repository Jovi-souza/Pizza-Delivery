import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { CartProvider } from '../context/cartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="overflow-hidden relative">
      <CartProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </div>
  )
}
