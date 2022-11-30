import BasketItens from './components/BasketItens'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/cartContext'
import { ArrowCircleLeft } from 'phosphor-react'
import Link from 'next/link'

export default function Basket() {
  const { cartItens } = useContext(ShoppingCartContext)
  const haveItens = cartItens.length === 0 ? 'hidden' : 'flex'

  const priceNumber = cartItens.map((item) => {
    const convertedPrice =
      item.price === undefined ? 0 : parseFloat(item.price.replace('R$', ''))
    return convertedPrice * item.quantity
  })

  const totalValue = priceNumber.reduce((at, ac) => {
    return at + ac
  }, 0)

  return (
    <div className="flex flex-col gap-4 p-4 max-w-2xl m-auto">
      <div>
        <h1 className="text-3xl font-bold">Basket</h1>
        <div className="flex flex-col gap-6 h-max max-h-96 overflow-y-scroll">
          {cartItens.map((item) => {
            return (
              <BasketItens
                key={item.id}
                id={item.id}
                name={item.name}
                url={item.imageUrl}
                description={item.description}
                price={item.price}
                quantity={item.quantity}
              />
            )
          })}
        </div>
      </div>
      <span className="ml-auto font-semibold">
        Amount: <strong className="text-red-500">R$ {totalValue}</strong>
      </span>
      <div className="flex justify-between">
        <Link
          href="/"
          className="flex justify-center items-center border gap-4 px-4 py-2 rounded-full text-xs uppercase text-gray-500"
        >
          <ArrowCircleLeft size={16} weight="regular" />
          back
        </Link>
        <Link
          href="/order/registration"
          className={`bg-red-500 px-4 py-2 rounded-full uppercase font-semibold text-white text-sm ${haveItens}`}
        >
          place your order
        </Link>
      </div>
    </div>
  )
}
