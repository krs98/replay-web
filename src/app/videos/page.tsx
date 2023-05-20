import Link from 'next/link'
import { LoginButton } from '~/features/misc'
import { getCursorPaginatedVideos } from '~/features/videos'
import VideoList from '~/features/videos/components/VideoList'

const video = {
  id: 13971932,
  title: 'Test video - And something else',
  user: {
    username: 'Unknown',
  },
  description: undefined,
  uploaded_at: '2023-05-18T18:38:32.941676Z',
}

const videos = [
  video,
  video,
  video,
  video,
  video,
  video,
  video,
  video,
  video,
  video,
  video,
  video,
]

export default async function Videos() {
  const cursorPaginatedVideos = await getCursorPaginatedVideos({
    cursor: undefined,
    limit: 20,
  })

  return (
    <div className="w-screen min-h-screen overflow-hidden bg-black">
      <header className="w-full fixed z-10 px-16 py-8">
        <div className="flex">
          <div className="flex items-center">
            <span className="font-black text-2xl text-yellow">Replay</span>
          </div>
          <div className="ml-auto">
            <span className="inline-block mr-12">
              <Link className="text-white font-bold p-2 hover:text-yellow" href="/videos">
                Browse videos
              </Link>
            </span>
            <LoginButton />
          </div>
        </div>
      </header>

      <div className="mt-44 px-16">
        <VideoList videos={videos} />
      </div>
    </div>
  )
}
