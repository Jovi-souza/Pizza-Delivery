import { createContext, ReactNode, useState } from 'react'

interface ItemProps {
  id: string
  name: string
  imageUrl: string
  description: string
  price: string
  quantity: number
}

interface CartProps {
  cartItens: ItemProps[]
  addItemToCart: (product: ItemProps) => void
  getQuantityOfItens: (id: string) => number
  increaseCartQuantity: (id: string) => void
  decreaseCartQuantity: (id: string) => void
  removeFromCart: (id: string) => void
}

interface ChildrenProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as CartProps)

export function CartProvider({ children }: ChildrenProps) {
  const [cartItens, setCartItens] = useState<ItemProps[]>([])

  function addItemToCart(product: ItemProps) {
    const newProduct = {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      description: product.description,
      price: product.price,
      quantity: 1,
    }
    setCartItens((state) => [...state, newProduct])
  }

  function removeFromCart(id: string) {
    const itemRemoved = cartItens.filter((item) => item.id !== id)
    setCartItens(itemRemoved)
  }

  function getQuantityOfItens(id: string) {
    return cartItens.find((item) => item.id === id)?.quantity || 1
  }

  function increaseCartQuantity(id: string) {
    const copyCartItens = [...cartItens]
    const item = copyCartItens.find((product) => product.id === id)
    if (item) {
      ++item.quantity
    }
    setCartItens(copyCartItens)
  }

  function decreaseCartQuantity(id: string) {
    const copyCartItens = [...cartItens]
    const item = copyCartItens.find((product) => product.id === id)
    if (item) {
      if (item.quantity === 1) {
        item.quantity = 2
      }
      --item.quantity
    }
    setCartItens(copyCartItens)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItens,
        addItemToCart,
        removeFromCart,
        getQuantityOfItens,
        increaseCartQuantity,
        decreaseCartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
