import wretch from 'wretch'

type LoginWithGithub = {
  code: string
}

export const loginWithGithub = ({ code }: LoginWithGithub) => {
  return wretch('http://127.0.0.1:4000/api/auth/login?provider=github')
    .post({ code })
    .json()
    .catch(console.log)
}
