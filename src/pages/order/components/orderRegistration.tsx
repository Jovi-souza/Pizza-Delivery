import * as Tabs from '@radix-ui/react-tabs'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { FormEvent, useState } from 'react'

interface locationProps {
  street: string
  home?: string
  apartment?: string
  entrance?: string
  floor?: string
  nameAddress: string
}

export function FormRegistration() {
  const [location, setLocation] = useState<locationProps[]>([])

  function handleAddNewAddress(e: FormEvent) {
    e.preventDefault()
    console.log(e.target)
    // setLocation()
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="text-red-500">Select adress</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="animate-openModal" />
        <Dialog.Content>
          <Tabs.Root>
            <div className="flex flex-col w-80 gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 p-4 shadow-2xl rounded-lg">
              <Tabs.List className="flex justify-around">
                <Tabs.Trigger
                  value="tab-1"
                  className="text-lg border-b border-transparent focus:text-red-500 focus:border-red-500"
                >
                  Delivery
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="tab-2"
                  className="text-lg border-b border-transparent focus:text-red-500 focus:border-red-500"
                >
                  Pickup
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="tab-1">
                <div>
                  <RadioGroup.Root className="flex flex-col gap-3">
                    {location.map((address) => {
                      return (
                        <div
                          key={address.nameAddress}
                          className="flex items-center gap-4"
                        >
                          <RadioGroup.Item
                            value="r1"
                            id="r1"
                            className="bg-white w-6 h-6 rounded-full "
                          >
                            <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[' '] after:block after:w-2 after:h-2 after:rounded-full after:bg-red-500" />
                          </RadioGroup.Item>
                          <label htmlFor="r1">
                            <h1 className="font-semibold">Your adress</h1>
                            <p className="text-xs">
                              {address.street} {address.home}
                              {address.apartment}
                            </p>
                          </label>
                        </div>
                      )
                    })}
                    <div className="flex flex-col gap-4 border-t pt-4">
                      <div className="flex gap-4">
                        <RadioGroup.Item
                          value="r4"
                          id="r4"
                          className="bg-white w-6 h-6 rounded-full border border-gray-300"
                        >
                          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[' '] after:block after:w-2 after:h-2 after:rounded-full after:bg-red-500" />
                        </RadioGroup.Item>
                        <label htmlFor="r4">
                          <h1 className="font-semibold">Your new adress</h1>
                        </label>
                      </div>
                      <form
                        onSubmit={handleAddNewAddress}
                        className="grid grid-cols-3 gap-2"
                      >
                        <input
                          type="text"
                          placeholder="Street"
                          required
                          name="street"
                          className="p-2 rounded-sm col-span-2"
                        />
                        <input
                          type="text"
                          placeholder="Home"
                          name="home"
                          className="p-2 rounded-sm"
                        />
                        <input
                          type="text"
                          placeholder="Apartment number"
                          required
                          name="Apartment"
                          className="p-2 rounded-sm"
                        />
                        <input
                          type="text"
                          placeholder="Entrance"
                          className="p-2 rounded-sm"
                        />
                        <input
                          type="text"
                          placeholder="Floor"
                          name="floor"
                          className="p-2 rounded-sm"
                        />
                        <input
                          type="text"
                          placeholder="Name Address"
                          required
                          name="address"
                          className="p-2 rounded-sm col-span-full"
                        />
                        <button
                          type="submit"
                          className="text-white font-semibold bg-red-500 col-span-2 p-4 rounded-full"
                        >
                          Save address
                        </button>
                      </form>
                    </div>
                  </RadioGroup.Root>
                </div>
              </Tabs.Content>
              <Tabs.Content value="tab-2">
                <RadioGroup.Root className="flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <RadioGroup.Item
                      value="r1"
                      id="r1"
                      className="bg-white w-6 h-6 rounded-full"
                    >
                      <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[' '] after:block after:w-2 after:h-2 after:rounded-full after:bg-red-500" />
                    </RadioGroup.Item>
                    <label htmlFor="r1">
                      <h1 className="font-semibold">Name adress</h1>
                      <p className="text-xs">Rua João mendes 506</p>
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <RadioGroup.Item
                      value="r2"
                      id="r2"
                      className="bg-white w-6 h-6 rounded-full"
                    >
                      <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[' '] after:block after:w-2 after:h-2 after:rounded-full after:bg-red-500" />
                    </RadioGroup.Item>
                    <label htmlFor="r2">
                      <h1 className="font-semibold">Name adress</h1>
                      <p className="text-xs">Rua João mendes 506</p>
                    </label>
                  </div>
                </RadioGroup.Root>
              </Tabs.Content>
            </div>
          </Tabs.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
