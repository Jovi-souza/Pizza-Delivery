import * as Select from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'
import { useState } from 'react'

export function DeliveryTime() {
  const [deliveryTime, setDeliveryTime] = useState('Now')
  return (
    <Select.Root value={deliveryTime} onValueChange={setDeliveryTime}>
      <Select.Trigger className="inline-flex items-center justify-center h-9 rounded-md px-4 py-2 gap-1 bg-gray-200">
        <Select.Value aria-label={deliveryTime}>{deliveryTime}</Select.Value>
        <Select.Icon>
          <CaretDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="overflow-hidden bg-slate-200 rounded-md shadow-md">
          <Select.Viewport className="flex flex-col p-2 px-2">
            <Select.Group>
              <Select.Item
                value="Now"
                className="text-md font-semibold flex justify-center items-center h-6 px-2 relative select-none rounded-md cursor-pointer hover:bg-red-500 hover:text-white"
              >
                <Select.ItemText>Now</Select.ItemText>
              </Select.Item>
              <Select.Item
                value="30 min"
                className="text-md font-semibold flex justify-center items-center h-6 px-2 relative select-none rounded-md cursor-pointer hover:bg-red-500 hover:text-white"
              >
                <Select.ItemText>30 min</Select.ItemText>
              </Select.Item>
              <Select.Item
                value="60 min"
                className="text-md font-semibold flex justify-center items-center h-6 px-2 relative select-none rounded-md cursor-pointer hover:bg-red-500 hover:text-white"
              >
                <Select.ItemText>60 min</Select.ItemText>
              </Select.Item>
              <Select.Item
                value="1:30 hrs"
                className="text-md font-semibold flex justify-center items-center h-6 px-2 relative select-none rounded-md cursor-pointer hover:bg-red-500 hover:text-white"
              >
                <Select.ItemText>90 min</Select.ItemText>
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
