import SelectField from '../../ui/selector/selectField'
import SwapButton from '../../ui/selector/swapButton'
import { container } from '../layout'

export default function BookingSelector() {
  return (
    <section className={container("w-full relative gap-8 xl:gap-11 flex-col xl:flex-row  flex items-center justify-between")}>
      <SelectField/>
      <SwapButton/>
      <SelectField/>
    </section>
  )
}
