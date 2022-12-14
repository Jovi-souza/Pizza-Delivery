import Link from 'next/link'
import DeliveryTime from './components/DeliveryTime'
import FormRegistration from './components/orderRegistration'

export default function Registration() {
  return (
    <div>
      <form action="" className="flex flex-col gap-2 p-4 max-w-xl m-auto h-max">
        <label className="text-base flex flex-col">
          Name
          <input
            type="text"
            placeholder="Your name"
            id="name"
            required
            className="border px-2 py-1 rounded-md outline-gray-400"
          />
        </label>
        <label className="text-base flex flex-col">
          Phone number
          <input
            type="text"
            placeholder="Your phone number"
            id="password"
            className="border px-2 py-1 rounded-md outline-gray-400"
          />
        </label>
        <label className="text-base flex flex-col">
          Promo code
          <input
            type="text"
            placeholder="Your promo code"
            id="password"
            className="border px-2 py-1 rounded-md outline-gray-400"
          />
        </label>
        <FormRegistration />
        <div className="flex justify-between">
          <DeliveryTime />
          <input
            type="submit"
            className="ml-auto cursor-pointer border border-gray-500 text-gray-500 rounded py-1 px-4 hover:bg-red-500 hover:text-white font-semibold"
          />
        </div>
      </form>
      <div className="flex justify-between max-w-xl mx-auto mt-auto">
        <button className="flex justify-center items-center border gap-4 px-4 rounded-full text-xs uppercase text-gray-500">
          <Link href="/order/basket">back</Link>
        </button>
        <button
          className={`bg-red-500 px-4 py-2 rounded-full uppercase font-semibold text-white text-sm`}
        >
          <Link type="submit" href="/order/success">
            place your order
          </Link>
        </button>
      </div>
    </div>
  )
}
