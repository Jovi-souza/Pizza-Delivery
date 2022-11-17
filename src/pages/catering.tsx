import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import { Button } from '../Components/Button/order'
import { Form } from '../Components/Form/contact'
import { Card } from '../Components/Menu/component/card'
import { stripe } from '../lib/stripe'

interface PizzaProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }[]
}

export default function Catering({ products }: PizzaProps) {
  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center">
      <section className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-Cabin font-bold uppercase lg:text-6xl">
          Catering
        </h1>
        <p className="text-center text-sm font-semibold max-w-2xl lg:text-lg">
          We are proud to be locally owned and operated! When it comes to
          planning your next event, party, business meeting, or family
          celebration let Salvation Pizza take care of the catering details for
          you. Whether your event is small or large, our team can save you time
          and money. We can take care of as many or as few of the details as you
          wish with a la carte catering options including pick up, delivery, set
          up, servicing, and clean up.
        </p>
        <p className="text-center text-sm font-semibold max-w-2xl lg:text-lg">
          Let us bring our delicious and freshly made specialty pizzas,
          sandwiches, calzones, meatballs, salads, pasta dishes, and desserts to
          your location. If you’re interested in healthy alternatives, we offer
          a gluten-free pizza crust, healthy salads, and our pizzas can be
          customized to accommodate vegetarian and vegan diets.
        </p>
        <p className="text-center text-sm font-semibold max-w-2xl lg:text-lg">
          Call us 512-499-0105 or catering@salvationpizza.com for our full
          catering menu!
        </p>
        <Button />
      </section>
      <section className="flex flex-col gap-6 p-4 justify-center items-center">
        <header>
          <nav className="flex flex-col items-center gap-4">
            <h1 className="text-red-500 text-3xl font-bold">Menu</h1>
            <div className="flex gap-6">
              <button className="border-b-2 border-transparent focus:text-red-500 focus:border-red-500">
                Pizza
              </button>
              <button className="border-b-2 border-transparent focus:text-red-500 focus:border-red-500">
                Pizza
              </button>
              <button className="border-b-2 border-transparent focus:text-red-500 focus:border-red-500">
                Pizza
              </button>
              <button className="border-b-2 border-transparent focus:text-red-500 focus:border-red-500">
                Pizza
              </button>
              <button className="border-b-2 border-transparent focus:text-red-500 focus:border-red-500">
                Pizza
              </button>
            </div>
          </nav>
        </header>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
              />
            )
          })}
        </div>
        <Button />
      </section>
      <Form />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      price: new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
      imageUrl: product.images[0],
      defaultPriceid: price.id,
    }
  })
  return {
    props: {
      products,
    },
  }
}
