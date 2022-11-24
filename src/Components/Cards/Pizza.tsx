import Image from 'next/image'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
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

export function Card({
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
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="grid grid-cols-[80px_minmax(180px,_1fr)_180px] items-stretch w-80 max-h-40 gap-4 p-4 rounded-3xl shadow-lg overflow-hidden">
          <div>
            <Image src={imageUrl} alt="" width={80} height={80} />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-base font-semibold text-left w-48 overflow-hidden whitespace-nowrap overflow-ellipsis">
              {name}
            </h1>
            <span className="text-lg font-semibold mt-auto">{price}</span>
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="animate-openModal" />
        <Dialog.Content
          className="bg-white rounded-md fixed 
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-sm p-6 border border-red-500"
        >
          <Dialog.Description>
            <div className="grid grid-cols-[100px_minmax(180px,_1fr)_100px] items-center gap-5">
              <div>
                <Image src={imageUrl} alt="" width={120} height={80} />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">{name}</h1>
                <div className="text-xs text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium, corrupti magni.
                </div>
                <div className="flex">
                  <div className="flex gap-14 text-xs">
                    <div className="text-sm font-semibold">{price}</div>
                    <Dialog.Close
                      onClick={handleAddItem}
                      className="flex text-red-500 font-bold border border-red-500 px-2 rounded-full hover:text-white hover:bg-red-500"
                    >
                      BUY
                    </Dialog.Close>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Description>
          <Dialog.Close className="absolute top-2 left-4 ">
            <X size={20} />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}