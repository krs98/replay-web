import { NextRequest } from 'next/server'
import { API_URL, PROXY_URL } from '~/config'

export async function POST(request: NextRequest) {
  request.headers.delete('transfer-encoding')

  const url = `${API_URL}/${request.url.slice(PROXY_URL.length)}`
  console.log(`calling ${url}`)
  return await fetch(url, request)
}
