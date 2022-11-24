import Link from 'next/link'
import { ArrowCircleLeft } from 'phosphor-react'
import { DeliveryTime } from './components/DeliveryTime'
import { FormRegistration } from './components/orderRegistration'

export default function Registration() {
  return (
    <form className="p-4">
      <div className="flex flex-col text-sm">
        <h1 className="text-3xl font-semibold border-b pb-4">
          Order registration
        </h1>
        <div className="flex flex-col gap-2 justify-center mt-4">
          <label className="text-xs flex flex-col">
            Name
            <input
              type="text"
              placeholder="Your name"
              id="name"
              required
              className="border px-2 py-1 rounded-md outline-red-500"
            />
          </label>
          <label className="text-xs flex flex-col">
            Telephone number
            <input
              type="text"
              placeholder="Your phone number"
              id="password"
              required
              className="border px-2 py-1 rounded-md outline-red-500"
            />
          </label>
          <div className="flex flex-col justify-between relative">
            <span>Delivery adress</span>
            <FormRegistration />
          </div>
          <div className="flex justify-between items-center">
            <span>Delivery time</span>
            <DeliveryTime />
          </div>
        </div>
        <div className="pt-4">
          <h1 className="text-lg font-semibold">Promo code</h1>
          <input
            type="text"
            placeholder="Your code"
            className="border px-2 py-1 rounded outline-red-500 "
          />
          <button className="bg-red-500 font-semibold px-4 py-1 ml-6 rounded text-white">
            Aplly
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <Link
          href="/order/basket"
          className="flex justify-center items-center border gap-4 px-4 rounded-full text-xs uppercase text-gray-500"
        >
          <ArrowCircleLeft size={16} weight="regular" />
          back
        </Link>
        <Link
          href="/order/success"
          className={`bg-red-500 px-4 py-2 rounded-full uppercase font-semibold text-white text-sm`}
        >
          place your order
        </Link>
      </div>
    </form>
  )
}
