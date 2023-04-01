import SearchBar from '~/components/Elements/SearchBar'
import UploadButton from '../components/UploadButton'

export default function DashboardVideos() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full h-32 bg-black"></div>
      <div className="w-full grow bg-black border-t border-gray-2 px-8 py-6">
        <div className="flex justify-center mt-4">
          <span className="w-full mr-4">
            <SearchBar />
          </span>
          <UploadButton />
        </div>
      </div>
    </div>
  )
}
