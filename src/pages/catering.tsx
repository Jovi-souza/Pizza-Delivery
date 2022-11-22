import { Button } from '../Components/Button/order'
import { Form } from '../Components/Form/contact'

export default function Catering() {
  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center">
      <section className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-Cabin font-bold uppercase lg:text-6xl">
          Catering
        </h1>
        <p className="text-center text-sm font-semibold max-w-2xl lg:text-lg">
          We are proud to be locally owned and operated! When it comes to
          planning your next event, party, business meeting, or family
          celebration let Salvation Pizza take care of the catering details for
          you. Whether your event is small or large, our team can save you time
          and money. We can take care of as many or as few of the details as you
          wish with a la carte catering options including pick up, delivery, set
          up, servicing, and clean up.
        </p>
        <p className="text-center text-sm font-semibold max-w-2xl lg:text-lg">
          Let us bring our delicious and freshly made specialty pizzas,
          sandwiches, calzones, meatballs, salads, pasta dishes, and desserts to
          your location. If you’re interested in healthy alternatives, we offer
          a gluten-free pizza crust, healthy salads, and our pizzas can be
          customized to accommodate vegetarian and vegan diets.
        </p>
        <p className="text-center text-sm font-semibold max-w-2xl lg:text-lg">
          Call us 512-499-0105 or catering@salvationpizza.com for our full
          catering menu!
        </p>
        <Button />
      </section>
      <Form />
    </div>
  )
}
