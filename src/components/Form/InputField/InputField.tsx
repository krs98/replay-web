import { Input } from '~/components/Elements'
import FieldWrapper from '../FieldWrapper'
import { FieldWrapperPassThroughProps } from '../FieldWrapper/FieldWrapper'
import { UseFormRegisterReturn } from 'react-hook-form'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>
type InputFieldProps = FieldWrapperPassThroughProps &
  InputProps & {
    registration: UseFormRegisterReturn
  }

export default function InputField({
  registration,
  placeholder,
  ...props
}: InputFieldProps) {
  return (
    <FieldWrapper {...props}>
      <Input
        className="border-b border-gray-2"
        placeholder={placeholder}
        registration={registration}
      />
    </FieldWrapper>
  )
}
