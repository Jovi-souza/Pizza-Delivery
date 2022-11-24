import Link from 'next/link'
import { ArrowCircleLeft } from 'phosphor-react'

export default function Success() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <h1 className="text-2xl font-bold">Order is accepted</h1>
        <p className="text-center text-sm text-gray-500">
          Thank you very much for your order! Have a good time. Your order will
          be ready in 35 minutes
        </p>
        <button>
          <Link
            href=""
            className="flex justify-center items-center border gap-4 px-8 py-2 rounded-full text-xs uppercase text-gray-500"
          >
            <ArrowCircleLeft size={16} weight="regular" />
            Home page
          </Link>
        </button>
      </div>
    </>
  )
}
