import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { CartProvider } from '../context/cartContext'
import { Header } from '../Components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="overflow-hidden relative">
      <CartProvider>
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </div>
  )
}
