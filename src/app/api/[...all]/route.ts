import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import { API_URL, PROXY_URL } from '~/config'

function replaceUrl(requestUrl: string) {
  return `${API_URL}/${requestUrl.slice(PROXY_URL.length + 1)}`
}

export async function GET(request: NextRequest) {
  request.headers.delete('transfer-encoding')

  const cookieStore = cookies()
  const accessToken = cookieStore.get('access_token')?.value
  request.headers.append('Authorization', `Bearer ${accessToken}`)

  const url = replaceUrl(request.url)
  return await fetch(url, request)
}

export async function POST(request: NextRequest) {
  request.headers.delete('transfer-encoding')

  const cookieStore = cookies()
  const accessToken = cookieStore.get('access_token')?.value
  request.headers.append('Authorization', `Bearer ${accessToken}`)

  const url = replaceUrl(request.url)
  return await fetch(url, request)
}
