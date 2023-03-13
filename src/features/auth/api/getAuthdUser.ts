import wretch from 'wretch'
import { PROXY_URL } from '~/config'

type GetAuthdUser = {
  access_token: string 
}

type GetAuthdUserResponse = {
  success: true,
  data: {
    username: string,
    email: string,
    created_at: string
  }
}

export function getAuthdUser({ access_token }: GetAuthdUser) {
  return wretch(`${PROXY_URL}/users/me`)
    .headers({ Authorization: `Bearer ${access_token}` })
    .get()
    .json<GetAuthdUserResponse>()
}
