import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className, disabled, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        disabled
          ? 'bg-gray-2 border-gray-2'
          : 'bg-yellow hover:bg-black hover:text-yellow border-yellow',
        'inline-block px-8 py-2',
        'rounded-full border-2',
        className
      )}
    >
      <span className="font-bold">{children}</span>
    </button>
  )
}
