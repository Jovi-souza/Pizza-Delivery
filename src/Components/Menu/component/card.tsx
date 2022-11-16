import Image from 'next/image'

interface cardProps {
  name: string
  imageUrl: string
  price: string
}

export function Card({ name, price, imageUrl }: cardProps) {
  return (
    <div className="grid grid-cols-2 items-stretch w-80 max-h-40 gap-4 p-4 rounded-3xl shadow-lg overflow-hidden">
      <Image src={imageUrl} alt="" width={120} height={120} />
      <div className="flex flex-col">
        <h1 className="text-base font-semibold">{name}</h1>
        <span className="text-lg font-semibold mt-auto">{price}</span>
      </div>
    </div>
  )
}
