import { createContext, ReactNode, useState } from 'react'

interface ItemProps {
  id: string
  name: string
  imageUrl: string
  description: string
  price: string
}

interface CartProps {
  item: ItemProps[]
  addItemToCart: (product: ItemProps) => void
}

interface ChildrenProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as CartProps)

export function CartProvider({ children }: ChildrenProps) {
  const [item, setItem] = useState<ItemProps[]>([])

  function addItemToCart(product: ItemProps) {
    setItem((state) => [...state, product])
  }

  console.log(item)

  return (
    <ShoppingCartContext.Provider value={{ item, addItemToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
