import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import Stripe from 'stripe'
import { stripe } from '../lib/stripe'

import { Calendar, MapPin } from 'phosphor-react'
import Location from '../assets/Location.png'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { Form } from '../Components/Form/contact'
import { Button } from '../Components/Button/order'
import { Card } from '../Components/Card'

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
          <Dialog.Root>
            <Dialog.Trigger className="flex items-center gap-10 absolute left-0 bottom-8 bg-red-600 p-2 rounded-r-full ">
              <MapPin weight="fill" size={32} color="white" />
              <span className="w-32 text-xs text-left text-white font-bold">
                11501 Rock Rose Ave #146
              </span>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Content className="flex flex-col  items-center w-max gap-8 px-6 py-8 rounded-xl bg-black text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Dialog.Title>
                  <h1>Choose a restaurant</h1>
                </Dialog.Title>
                <Dialog.Description className="flex flex-col gap-2 items-center">
                  <form action="" className="flex flex-col ">
                    <RadioGroup.Root className="flex flex-col gap-2">
                      <div className="flex items-center gap-4">
                        <RadioGroup.Item
                          value="1"
                          className="bg-white w-6 h-6 rounded-full"
                        >
                          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[' '] after:block after:w-3 after:h-3 after:rounded-lg after:bg-red-600" />
                        </RadioGroup.Item>
                        <label htmlFor="" className="">
                          testes
                        </label>
                      </div>
                      <div className="flex items-center gap-4">
                        <RadioGroup.Item
                          value="2"
                          className="bg-white w-6 h-6 rounded-full"
                        >
                          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[' '] after:block after:w-3 after:h-3 after:rounded-lg after:bg-red-600" />
                        </RadioGroup.Item>
                        <label htmlFor="" className="">
                          testes
                        </label>
                      </div>
                      <div className="flex items-center gap-4">
                        <RadioGroup.Item
                          value="3"
                          className="bg-white w-6 h-6 rounded-full"
                        >
                          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[' '] after:block after:w-3 after:h-3 after:rounded-lg after:bg-red-600" />
                        </RadioGroup.Item>
                        <label htmlFor="" className="">
                          testes
                        </label>
                      </div>
                    </RadioGroup.Root>
                  </form>
                  {/* <Dialog.Close className="text-white bg-red-500 p-2 rounded-full">
                    <Check size={24} weight="bold" />
                  </Dialog.Close> */}
                </Dialog.Description>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
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
          <div className="flex items-center flex-col gap-2 rounded-xl max-w-xs p-4 text-center shadow-xl shadow-gray-700/25">
            <h1 className="text-center text-lg font-semibold">
              Brazil - Espania | Football
            </h1>
            <p className="text-xs font-light w-48">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <span className="font-semibold">04:00 pm - 10 nov</span>
          </div>
          <div className="flex items-center flex-col gap-2 rounded-xl max-w-xs p-4 text-center shadow-xl shadow-gray-700/25">
            <h1 className="text-center text-lg font-semibold">
              Brazil - Espania | Football
            </h1>
            <p className="text-xs font-light w-48">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <span className="font-semibold">04:00 pm - 10 nov</span>
          </div>
          <div className="flex items-center flex-col gap-2 rounded-xl max-w-xs p-4 text-center shadow-xl shadow-gray-700/25">
            <h1 className="text-center text-lg font-semibold">
              Brazil - Espania | Football
            </h1>
            <p className="text-xs font-light w-48">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <span className="font-semibold">04:00 pm - 10 nov</span>
          </div>
          <div className="flex items-center flex-col gap-2 rounded-xl max-w-xs p-4 text-center shadow-xl shadow-gray-700/25">
            <h1 className="text-center text-lg font-semibold">
              Brazil - Espania | Football
            </h1>
            <p className="text-xs font-light w-48">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <span className="font-semibold">04:00 pm - 10 nov</span>
          </div>
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
          <nav className="flex flex-col items-center gap-4">
            <h1 className="text-red-500 text-3xl font-bold">Menu</h1>
            <div className="flex gap-6 sm:gap-10">
              <button className="border-b-2 border-transparent focus:text-red-500 focus:border-red-500 sm:text-xl">
                Pizza
              </button>
              <button className="border-b-2 border-transparent focus:text-red-500 focus:border-red-500 sm:text-xl">
                Pizza
              </button>
              <button className="border-b-2 border-transparent focus:text-red-500 focus:border-red-500 sm:text-xl">
                Pizza
              </button>
              <button className="border-b-2 border-transparent focus:text-red-500 focus:border-red-500 sm:text-xl">
                Pizza
              </button>
              <button className="border-b-2 border-transparent focus:text-red-500 focus:border-red-500 sm:text-xl">
                Pizza
              </button>
              <button className="border-b-2 border-transparent focus:text-red-500 focus:border-red-500 sm:text-xl">
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
