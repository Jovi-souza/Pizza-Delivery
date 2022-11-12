export function Form() {
  return (
    <section className="p-4">
      <form className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">
          <span className="text-red-500">Contact</span> Us
        </h1>
        <input
          type="text"
          placeholder="First name"
          required
          className="w-full px-6 py-4 outline-red-500 rounded-full border border-red-500"
        />
        <input
          type="text"
          placeholder="Last name"
          className="w-full px-6 py-4 outline-red-500 rounded-full border border-red-500"
        />
        <input
          type="text"
          placeholder="E-mail"
          required
          className="w-full px-6 py-4 outline-red-500 rounded-full border border-red-500"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full px-6 py-4 outline-red-500 rounded-full border border-red-500"
        />
        <input
          type="text"
          placeholder="Message"
          required
          className="w-full px-6 py-4 pb-28 outline-red-500 rounded-2xl border border-red-500"
        />
        <button className="flex flex-col items-center font-bold text-white px-12 py-2 rounded-3xl bg-red-500 ">
          Submit
          <span className="font-light">Your message</span>
        </button>
      </form>
    </section>
  )
}
