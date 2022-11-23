import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { MapPin } from 'phosphor-react'

export function SelectRestaurant() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex items-center gap-10 absolute left-0 bottom-8 bg-red-600 p-2 rounded-r-full ">
        <MapPin weight="fill" size={32} color="white" />
        <span className="w-32 text-xs text-left text-white font-bold">
          11501 Rock Rose Ave #146
        </span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className="flex flex-col  items-center w-max gap-8 px-6 py-8 rounded-xl bg-black text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title>
            <h1>Choose a restaurant</h1>
          </Dialog.Title>
          <Dialog.Description className="flex flex-col gap-2 items-center">
            <form action="" className="flex flex-col ">
              <RadioGroup.Root className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <RadioGroup.Item
                    value="1"
                    className="bg-white w-6 h-6 rounded-full"
                  >
                    <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[' '] after:block after:w-3 after:h-3 after:rounded-lg after:bg-red-600" />
                  </RadioGroup.Item>
                  <label htmlFor="" className="">
                    testes
                  </label>
                </div>
                <div className="flex items-center gap-4">
                  <RadioGroup.Item
                    value="2"
                    className="bg-white w-6 h-6 rounded-full"
                  >
                    <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[' '] after:block after:w-3 after:h-3 after:rounded-lg after:bg-red-600" />
                  </RadioGroup.Item>
                  <label htmlFor="" className="">
                    testes
                  </label>
                </div>
                <div className="flex items-center gap-4">
                  <RadioGroup.Item
                    value="3"
                    className="bg-white w-6 h-6 rounded-full"
                  >
                    <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[' '] after:block after:w-3 after:h-3 after:rounded-lg after:bg-red-600" />
                  </RadioGroup.Item>
                  <label htmlFor="" className="">
                    testes
                  </label>
                </div>
              </RadioGroup.Root>
            </form>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
