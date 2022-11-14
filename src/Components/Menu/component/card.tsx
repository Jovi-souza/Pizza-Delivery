import Image from 'next/image'

interface cardProps {
  name: string
  imageUrl: string
  price: string
}

export function Card({ name, price, imageUrl }: cardProps) {
  return (
    <div className="grid grid-cols-2 items-stretch max-w-sm gap-4 p-4 rounded-3xl shadow-lg">
      <div className="w-full">
        <Image src={imageUrl} alt="" width={125} height={125} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">{name}</h1>
        <span className="font-semibold">{price}</span>
      </div>
    </div>
  )
}
