import { ItensCart } from './components/CartItens'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/cartContext'
import { ArrowCircleLeft } from 'phosphor-react'
import Link from 'next/link'

export default function Basket() {
  const { itens } = useContext(ShoppingCartContext)
  const haveItens =
    itens.length === 0
      ? 'cursor-not-allowed opacity-80'
      : 'cursor-pointer opacity-100'

  const converter = itens.map((value) => {
    return parseFloat(value.price.replace('R$', ''))
  })

  const TotalValue = converter.reduce((pv, cv) => {
    return pv + cv
  }, 0)

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Basket</h1>
        <div className="flex flex-col gap-6">
          {itens.map((item) => {
            return (
              <ItensCart
                key={item.id}
                id={item.id}
                name={item.name}
                url={item.imageUrl}
                description={item.description}
                price={item.price}
              />
            )
          })}
        </div>
      </div>
      <span className="ml-auto font-semibold">
        Amount: <strong className="text-red-500">R$ {TotalValue}</strong>
      </span>
      <div className="flex justify-between">
        <Link
          href="/"
          className="flex justify-center items-center border gap-4 px-4 rounded-full text-xs uppercase text-gray-500"
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
