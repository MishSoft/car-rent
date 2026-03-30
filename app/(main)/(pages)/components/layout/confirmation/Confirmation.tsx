"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePaymentStore } from '@/store/usePaymentStore';
import { useBookingStore } from '@/store/useLocationStore';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Confirmation() {
  const { payment, setField } = usePaymentStore();
  const { pickup, dropoff } = useBookingStore();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Validation Logic
  const carId = searchParams.get('carId');
  const isBillingValid = !!(payment.userName && payment.userPhone && payment.userAddress && payment.userTown);
  const isLocationValid = !!(pickup.location && pickup.date && pickup.time && dropoff.location && dropoff.date && dropoff.time);
  
  const isCreditCardValid = payment.paymentMethod === 'CREDIT_CARD' 
    ? !!(payment.paymentCardNumber && payment.paymentCardDate && payment.paymentCardHolder && payment.paymentCardCvv)
    : true;
    
  const isPaymentValid = !!payment.paymentMethod && isCreditCardValid;
  const isConfirmValid = payment.agreeMarketing && payment.agreeTerms;

  // The button should only be active if everything is checked and valid
  const isValid = carId && isBillingValid && isLocationValid && isPaymentValid && isConfirmValid;

  const handleRentNow = async () => {
    if (!isValid || loading) return;
    setLoading(true);

    try {
      const payload = {
        carId,
        billing: {
          name: payment.userName,
          phone: payment.userPhone,
          address: payment.userAddress,
          town: payment.userTown,
        },
        location: {
          pickup: { location: pickup.location, date: pickup.date, time: pickup.time },
          dropoff: { location: dropoff.location, date: dropoff.date, time: dropoff.time },
        },
        paymentMethod: payment.paymentMethod,
      };

      const res = await fetch('/api/rentals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create rental');
      
      alert("Rental successfully confirmed!");
      router.push('/');
    } catch (err: any) {
      alert(err.message || 'An error occurred during checkout');
    } finally {
      setLoading(false);
    }
  };

  return (
    <fieldset className='flex flex-col gap-10'>
      <div className='flex items-end justify-between'>
        <legend className='flex flex-col gap-1 font-semibold text-[16px]'>
          Confirmation
          <small className='font-normal text-[14px] text-gray-400'>We are getting to the end. Just few clicks and your rental is ready!</small>
        </legend>
        <span className='text-[14px] font-normal text-gray-400'>Step 4 of 4</span>
      </div>

      <div className='bg-[#F6F7F9] flex flex-col gap-[24px] p-8 rounded-xl'>
        <div className='flex items-center justify-between px-[32px] py-[16px] bg-white rounded-xl gap-2 my-2'>
          <label className='flex items-center gap-2 cursor-pointer w-full'>
            <Input 
              type='checkbox' 
              className='w-5 h-5 cursor-pointer' 
              checked={payment.agreeMarketing}
              onChange={(e) => setField('agreeMarketing', e.target.checked)} 
            />
            I agree with sending an Marketing and newsletter emails. No spam, promissed!
          </label>
        </div>

        <div className='flex items-center justify-between px-[32px] py-[16px] bg-white rounded-xl gap-2 my-2'>
          <label className='flex items-center gap-2 cursor-pointer w-full'>
            <Input 
              type='checkbox' 
              className='w-5 h-5 cursor-pointer' 
              checked={payment.agreeTerms}
              onChange={(e) => setField('agreeTerms', e.target.checked)} 
            />
            I agree with our terms and conditions and privacy policy.
          </label>
        </div>
      </div>

      {!isValid && (
        <div className="text-sm text-red-500 mb-2">
          <strong>Please complete the following: </strong>
          {!carId && "Select a car from the details page. "}
          {!isBillingValid && "Fill all billing information. "}
          {!isLocationValid && "Select pickup and dropoff dates/locations. "}
          {!isPaymentValid && "Complete payment method details. "}
          {!isConfirmValid && "Check both agreement boxes. "}
        </div>
      )}

      <Button 
        onClick={(e) => { e.preventDefault(); handleRentNow(); }}
        disabled={!isValid || loading}
        className={`cursor-pointer w-fit text-white px-[34px] py-[25px] rounded-xl transition-colors ${isValid ? 'bg-[#3563E9] hover:bg-blue-700' : 'bg-gray-400 pointer-events-none'}`}>
        {loading ? 'Processing...' : 'Rent Now'}
      </Button>

      <div className='flex items-start flex-col gap-2'>
        <img src="images/security-safety.svg" alt="Security" />
        <h3 className='font-semibold text-[16px]'>All your data are safe</h3>
        <p className='text-[14px] text-gray-400'>We are using the most advanced security to provide you the best experience ever.</p>
      </div>
    </fieldset>
  )
}
