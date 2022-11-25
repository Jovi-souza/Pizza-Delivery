import Image from 'next/image'
import { Button } from '../Components/Button/order'
import { Form } from '../Components/Form/contact'
import { useKeenSlider } from 'keen-slider/react'

import Location1 from '../assets//Location.png'
import Location2 from '../assets//Location2.jpg'
import Location3 from '../assets//Location3.jpg'
import Location4 from '../assets//Location4.jpg'
import Location5 from '../assets//Location5.jpg'
import { Header } from '../Components/Header'

export default function AboutUs() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 14,
    },
  })
  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 p-4 justify-center items-center">
        <div className="lg:grid lg:grid-cols-2 overflow-hidden">
          <section className="flex flex-col items-center gap-4 lg:justify-start lg:items-start">
            <h1 className="text-4xl font-Cabin font-bold uppercase lg:text-6xl lg:text-left">
              About Us
            </h1>
            <p className="text-center text-sm max-w-2xl font-semibold md:w-68 lg:text-base lg:text-left">
              We are proud to be locally owned and operated! When it comes to
              planning your next event, party, business meeting, or family
              celebration let Salvation Pizza take care of the catering details
              for you. Whether your event is small or large, our team can save
              you time and money. We can take care of as many or as few of the
              details as you wish with a la carte catering options including
              pick up, delivery, set up, servicing, and clean up.
            </p>
            <p className="text-center text-sm max-w-2xl font-semibold md:w-68 lg:text-base lg:text-left">
              Let us bring our delicious and freshly made specialty pizzas,
              sandwiches, calzones, meatballs, salads, pasta dishes, and
              desserts to your location. If you’re interested in healthy
              alternatives, we offer a gluten-free pizza crust, healthy salads,
              and our pizzas can be customized to accommodate vegetarian and
              vegan diets.
            </p>
            <p className="text-center text-sm max-w-2xl font-semibold md:w-68 lg:text-base lg:text-left">
              Call us 512-499-0105 or catering@salvationpizza.com for our full
              catering menu!
            </p>
            <Button />
          </section>
          <section className="my-8">
            <div className="overflow-hidden">
              <div
                ref={sliderRef}
                className="flex w-screen max-w-xs p-2 lg:max-w-lg"
              >
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
                  className="rounded-2xl keen-slider__slide "
                  height={260}
                />
                <Image
                  src={Location5}
                  alt=""
                  className="rounded-2xl keen-slider__slide"
                  height={260}
                />
              </div>
            </div>
          </section>
        </div>
        <Form />
      </div>
    </>
  )
}
