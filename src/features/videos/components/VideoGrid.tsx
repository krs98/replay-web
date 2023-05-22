'use client'

import { chunks } from '~/utils/list'
import * as types from '../types'
import VideoGridItem from './VideoGridItem'
import { useEffect, useState } from 'react'

type VideoGridProps = {
  videos: types.Video[]
}

function useItemsPerRow() {
  const [itemsPerRow, setItemsPerRow] = useState(3)

  function updateItemsPerRow(e: UIEvent) {
    const itemsPerRow = window.innerWidth < 1200 ? 2 : 3
    setItemsPerRow(itemsPerRow)
  }

  useEffect(() => {
    window.addEventListener('resize', updateItemsPerRow)
    return () => window.addEventListener('resize', updateItemsPerRow)
  })

  return itemsPerRow
}

export default function VideoGrid({ videos }: VideoGridProps) {
  const itemsPerRow = useItemsPerRow()
  const rows = chunks(itemsPerRow, videos)

  return (
    <div>
      <ul className="flex flex-col">
        {rows.map((row, i) => (
          <li key={i} className="w-full flex justify-center">
            <ul
              className="inline-flex w-full"
              style={{ maxWidth: `calc(364px * ${itemsPerRow})` }}
            >
              {row.map(video => (
                <li key={video.id}>
                  <VideoGridItem video={video} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
