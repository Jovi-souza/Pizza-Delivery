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
  // const [quantity, setQuantity] = useState(1)

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
    const selectItem = cartItens.filter((item) => {
      return item.id === id
    })
    return selectItem.map((prop) => ++prop.quantity)
  }

  // function increaseCartQuantity(id: string) {
  //   const selectItem = cartItens.find((item) => item.id === id)
  //   console.log(selectItem?.quantity)
  //   if (selectItem) {
  //     return ++selectItem.quantity
  //   }
  //   return selectItem
  // }

  function decreaseCartQuantity(id: string) {}

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
