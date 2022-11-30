import Image from 'next/image'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/cartContext'

interface cardProps {
  name: string
  imageUrl: string
  price: string
  id: string
  description: string
  quantity: number
}

export function Product({
  name,
  price,
  imageUrl,
  description,
  id,
  quantity,
}: cardProps) {
  const { addItemToCart } = useContext(ShoppingCartContext)

  function handleAddItem() {
    addItemToCart({
      id,
      name,
      imageUrl,
      description,
      price,
      quantity,
    })
  }

  return (
    <div className="flex flex-col gap-4 p-4 justify-center items-center w-64 rounded-2xl shadow-xl">
      <div>
        <Image
          src={imageUrl}
          alt=""
          width={120}
          height={100}
          className="object-cover w-full"
        />
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold text-left w-52 overflow-hidden whitespace-nowrap overflow-ellipsis">
          {name}
        </h1>
        <p className="text-xs text-left text-gray-700">{description}</p>
        <div className="flex justify-between">
          <span className="font-bold">{price}</span>
          <button
            className="flex text-red-500 font-bold border border-red-500 px-2 rounded-full hover:text-white hover:bg-red-500"
            onClick={() => {
              handleAddItem()
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}
