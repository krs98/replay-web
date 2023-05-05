import clsx from 'clsx'
import { UseFormRegisterReturn } from 'react-hook-form'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  registration?: UseFormRegisterReturn
}

export default function Input({ className, registration, ...props }: InputProps) {
  return (
    <input
      {...props}
      {...registration}
      className={clsx(
        'w-full h-full bg-transparent text-gray py-1.5',
        'placeholder:text-gray-2',
        'focus:outline-none',
        className
      )}
    />
  )
}
