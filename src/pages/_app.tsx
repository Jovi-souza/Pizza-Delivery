import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { CartProvider } from '../context/cartContext'
import { Header } from '../Components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <CartProvider>
        <Header />
        <div className="max-w-6xl m-auto">
          <Component {...pageProps} />
        </div>
      </CartProvider>
    </div>
  )
}
