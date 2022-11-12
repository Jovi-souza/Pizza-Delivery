export function Button() {
  return (
    <div className="flex justify-center items-center">
      <button className="flex flex-col items-center bg-red-600 text-white rounded-2xl px-6 py-4">
        <strong className="text-base">ORDER ONLINE</strong>
        <span className="text-xs font-light">Delivery or Pickup</span>
      </button>
    </div>
  )
}
