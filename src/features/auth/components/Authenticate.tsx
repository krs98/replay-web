'use client'

import { redirect, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import routes from '~/lib/routes'
import { login } from '../api/login'

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
    login({ code, provider })
      .then(() => router.push(routes.dashboard))
      .catch(console.warn)
  }, [])

  return null
}
