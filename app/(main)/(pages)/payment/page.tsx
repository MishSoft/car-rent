import Billing from '@/app/components/ui/billing-item/Billing'
import RentalInfo from '@/app/components/ui/rental-info/RentalInfo'

export default function PaymentPage() {
  return (
    <main className='w-full min-h-screen'>
        <section className='p-[32px]'>
          <form className='flex flex-col gap-10'>
            <div className='bg-white p-8 rounded-xl'>
            <Billing />
            </div>
          <div className='bg-white p-8 rounded-xl'>
              <RentalInfo />
            </div>
          </form>
        </section>
        <section></section>
    </main>
  )
}

// x7MCWZed
