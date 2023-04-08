import wretch from 'wretch'
import { PROXY_URL } from '~/config'

export async function login({ code }: { code: string }) {
  await wretch(`${PROXY_URL}/auth/login`)
    .headers({ accept: 'application/json' })
    .post({ code })
    .res()
}
