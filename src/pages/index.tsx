import Image from 'next/image'
import Location from '../assets/Location.png'
import { Calendar, MapPin } from 'phosphor-react'
import { Card } from '../Components/pizza'

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <section className="relative w-46">
          <Image src={Location} alt="" className="h-80 w-max object-cover" />
          <button className="flex items-center gap-10 absolute left-0 bottom-4 bg-red-600 p-2 rounded-r-full ">
            <MapPin weight="fill" size={32} color="white" />
            <span className="w-32 text-xs text-left text-white font-bold">
              11501 Rock Rose Ave #146
            </span>
          </button>
        </section>
        <section className="flex flex-col justify-center items-center gap-4 p-4">
          <span className="text-lg text-red-600">View on the map</span>
          <h1 className="text-5xl text-center font-Cabin font-bold">
            11501 Rock <br /> Rose <br /> Ave #146
          </h1>
          <p className="text-center font-bold text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown
          </p>
          <button className="flex flex-col items-center bg-red-600 text-white rounded-2xl px-6 py-4">
            <strong className="text-base">ORDER ONLINE</strong>
            <span className="text-xs font-light">Delivery or Pickup</span>
          </button>
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
            <a href="" className="block text-red-600 underline text-lg my-6">
              Read More
            </a>
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
            <a href="" className="block text-red-600 underline text-lg my-6">
              Read More
            </a>
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <button className="flex flex-col items-center justify-center w-max m-auto px-6 py-4 rounded-xl text-white font-bold bg-red-500">
            ORDER ONLINE
            <span className="font-extralight">Delivery or Pickup</span>
          </button>
        </section>
        <section className="p-4">
          <form className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold">
              <span className="text-red-500">Contact</span> Us
            </h1>
            <input
              type="text"
              placeholder="First name"
              required
              className="w-full px-6 py-4 outline-red-500 rounded-full border border-red-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full px-6 py-4 outline-red-500 rounded-full border border-red-500"
            />
            <input
              type="text"
              placeholder="E-mail"
              required
              className="w-full px-6 py-4 outline-red-500 rounded-full border border-red-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-6 py-4 outline-red-500 rounded-full border border-red-500"
            />
            <input
              type="text"
              placeholder="Message"
              required
              className="w-full px-6 py-4 pb-28 outline-red-500 rounded-2xl border border-red-500"
            />
            <button className="flex flex-col items-center font-bold text-white px-12 py-2 rounded-3xl bg-red-500 ">
              Submit
              <span className="font-light">Your message</span>
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}
