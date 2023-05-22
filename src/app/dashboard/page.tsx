import { SearchBar } from '~/components/Elements'
import { UploadButton } from '~/features/dashboard'
import { getCursorPaginatedVideos } from '~/features/videos'
import VideoGrid from '~/features/videos/components/VideoGrid'

export default async function DashboardVideos() {
  const videos = await getCursorPaginatedVideos({ cursor: undefined, limit: 20 })

  return (
    <div className="w-screen min-h-screen flex flex-col bg-black">
      <div className="w-full h-32"></div>
      <div className="w-full grow border-t border-gray-2 px-8 py-6">
        <div className="flex justify-center mt-4">
          <span className="w-full mr-4">
            <SearchBar />
          </span>
          <UploadButton />
        </div>
        <div className="mt-12">
          <VideoGrid videos={videos.data.page} />
        </div>
      </div>
    </div>
  )
}
