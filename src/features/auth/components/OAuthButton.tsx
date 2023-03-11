import clsx from "clsx"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  provider: string 
  icon: React.ReactNode
}

export default function OAuthButton({ provider, icon, className, ...props }: Props) {
  return (
    <button {...props} className={clsx(className, 'group relative flex justify-center items-center px-12 py-4 rounded-lg mb-4 last:mb-0', props.onClick ? 'cursor-pointer' : 'pointer-events-none cursor-not-allowed')}>
      <span className='text-2xl pr-4'>{icon}</span>
      <span className='text-lg font-medium'>
        Continue with {provider}
      </span>
    </button>
  )
}
