import clsx from 'clsx'
import { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'

type Props = {
  placeholder?: string
}

export default function SearchBar({ placeholder = 'Search...' }: Props) {
  return (
    <span
      className={clsx(
        'inline-block w-full h-full px-4 py-3',
        'bg-black border border-neutral-800 rounded-lg',
        'flex items-center',
        'focus-within:border-neutral-600',
        'transition-colors duration-150 ease-in'
      )}
    >
      <span className="mr-3">
        <IoIosSearch className="fill-neutral-600 text-2xl" />
      </span>
      <input
        placeholder={placeholder}
        className={`
          w-full h-full bg-inherit border-none rounded-lg 
          placeholder:text-neutral-600
          focus:outline-none
        `}
      />
    </span>
  )
}
