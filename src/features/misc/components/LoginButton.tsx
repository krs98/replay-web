import Link from 'next/link'
import routes from '~/lib/routes'

export default function LoginButton() {
  return (
    <button
      className={`
        group
        border-2 border-yellow rounded-full bg-yellow
        hover:bg-transparent 
      `}
    >
      <Link
        className={`
          text-black group-hover:text-yellow font-bold tracking-wide
          inline-block px-8 py-2 
        `}
        href={routes.login}
      >
        Log in
      </Link>
    </button>
  )
}
