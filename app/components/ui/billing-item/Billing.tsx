"use client";

import { Input } from "@/components/ui/input";
import { usePaymentStore } from "@/store/usePaymentStore";
import {
  containerStyle,
  fieldsetStyle,
  headerStyle,
  legendStyle,
  subtitleStyle,
  stepStyle,
  gridStyle,
  fieldGroupStyle,
  labelStyle,
  inputStyle,
} from "./billing.style";
import BillingLoading from "./loading";

export default function Billing() {
  const { payment, setField } = usePaymentStore();

  return (
    // <div className={containerStyle}>
    //   <fieldset className={fieldsetStyle}>
    //     <div className={headerStyle}>
    //       <legend className={legendStyle}>
    //         Billing Info
    //         <small className={subtitleStyle}>Please enter your billing info</small>
    //       </legend>
    //       <span className={stepStyle}>Step 1 of 4</span>
    //     </div>
    //     <div className={gridStyle}>
    //       <div className={fieldGroupStyle}>
    //         <label className={labelStyle} htmlFor="name">Name</label>
    //         <Input className={inputStyle} type="text" placeholder="Your name" value={payment.userName} onChange={(e) => setField("userName", e.target.value)} />
    //       </div>
    //       <div className={fieldGroupStyle}>
    //         <label className={labelStyle} htmlFor="phone">Phone Number</label>
    //         <Input className={inputStyle} type="tel" placeholder="Phone number" value={payment.userPhone} onChange={(e) => setField("userPhone", e.target.value)} />
    //       </div>
    //       <div className={fieldGroupStyle}>
    //         <label className={labelStyle} htmlFor="address">Address</label>
    //         <Input className={inputStyle} type="text" placeholder="Address" value={payment.userAddress} onChange={(e) => setField("userAddress", e.target.value)} />
    //       </div>
    //       <div className={fieldGroupStyle}>
    //         <label className={labelStyle} htmlFor="town">Town / City</label>
    //         <Input className={inputStyle} type="text" placeholder="Town City" value={payment.userTown} onChange={(e) => setField("userTown", e.target.value)} />
    //       </div>
    //     </div>
    //   </fieldset>
    // </div>
    <BillingLoading />
  )
}
