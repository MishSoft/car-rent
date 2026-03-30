import Billing from '@/app/components/ui/billing-item/Billing'
import RentalInfo from '@/app/components/ui/rental-info/RentalInfo'
import Confirmation from '../components/layout/confirmation/Confirmation'
import PaymentMethod from '../components/layout/payment-method/PaymentMethod'
import PaymentItem from '../components/layout/payment-item/PaymentItem'



export default function PaymentPage() {
  return (
    <main className='w-full min-h-screen flex flex-col lg:flex-row'>
        <section className='p-[32px] flex-1'>
          <form className='flex flex-col gap-10'>
            <div className='bg-white p-8 rounded-xl'>
            <Billing />
            </div>
          <div className='bg-white p-8 rounded-xl'>
              <RentalInfo />
            </div>
          <div className='bg-white p-8 rounded-xl'>
            <PaymentMethod />
          </div>
          <div className='bg-white p-8 rounded-xl'>
            <Confirmation />
          </div>
          </form>
        </section>
      <section className='p-[32px] lg:w-[450px] xl:w-[500px] shrink-0 sticky top-8 self-start w-full'>
        <PaymentItem />
      </section>
    </main>
  )
}

