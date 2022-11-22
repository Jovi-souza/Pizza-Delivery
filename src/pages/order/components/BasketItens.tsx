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
}

export function BasketItens({
  id,
  description,
  name,
  price,
  url,
}: ItensCartProps) {
  const { DeleteItem } = useContext(ShoppingCartContext)

  function handleDeleteItem() {
    DeleteItem(id)
  }

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
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <span className=" font-bold">RS {price}</span>
        <button>
          <TrashSimple
            size={16}
            weight="fill"
            onClick={handleDeleteItem}
            className="text-gray-500 transition ease-in-out hover:text-red-600"
          />
        </button>
      </div>
    </div>
  )
}
