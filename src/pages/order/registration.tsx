import * as Select from '@radix-ui/react-select'

import { CaretDown } from 'phosphor-react'
import { FormRegistration } from './components/orderRegistration'

export default function Registration() {
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
            <FormRegistration />
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
