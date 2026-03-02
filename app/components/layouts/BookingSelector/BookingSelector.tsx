import SelectField from '../../ui/selector/selectField'
import SwapButton from '../../ui/SwapButton/SwapButton'

import { container } from '../layout'
import { bookingSelectorContainer } from './bookingSelector.style'

export default function BookingSelector() {
  return (
    <section className={container(bookingSelectorContainer)}>
      <SelectField title={'Pick-Up'} type='pickup' />
      <SwapButton/>
      <SelectField title={'Drop-Off'} type='dropoff' />
    </section>
  )
}
