import Link from 'next/link'

export function Button() {
  return (
    <Link
      href="/order/basket"
      className="flex justify-center items-center md:w-40"
    >
      <button className="flex flex-col items-center bg-red-600 text-white rounded-2xl px-6 py-4">
        <strong className="text-base md:text-sm">ORDER ONLINE</strong>
        <span className="text-xs font-light">Delivery or Pickup</span>
      </button>
    </Link>
  )
}
