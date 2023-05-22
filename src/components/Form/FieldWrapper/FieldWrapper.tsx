import { FieldError } from 'react-hook-form'

type FieldWrapperProps = {
  label: string
  className?: string
  children: React.ReactNode
  error?: FieldError | undefined
  required?: boolean
}

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>

export default function FieldWrapper({
  label,
  className,
  children,
  error,
  required,
}: FieldWrapperProps) {
  return (
    <div className={className}>
      <label className="block text-gray mb-4 font-medium">
        {label} {required && <span className="text-red">*</span>}
        <div className="mt font-normal">{children}</div>
      </label>
      {error?.message && (
        <div role="alert" aria-label={error.message} className="font-medium text-red">
          {error.message}
        </div>
      )}
    </div>
  )
}
