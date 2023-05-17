import { PROXY_URL } from '~/config'

type UploadVideo = {
  title: string
  description: string | undefined
  repo: string
}

export default async function uploadVideo(uploadVideo: UploadVideo) {
  const request = new Request(`${PROXY_URL}/videos/upload`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(uploadVideo),
  })

  return await fetch(request)
}
