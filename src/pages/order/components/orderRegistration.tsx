export function FormRegistration() {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 my-4">
        <input
          type="text"
          placeholder="Street"
          required
          className="col-span-2 px-2 py-1 border border-gray-300 rounded outline-gray-400"
        />
        <input
          type="text"
          placeholder="Home"
          className="px-2 py-1 border border-gray-300 rounded outline-gray-400"
        />
        <input
          type="text"
          placeholder="Apartment number"
          required
          className="px-2 py-1 border border-gray-300 rounded outline-gray-400"
        />
        <input
          type="text"
          placeholder="Entrance"
          className="px-2 py-1 border border-gray-300 rounded outline-gray-400"
        />
        <input
          type="text"
          placeholder="Floor"
          className="px-2 py-1 border border-gray-300 rounded outline-gray-400"
        />
        <input
          type="text"
          placeholder="Name address"
          required
          className="col-span-full px-2 py-1 border border-gray-300 rounded outline-gray-400"
        />
      </div>
    </>
  )
}
