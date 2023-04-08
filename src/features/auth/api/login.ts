import wretch from 'wretch'
import { match } from 'ts-pattern'
import { API_URL } from '~/config'

type LoginWithGithub = {
  code: string
}

type LoginWithGithubResponse = {
  success: true
  data: {
    access_token: string
  }
}

export function loginWithGithub({ code }: LoginWithGithub) {
  return wretch(`${API_URL}/auth/login?provider=github`)
    .headers({ accept: 'application/json' })
    .post({ code })
    .json<LoginWithGithubResponse>()
}

type Login = {
  code: string
  provider: 'github'
}

export function login({ code, provider }: Login) {
  return match(provider)
    .with('github', () => loginWithGithub({ code }))
    .exhaustive()
}
