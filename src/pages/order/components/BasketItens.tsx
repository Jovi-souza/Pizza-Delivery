import Image from 'next/image'
import { useContext } from 'react'
import { TrashSimple } from 'phosphor-react'
import { ShoppingCartContext } from '../../../context/cartContext'

interface ItensCartProps {
  id: string
  name: string
  url: string
  price: string
  description: string
  quantity: number
}

export default function BasketItens({
  id,
  description,
  name,
  price,
  url,
}: ItensCartProps) {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    getQuantityOfItens,
  } = useContext(ShoppingCartContext)

  const quantity = getQuantityOfItens(id)

  const converter =
    price === undefined ? 0 : parseFloat(price.replace('R$', ''))
  const totalPrice = quantity * converter

  return (
    <div className="grid grid-cols-[60px_minmax(80px,_1fr)_160px] items-center justify-center py-4 border-b-2">
      <div className="object-cover">
        <Image src={url} alt="" width={50} height={50} />
      </div>
      <div>
        <h1 className="text-sm">{name}</h1>
        <p className="hidden text-xs">{description}</p>
      </div>
      <div className="flex gap-2 items-center justify-center text-sm">
        <div className="flex gap-2 border rounded-full px-2">
          <button onClick={() => decreaseCartQuantity(id)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => increaseCartQuantity(id)}>+</button>
        </div>
        <span className=" font-bold">R$ {totalPrice}</span>
        <button onClick={() => removeFromCart(id)}>
          <TrashSimple
            size={16}
            weight="fill"
            className="text-gray-500 transition ease-in-out hover:text-red-600"
          />
        </button>
      </div>
    </div>
  )
}
