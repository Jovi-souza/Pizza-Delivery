import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import * as Dialog from '@radix-ui/react-dialog'

import Stripe from 'stripe'
import { stripe } from '../lib/stripe'

import { Calendar, Check, MapPin } from 'phosphor-react'
import Logo from '../assets/Logo.svg'
import Location from '../assets/Location.png'

import { Form } from '../Components/Form/contact'
import { Button } from '../Components/Button/order'
import { Card } from '../Components/Menu/component/card'

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
    <div>
      <div className="flex flex-col gap-4">
        <section className="relative w-46">
          <Image src={Location} alt="" className="h-80 w-max object-cover" />
          <Dialog.Root>
            <Dialog.Trigger className="flex items-center gap-10 absolute left-0 bottom-8 bg-red-600 p-2 rounded-r-full ">
              <MapPin weight="fill" size={32} color="white" />
              <span className="w-32 text-xs text-left text-white font-bold">
                11501 Rock Rose Ave #146
              </span>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Content className="flex flex-col  items-center w-max gap-8 px-6 py-8 rounded-xl bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Dialog.Title>
                  <Image src={Logo} width={150} alt="" />
                </Dialog.Title>
                <Dialog.Description className="flex flex-col gap-2 items-center">
                  <h1 className="text-xl font-semibold">Sample text</h1>
                  <span>1. Lorem Ipsum is simply dummy text</span>
                  <span>2. Lorem Ipsum is simply dummy text</span>
                  <span>3. Lorem Ipsum is simply dummy text</span>
                  <div className="flex flex-col gap-2">
                    <button className="grid grid-cols-[100px_minmax(10px,_1fr)_20px] items-center p-2 gap-4 border-2 font-semibold border-red-500 rounded-full text-red-600 hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white">
                      <span className="text-5xl">1</span>
                      <div className="flex flex-col">
                        11501 Rainey St. <span>146</span>
                      </div>
                    </button>
                    <button className="grid grid-cols-[100px_minmax(10px,_1fr)_20px] items-center p-2 gap-4 border-2 font-semibold border-red-500 rounded-full text-red-600 hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white">
                      <span className="text-5xl">1</span>
                      <div className="flex flex-col">
                        11501 Rainey St. <span>146</span>
                      </div>
                    </button>
                    <button className="grid grid-cols-[100px_minmax(10px,_1fr)_20px] items-center p-2 gap-4 border-2 font-semibold border-red-500 rounded-full text-red-600 hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white">
                      <p className="text-5xl">1</p>
                      <div className="flex flex-col">
                        11501 Rainey St. <span>146</span>
                      </div>
                    </button>
                  </div>
                  <Dialog.Close className="text-white bg-red-500 p-2 rounded-full">
                    <Check size={24} weight="bold" />
                  </Dialog.Close>
                </Dialog.Description>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </section>
        <section className="flex flex-col justify-center items-center gap-4 p-4">
          <Link href="/contact" className="text-lg text-red-600">
            View on the map
          </Link>
          <h1 className="text-5xl text-center font-Cabin font-bold">
            11501 Rock <br /> Rose <br /> Ave #146
          </h1>
          <p className="text-center font-bold text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown
          </p>
          <Button />
        </section>
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
          <div className="flex flex-col p-4 gap-12">
            <div className="rounded-xl p-4 text-center flex flex-col gap-2 shadow-xl shadow-gray-700/25">
              <h1 className="text-center text-lg font-semibold">
                Brazil - Espania | Football
              </h1>
              <p className="text-xs font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley
              </p>
              <span className="font-semibold">04:00 pm - 10 nov</span>
            </div>
            <div className="rounded-xl p-4 text-center flex flex-col gap-2 shadow-xl shadow-gray-700/25">
              <h1 className="text-center text-lg font-semibold">
                Brazil - Espania | Football
              </h1>
              <p className="text-xs font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley
              </p>
              <span className="font-semibold">04:00 pm - 10 nov</span>
            </div>
            <div className="rounded-xl p-4 text-center flex flex-col gap-2 shadow-xl shadow-gray-700/25">
              <h1 className="text-center text-lg font-semibold">
                Brazil - Espania | Football
              </h1>
              <p className="text-xs font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley
              </p>
              <span className="font-semibold">04:00 pm - 10 nov</span>
            </div>
            <div className="rounded-xl p-4 text-center flex flex-col gap-2 shadow-xl shadow-gray-700/25">
              <h1 className="text-center text-lg font-semibold">
                Brazil - Espania | Football
              </h1>
              <p className="text-xs font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley
              </p>
              <span className="font-semibold">04:00 pm - 10 nov</span>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-6 p-4">
          <h1 className="text-center text-xl font-bold">
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
            <h1 className="text-2xl font-bold mb-4">
              <span className="text-red-500">About</span> Us
            </h1>
            <p className="font-semibold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry
            </p>
            <Link
              href="/about_us"
              className="block text-red-600 underline text-lg my-6"
            >
              Read More
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Catering</h1>
            <p className="font-semibold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry
            </p>
            <Link
              href="/catering"
              className="block text-red-600 underline text-lg my-6"
            >
              Read More
            </Link>
          </div>
        </section>
        <section className="flex flex-col gap-6 p-4">
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
          <Button />
        </section>
        <Form />
      </div>
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
    revalidate: 60 * 60 * 2, // atualiza a cada duas horas
  }
}
