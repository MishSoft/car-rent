import SelectField from '../../ui/selector/selectField'
import SwapButton from '../../ui/selector/swapButton'
import { container } from '../layout'

export default function BookingSelector() {
  return (
    <section className={`${container} w-full gap-11 flex items-center justify-between`}>
      <SelectField/>
      <SwapButton/>
      <SelectField/>
    </section>
  )
}
