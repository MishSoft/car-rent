import { create } from "zustand";

interface paymentProps {
  userName: string;
  userPhone: string;
  userAddress: string;
  userTown: string;
  rentalLocation: string;
  rentalDate: Date | undefined;
  rentalTime: string;
  paymentMethod: "CREDIT_CARD" | "PAYPAL" | "BITCOIN" | "";
  paymentCardNumber: string;
  paymentCardDate: string;
  paymentCardHolder: string;
  paymentCardCvv: string;
  agreeMarketing: boolean;
  agreeTerms: boolean;
}

interface paymentStore {
  payment: paymentProps;
  setField: (type: keyof paymentProps, value: string | boolean | Date | undefined) => void;
}

export const usePaymentStore = create<paymentStore>((set) => ({
  payment: {
    userName: "",
    userPhone: "",
    userAddress: "",
    userTown: "",
    rentalLocation: "",
    rentalDate: undefined,
    rentalTime: "",
    paymentMethod: "",
    paymentCardNumber: "",
    paymentCardDate: "",
    paymentCardHolder: "",
    paymentCardCvv: "",
    agreeMarketing: false,
    agreeTerms: false,
  },
  setField: (type, value) =>
    set((state) => ({
      payment: { ...state.payment, [type]: value },
    })),
}));
