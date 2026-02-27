import  { forwardRef } from 'react'
import { ButtonProps } from './button.types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, title, type, ...props }, ref) => {
  return (
    <button type={type} ref={ref} className={className} {...props} >
      {title}
    </button>
  )
})


Button.displayName = "button"


export default Button
