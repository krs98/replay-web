import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from '~/components/Head'
import routes from '~/lib/routes'
import { login } from '../api/login'

type QueryParams =
  | { provider?: 'github'; code?: string }
  | { provider?: never; code?: never }

export function getServerSideProps({ query = {} }: GetServerSidePropsContext) {
  const { provider, code } = query as QueryParams
  const shouldRedirectToLogin = !provider || !code

  return shouldRedirectToLogin
    ? { redirect: { destination: routes.login, permanent: false } }
    : { props: { provider, code } }
}

type Props = {
  provider: 'github'
  code: string
}

export default function Authenticating({ code, provider }: Props) {
  const router = useRouter()

  useEffect(() => {
    login({ code, provider })
      .then(() => router.push(routes.dashboard))
      .catch(console.warn)
  }, [])

  return (
    <>
      <Head title="Authenticating..." />

      <div className="w-screen h-screen flex justify-center items-center">
        <h3 className="font-black text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-700 py-2">
          Authenticating...
        </h3>
      </div>
    </>
  )
}
