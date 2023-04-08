import { API_URL } from '~/config'
import { Repository } from '../types'
import fetch from '~/lib/fetch'

type GetRepositoriesResponse = {
  success: true
  data: Repository[]
}

export default async function getRepositories() {
  const request = new Request(`${API_URL}/repositories`)
  const res = await fetch(request)
  const data = await res.json()
  return data as GetRepositoriesResponse
}
