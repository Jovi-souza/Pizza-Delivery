import { createContext, ReactNode, useState } from 'react'

interface ItemProps {
  id: string
  name: string
  imageUrl: string
  description: string
  price: string
}

interface CartProps {
  itens: ItemProps[]
  addItemToCart: (product: ItemProps) => void
  DeleteItem: (id: string) => void
}

interface ChildrenProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as CartProps)

export function CartProvider({ children }: ChildrenProps) {
  const [itens, setItens] = useState<ItemProps[]>([])

  function addItemToCart(product: ItemProps) {
    setItens((state) => [...state, product])
  }

  function DeleteItem(id: string) {
    const itemRemoved = itens.filter((item) => item.id !== id)
    setItens(itemRemoved)
  }

  return (
    <ShoppingCartContext.Provider value={{ itens, addItemToCart, DeleteItem }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
