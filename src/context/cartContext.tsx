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
  toggleMenu: string
  handleToggleMenu: () => void
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
  const [toggleMenu, setToggleMenu] = useState('translate-x-96')

  function addItemToCart(product: ItemProps) {
    const copyCartItens = [...cartItens]
    const findSameItem = copyCartItens.find((item) => item.id === product.id)

    if (findSameItem) {
      window.alert('este item já existe em seu carrinho')
    } else {
      setCartItens((state) => [...state, product])
    }
  }

  function removeFromCart(id: string) {
    const itemRemoved = cartItens.filter((item) => item.id !== id)
    setCartItens(itemRemoved)
  }

  function getQuantityOfItens(id: string) {
    return cartItens.find((item) => item.id === id)?.quantity || 1
  }

  function handleToggleMenu() {
    setToggleMenu(
      toggleMenu === 'translate-x-96' ? 'translate-x-0' : 'translate-x-96',
    )
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
        toggleMenu,
        handleToggleMenu,
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
