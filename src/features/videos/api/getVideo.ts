import { API_URL } from '~/config'
import { Video } from '../types'

type GetVideoRequest = {
  id: string
}

type GetVideoResponse = {
  success: true
  data: Video
}

export default async function getVideo({ id }: GetVideoRequest) {
  const request = new Request(`${API_URL}/videos/${id}`)
  const response = await fetch(request)
  const json = await response.json()

  return json as GetVideoResponse
}
