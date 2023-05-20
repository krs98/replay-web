import { Cursor, CursorPage } from '~/types'
import { Video } from '../types'
import { API_URL } from '~/config'

type GetCursorPaginatedVideos = {
  cursor: Cursor | undefined
  limit: number
}

type GetCursorPaginatedVideosResponse = {
  success: true
  data: CursorPage<Video>
}

export default async function get_cursor_paginated_videos(
  request: GetCursorPaginatedVideos
) {
  const url = buildUrl(request)
  const res = await fetch(new Request(url, { cache: 'no-store' }))
  const data = await res.json()
  return data as GetCursorPaginatedVideosResponse
}

function buildUrl({ cursor, limit }: GetCursorPaginatedVideos) {
  let url = `${API_URL}/videos?limit=${limit}`
  if (cursor) {
    url += `&cursor=${cursor}`
  }

  return url
}
