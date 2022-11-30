import * as Select from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'
import { useState } from 'react'

export default function DeliveryTime() {
  const [deliveryTime, setDeliveryTime] = useState('Now')
  return (
    <Select.Root value={deliveryTime} onValueChange={setDeliveryTime}>
      <div className="flex gap-4 items-center">
        <span>Delivery time:</span>
        <Select.Trigger className="flex gap-2 font-semibold items-center">
          <Select.Value aria-label={deliveryTime}>{deliveryTime}</Select.Value>
          <Select.Icon>
            <CaretDown size={14} color="red" weight="fill" />
          </Select.Icon>
        </Select.Trigger>
      </div>

      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded border">
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
