import Image from 'next/image'
import { Button } from '../Components/Button/order'
import { Form } from '../Components/Form/contact'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useKeenSlider } from 'keen-slider/react'

import Location1 from '../assets//Location.png'
import Location2 from '../assets//Location2.jpg'
import Location3 from '../assets//Location3.jpg'
import Location4 from '../assets//Location4.jpg'
import Location5 from '../assets//Location5.jpg'
import { Card } from '../Components/Menu/component/card'

export default function AboutUs() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 8,
    },
  })
  return (
    <div className="p-4">
      <section className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-Cabin font-bold uppercase">About Us</h1>
        <p className="text-center text-sm font-semibold">
          We are proud to be locally owned and operated! When it comes to
          planning your next event, party, business meeting, or family
          celebration let Salvation Pizza take care of the catering details for
          you. Whether your event is small or large, our team can save you time
          and money. We can take care of as many or as few of the details as you
          wish with a la carte catering options including pick up, delivery, set
          up, servicing, and clean up.
        </p>
        <p className="text-center text-sm font-semibold">
          Let us bring our delicious and freshly made specialty pizzas,
          sandwiches, calzones, meatballs, salads, pasta dishes, and desserts to
          your location. If you’re interested in healthy alternatives, we offer
          a gluten-free pizza crust, healthy salads, and our pizzas can be
          customized to accommodate vegetarian and vegan diets.
        </p>
        <p className="text-center text-sm font-semibold">
          Call us 512-499-0105 or catering@salvationpizza.com for our full
          catering menu!
        </p>
        <Button />
      </section>
      <section className="my-8">
        <div className="relative">
          <div ref={sliderRef} className="flex">
            <Image
              src={Location1}
              alt=""
              className="rounded-2xl keen-slider__slide"
            />
            <Image
              src={Location2}
              alt=""
              height={260}
              className="rounded-2xl keen-slider__slide"
            />
            <Image
              src={Location3}
              alt=""
              className="rounded-2xl keen-slider__slide"
              height={260}
            />
            <Image
              src={Location4}
              alt=""
              className="rounded-2xl keen-slider__slide"
              height={260}
            />
            <Image
              src={Location5}
              alt=""
              className="rounded-2xl keen-slider__slide"
              height={260}
            />
          </div>
          <CaretRight
            size={28}
            className="absolute right-2 top-1/2 cursor-pointer bg-white rounded-full"
          />
          <CaretLeft
            size={28}
            className="absolute top-1/2 left-2 cursor-pointer
            bg-white rounded-full"
          />
        </div>
      </section>
      ;
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
        {/* {products.map((product) => {
          return (
            <Card
              key={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.price}
            />
          )
        })} */}
        <Button />
      </section>
      <Form />
    </div>
  )
}
