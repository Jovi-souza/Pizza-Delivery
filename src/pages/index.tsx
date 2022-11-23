import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import Stripe from 'stripe'
import { stripe } from '../lib/stripe'

import { Calendar } from 'phosphor-react'
import Location from '../assets/Location.png'

import { Form } from '../Components/Form/contact'
import { Button } from '../Components/Button/order'
import { Card } from '../Components/Cards/Pizza'
import { SelectRestaurant } from '../Components/Modais/selectRestaurant'
import { GamesToday } from '../Components/Cards/GamesToday'

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

export default function Home({ products }: PizzaProps) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="md:grid md:grid-cols-2 md:p-4 lg:max-w-screen-xl">
        <section className="relative">
          <Image src={Location} alt="" />
          <SelectRestaurant />
        </section>
        <section className="flex flex-col justify-center items-center gap-4 p-4 md:-order-1 lg:justify-start lg:items-start lg:gap-20">
          <Link href="/contact" className="text-lg text-red-600 md:hidden">
            View on the map
          </Link>
          <h1 className="text-5xl text-center font-Cabin font-bold lg:text-7xl lg:text-left">
            11501 Rock Rose Ave 146
          </h1>
          <p className="text-center font-bold text-sm md:w-68 lg:text-xl lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown
          </p>
          <Button />
        </section>
      </div>
      <section>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl text-red-600">Upcoming Events</h1>
          <p className="flex gap-2 font-bold">
            <span className="flex gap-2 text-red-600">
              23.10.2022 <Calendar size={28} weight="fill" />
            </span>
            Selected date
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 m-auto gap-4 md:flex-row md:flex-wrap">
          <GamesToday />
          <GamesToday />
          <GamesToday />
          <GamesToday />
        </div>
      </section>
      <section className="flex flex-col gap-6 p-4">
        <h1 className="text-center text-xl font-bold sm:text-3xl">
          <span className="text-red-600">Daily</span> Especial
        </h1>
        <div className="flex flex-wrap gap-8 justify-center ">
          <div className="flex flex-col">
            <strong className="text-lg font-bolder">SUN</strong>
            <span className="text-sm">1/2 PRICE WINGS</span>
          </div>
          <div className="flex flex-col">
            <strong className="text-lg font-bolder">MON</strong>
            <span className="text-sm">1/2 PRICE WINGS</span>
          </div>
          <div className="flex flex-col">
            <strong className="text-lg font-bolder">TUES</strong>
            <span className="text-sm">1/2 PRICE WINGS</span>
          </div>
          <div className="flex flex-col">
            <strong className="text-lg font-bolder">WED</strong>
            <span className="text-sm">1/2 PRICE WINGS</span>
          </div>
          <div className="flex flex-col">
            <strong className="text-lg font-bolder">THURS</strong>
            <span className="text-sm">1/2 PRICE WINGS</span>
          </div>
          <div className="flex flex-col">
            <strong className="text-lg font-bolder text-red-500">FRI</strong>
            <span className="text-sm">1/2 PRICE WINGS</span>
          </div>
          <div className="flex flex-col">
            <strong className="text-lg font-bolder text-red-500">SAT</strong>
            <span className="text-sm">1/2 PRICE WINGS</span>
          </div>
        </div>
      </section>
      <section className="p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 sm:text-3xl">
            <span className="text-red-500">About</span> Us
          </h1>
          <p className="font-semibold max-w-2xl m-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry
          </p>
          <Link
            href="/about_us"
            className="block text-red-600 underline text-lg my-6 sm:text-xl"
          >
            Read More
          </Link>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 sm:text-3xl">Catering</h1>
          <p className="font-semibold max-w-2xl m-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry
          </p>
          <Link
            href="/catering"
            className="block text-red-600 underline text-lg my-6 sm:text-xl"
          >
            Read More
          </Link>
        </div>
      </section>
      <section className="flex flex-col gap-6 p-4 justify-center items-center">
        <header>
          <div className="flex flex-col items-center gap-4">
            <Link href="/" className="text-red-500 text-3xl font-bold">
              View full menu
            </Link>
          </div>
        </header>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                description={product.description}
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
      description: product.description,
      defaultPriceid: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // atualiza a cada duas horas
  }
}
