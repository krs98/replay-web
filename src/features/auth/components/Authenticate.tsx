'use client'

import { redirect, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import routes from '~/lib/routes'
import { login } from '../api/login'
import { NODE_ENV } from '~/config'
import { env } from '~/lib/constants'

const loginJustOnce = (() => {
  let called = false

  return (arg: { code: string }) => {
    if (called)
      return new Promise((_, rej) => {
        console.warn(`
        The 'login' function got called more than once. If this is not 
        intended to happen, make sure you are running the correct environment.
      `)
      })

    called = true
    return login(arg)
  }
})()

export default function Authenticate() {
  const searchParams = useSearchParams()
  if (searchParams === null) {
    redirect(routes.login)
  }

  const code = searchParams.get('code')
  if (code === null) {
    redirect(routes.login)
  }

  const provider = searchParams.get('provider')
  if (provider !== 'github') {
    redirect(routes.login)
  }

  const router = useRouter()
  useEffect(() => {
    if (NODE_ENV === env.dev) {
      loginJustOnce({ code })
        .then(() => router.push(routes.dashboard))
        .catch(console.warn)
    }

    if (NODE_ENV !== env.dev) {
      login({ code })
        .then(() => router.push(routes.dashboard))
        .catch(console.warn)
    }
  }, [])

  return null
}
