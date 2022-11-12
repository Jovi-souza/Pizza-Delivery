import { Button } from '../Button/order'
import { Card } from './component/card'

export function Pizza() {
  return (
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
      <Button />
    </section>
  )
}
