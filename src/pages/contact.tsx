import { MapPin, Phone } from 'phosphor-react'
import { Form } from '../Components/Form/contact'

export default function contact() {
  return (
    <div className="flex flex-col items-center gap-8 mt-6 w-full">
      <h1 className="text-4xl font-Cabin font-bold uppercase lg:text-7xl">
        Contact Us
      </h1>
      <div className="flex flex-col gap-6 p-4 lg:grid lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="flex items-center gap-4 lg:text-xl">
            <MapPin size={20} weight="fill" className="text-red-500" /> 51
            RAINEY STREET, AUSTIN, TX
          </span>
          <span className="flex items-center gap-4 border-b-2 border-b-gray-200 lg:text-xl">
            <Phone weight="fill" size={20} className="text-red-500" />
            512.499.0105
          </span>
          <span className="flex items-center gap-4 lg:text-xl">
            <MapPin size={20} weight="fill" className="text-red-500" /> 11501
            ROCK ROSE AVE, AUSTIN, TX
          </span>
          <span className="flex items-center gap-4 border-b-2 border-b-gray-200 lg:text-xl">
            <Phone size={20} weight="fill" className="text-red-500" />
            512.832.6561
          </span>
          <span className="flex items-center gap-4 lg:text-xl">
            <MapPin size={20} weight="fill" className="text-red-500" /> ABIA
            Airport Austin
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d12096.528461342818!2d-73.99926427035392!3d40.715108033485016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d40.714071!2d-73.9995915!4m3!3m2!1d40.7191366!2d-73.98919959999999!5e0!3m2!1spt-BR!2sbr!4v1668349637119!5m2!1spt-BR!2sbr"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl w-full h-full"
          />
        </div>
      </div>
      <Form />
    </div>
  )
}
