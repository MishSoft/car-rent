"use client";

import PickIcon from '@/app/components/ui/pick-icon/PickIcon'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { usePaymentStore } from '@/store/usePaymentStore'

export default function PaymentMethod() {
  const { payment, setField } = usePaymentStore();

  return (
    <fieldset className='flex flex-col gap-10'>
      <div className='flex items-end justify-between'>
        <legend className='flex flex-col gap-1 font-semibold text-[16px]'>
          Payment Method
          <small className='font-normal text-[14px] text-gray-400'>Please select your payment method</small>
        </legend>
        <span className='text-[14px] font-normal text-gray-400'>Step 3 of 4</span>
      </div>

      <div className={`bg-[#F6F7F9] p-8 rounded-xl border-2 ${payment.paymentMethod === 'CREDIT_CARD' ? 'border-blue-500' : 'border-transparent'}`}>
        <div className='mb-10 flex items-center justify-between'>
          <label className='flex items-center gap-2 cursor-pointer'>
            <Input 
              type='radio' 
              name="paymentMethod" 
              className='w-5 h-5' 
              checked={payment.paymentMethod === 'CREDIT_CARD'}
              onChange={() => setField('paymentMethod', 'CREDIT_CARD')}
            />
            <h2 className='font-semibold'>Credit Card</h2>
          </label>
          <img src="images/visa.svg" alt="Visa" />
        </div>
        <div className={`grid grid-cols-2 gap-[24px] ${payment.paymentMethod !== 'CREDIT_CARD' ? 'opacity-50 pointer-events-none' : ''}`}>
          <div className="flex flex-col gap-[16px]">
            <label className="font-semibold" htmlFor="cardNumber">Card Number</label>
            <Input className="px-[32px] py-6 bg-white rounded-xl" type="text" placeholder="Card Number" value={payment.paymentCardNumber} onChange={(e) => setField('paymentCardNumber', e.target.value)} />
          </div>
          <div className="flex flex-col gap-[16px]">
            <label className="font-semibold" htmlFor="cardDate">Expiration Date</label>
            <Input className="px-[32px] py-6 bg-white rounded-xl" type="text" placeholder="DD/MM/YY" value={payment.paymentCardDate} onChange={(e) => setField('paymentCardDate', e.target.value)} />
          </div>
          <div className="flex flex-col gap-[16px]">
            <label className="font-semibold" htmlFor="cardHolder">Card Holder</label>
            <Input className="px-[32px] py-6 bg-white rounded-xl" type="text" placeholder="Card Holder" value={payment.paymentCardHolder} onChange={(e) => setField('paymentCardHolder', e.target.value)} />
          </div>
          <div className="flex flex-col gap-[16px]">
            <label className="font-semibold" htmlFor="cardCvv">CVV</label>
            <Input className="px-[32px] py-6 bg-white rounded-xl" type="text" placeholder="CVV" value={payment.paymentCardCvv} onChange={(e) => setField('paymentCardCvv', e.target.value)} />
          </div>
        </div>
      </div>

      <div className='bg-[#F6F7F9] flex flex-col gap-[24px] p-8 rounded-xl'>
        <div className={`flex items-center justify-between px-[32px] py-[16px] bg-white rounded-xl gap-2 my-2 border-2 ${payment.paymentMethod === 'PAYPAL' ? 'border-blue-500' : 'border-transparent'}`}>
          <label className='flex items-center gap-2 w-full cursor-pointer'>
            <Input 
              type='radio' 
              name="paymentMethod" 
              className='w-5 h-5' 
              checked={payment.paymentMethod === 'PAYPAL'}
              onChange={() => setField('paymentMethod', 'PAYPAL')}
            />
            Pay Pal
          </label>
          <img src="images/PayPal.svg" alt="PayPal" />
        </div>

        <div className={`flex items-center justify-between px-[32px] py-[16px] bg-white rounded-xl gap-2 my-2 border-2 ${payment.paymentMethod === 'BITCOIN' ? 'border-blue-500' : 'border-transparent'}`}>
          <label className='flex items-center gap-2 w-full cursor-pointer'>
            <Input 
              type='radio' 
              name="paymentMethod" 
              className='w-5 h-5' 
              checked={payment.paymentMethod === 'BITCOIN'}
              onChange={() => setField('paymentMethod', 'BITCOIN')}
            />
            Bitcoin
          </label>
          <img src="images/Bitcoin.png" alt="Bitcoin" />
        </div>
      </div>
    </fieldset>
  )
}
