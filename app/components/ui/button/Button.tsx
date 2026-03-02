import  { forwardRef } from 'react'
import { ButtonProps } from './button.types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <button ref={ref}  {...props} >
      {children}
    </button>
  )
})


Button.displayName = "button"


export default Button
