import { chunks } from '~/utils/list'
import * as types from '../types'
import Video from './Video'

type VideoListProps = {
  videos: types.Video[]
}

export default function VideoList({ videos }: VideoListProps) {
  const rows = chunks(3, videos)

  return (
    <div>
      <ul className="flex flex-col items-center">
        {rows.map((row, i) => (
          <li key={i}>
            <ul className="inline-flex">
              {row.map(video => (
                <li key={video.id}>
                  <Video video={video} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
