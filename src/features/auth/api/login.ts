import { PROXY_URL } from '~/config'

export async function login({ code }: { code: string }) {
  await fetch(`${PROXY_URL}/auth/login`, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ code }),
  })
}
