import * as Select from '@radix-ui/react-select'
import * as Tabs from '@radix-ui/react-tabs'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { CaretDown } from 'phosphor-react'

// import { useState } from 'react'

// interface locationProps {
//   name: string
// }

export default function Registration() {
  // const [location, setLocation] = useState<locationProps[]>([])

  return (
    <form className="p-4">
      <div className="flex flex-col text-sm">
        <h1 className="text-3xl font-semibold border-b pb-4">
          Order registration
        </h1>
        <div className="flex flex-col gap-4 justify-center">
          <label className="flex justify-between">
            Name
            <input
              type="text"
              placeholder="Your name"
              id="name"
              required
              className="border px-2 rounded-sm outline-red-500"
            />
          </label>
          <label className="flex justify-between">
            Telephone number
            <input
              type="text"
              placeholder="Your phone number"
              id="password"
              required
              className="border px-2 rounded-sm outline-red-500"
            />
          </label>
          <div className="flex justify-between relative">
            <span>Delivery adress</span>
            <Dialog.Root>
              <Dialog.Trigger>Select adress</Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="animate-openModal" />
                <Dialog.Content>
                  <Dialog.Close />
                  <Tabs.Root>
                    <div className="flex flex-col w-80 gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-500 p-4">
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
                        <form action="">
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
                                <h1 className="font-semibold">Your adress</h1>
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
                                <h1 className="font-semibold">Your adress</h1>
                                <p className="text-xs">Rua João mendes 506</p>
                              </label>
                            </div>
                            <div className="flex items-center gap-4">
                              <RadioGroup.Item
                                value="r3"
                                id="r3"
                                className="bg-white w-6 h-6 rounded-full"
                              >
                                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[' '] after:block after:w-2 after:h-2 after:rounded-full after:bg-red-500" />
                              </RadioGroup.Item>
                              <label htmlFor="r3">
                                <h1 className="font-semibold">Your adress</h1>
                                <p className="text-xs">Rua João mendes 506</p>
                              </label>
                            </div>
                            <div className="flex flex-col gap-4 border-t pt-4">
                              <div className="flex gap-4">
                                <RadioGroup.Item
                                  value="r4"
                                  id="r4"
                                  className="bg-white w-6 h-6 rounded-full"
                                >
                                  <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[' '] after:block after:w-2 after:h-2 after:rounded-full after:bg-red-500" />
                                </RadioGroup.Item>
                                <label htmlFor="r4">
                                  <h1 className="font-semibold">
                                    Your new adress
                                  </h1>
                                </label>
                              </div>
                              <div className="grid grid-cols-3 gap-2">
                                <input
                                  type="text"
                                  placeholder="Street"
                                  required
                                  className="p-2 rounded-sm col-span-2"
                                />
                                <input
                                  type="text"
                                  placeholder="Home"
                                  className="p-2 rounded-sm"
                                />
                                <input
                                  type="text"
                                  placeholder="Apartment number"
                                  required
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
                                  className="p-2 rounded-sm"
                                />
                                <input
                                  type="text"
                                  placeholder="Name Address"
                                  required
                                  className="p-2 rounded-sm col-span-full"
                                />
                                <button className="text-white font-semibold bg-red-500 col-span-2 p-4 rounded-full">
                                  Save address
                                </button>
                              </div>
                            </div>
                          </RadioGroup.Root>
                        </form>
                      </Tabs.Content>
                    </div>
                  </Tabs.Root>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg">Delivery time</span>
            <Select.Root>
              <Select.Trigger className="inline-flex items-center justify-center h-9 rounded-md px-4 py-2 gap-1 bg-gray-200">
                <Select.Value>Now</Select.Value>
                <Select.Icon>
                  <CaretDown />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content className="overflow-hidden bg-slate-300 rounded-md shadow-md">
                  <Select.Viewport>
                    <Select.Group>
                      <Select.Item
                        value="30 min"
                        className="flex items-center h-6 pr-9 pl-6 relative select-none"
                      >
                        <Select.ItemText>30 min</Select.ItemText>
                        <Select.ItemIndicator />
                      </Select.Item>
                      <Select.Item
                        value="1 hour"
                        className="flex items-center h-6 pr-9 pl-6 relative select-none"
                      >
                        <Select.ItemText>1 hour</Select.ItemText>
                        <Select.ItemIndicator />
                      </Select.Item>
                      <Select.Item
                        value="1:30 hour"
                        className="flex items-center h-6 pr-9 pl-6 relative select-none"
                      >
                        <Select.ItemText>1:30 hour</Select.ItemText>
                        <Select.ItemIndicator />
                      </Select.Item>
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </div>
        <div>
          <h1>Promo code</h1>
          <input type="text" />
          <button>aplly</button>
        </div>
      </div>
      <div></div>
      <div></div>
    </form>
  )
}
