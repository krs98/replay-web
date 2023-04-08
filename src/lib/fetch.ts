import { cookies } from 'next/headers'

function needsRefreshToken(url: string) {
  // TODO
  return false
}

export default (request: Request): Promise<Response> => {
  const cookieStore = cookies()
  const cookieKey = needsRefreshToken(request.url) ? 'refresh_token' : 'access_token'
  const token = cookieStore.get(cookieKey)?.value!
  request.headers.set('Authorization', `Bearer ${token}`)

  return fetch(request)
}
