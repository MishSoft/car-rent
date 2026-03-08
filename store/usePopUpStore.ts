import {create} from "zustand"


interface popUpProps {
  isActive: boolean;
  onClose: () => void;
  onOpen: () => void
}


export const usePopUpStore = create<popUpProps>((set) => ({
  isActive: false,
  onClose: () => set({isActive: false}),
  onOpen: () => set({isActive: true})
}))
