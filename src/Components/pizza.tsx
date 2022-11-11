import Image from 'next/image'
import Pizza from '../assets/Pizza.svg'
export function Card() {
  return (
    <div className="flex items-center gap-4 p-4 rounded-3xl shadow-lg">
      <div className="w-52">
        <Image src={Pizza} alt="" className="w-max" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Pizza name</h1>
        <p className="text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <span className="font-semibold">$ 24.99</span>
      </div>
    </div>
  )
}
