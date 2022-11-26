import { GetStaticProps } from 'next'
import { useState } from 'react'
import Stripe from 'stripe'
import { Product } from '../Components/Cards/Product'
import { stripe } from '../lib/stripe'
import * as Select from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'

interface PizzaProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
    quantity: number
  }[]
}

export default function Menu({ products }: PizzaProps) {
  const [typeFilter, settypeFilter] = useState('')

  const filteredProducts = products.filter((product) => {
    return product.name.includes(`${typeFilter}`)
  })

  return (
    <>
      <div className="p-4 m-auto">
        <div>
          <h1 className="text-3xl font-semibold">Pizza menu</h1>
          <Select.Root value={typeFilter} onValueChange={settypeFilter}>
            <div className="flex gap-2 font-semibold">
              <span>Filter:</span>
              <Select.Trigger className="flex gap-2 items-center justify-center font-bold outline-none">
                <Select.Value aria-label={typeFilter}>
                  {typeFilter}
                </Select.Value>
                <Select.Icon>
                  <CaretDown className="text-red-500" />
                </Select.Icon>
              </Select.Trigger>
            </div>

            <Select.Portal>
              <Select.Content className="bg-white rounded border border-gray-500">
                <Select.Viewport className="flex flex-col p-2">
                  <Select.Group>
                    <Select.Item
                      value=""
                      className="outline-none px-2 rounded cursor-pointer border-b hover:bg-green-500 hover:text-white"
                    >
                      <Select.ItemText>All</Select.ItemText>
                    </Select.Item>
                    <Select.Item
                      value="Premium"
                      className="outline-none px-2 rounded cursor-pointer border-b  hover:bg-green-500 hover:text-white"
                    >
                      <Select.ItemText>Premium</Select.ItemText>
                    </Select.Item>
                    <Select.Item
                      value="Vegan"
                      className="outline-none px-2 rounded cursor-pointer hover:bg-green-500 hover:text-white"
                    >
                      <Select.ItemText>Vegan</Select.ItemText>
                    </Select.Item>
                  </Select.Group>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
        <div className="flex flex-wrap w-full justify-center gap-8 lg:justify-[normal]">
          {filteredProducts.map((props) => {
            return (
              <Product
                key={props.id}
                id={props.id}
                name={props.name}
                description={props.description}
                imageUrl={props.imageUrl}
                price={props.price}
                quantity={props.quantity}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
    limit: 40,
  })

  const products = response.data.map((product) => {
    const quantity = 1
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      price: new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
      imageUrl: product.images[0],
      description: product.description,
      defaultPriceid: price.id,
      quantity,
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 horas
  }
}
