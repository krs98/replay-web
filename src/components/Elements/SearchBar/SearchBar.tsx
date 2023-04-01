import clsx from 'clsx'
import { IoIosSearch } from 'react-icons/io'

type Props = {
  placeholder?: string
}

export default function SearchBar({ placeholder = 'Search...' }: Props) {
  return (
    <span
      className={clsx(
        'inline-block w-full h-full px-4 py-1.5',
        'bg-black border border-gray-2 rounded-full',
        'flex flex-row-reverse items-center',
        'focus-within:border-gray',
        'transition-colors duration-150 ease-in'
      )}
    >
      <input
        placeholder={placeholder}
        className={`
          w-full h-full bg-transparent border-none rounded-lg text-gray py-1.5
          placeholder:text-gray-2
          focus:outline-none
          peer
        `}
      />
      <span className="fill-gray-2 peer-focus:fill-gray mr-3">
        <IoIosSearch className="transition-colors duration-150 ease-in fill-inherit text-2xl" />
      </span>
    </span>
  )
}
