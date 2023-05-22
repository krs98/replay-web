import Link from 'next/link'
import { redirect } from 'next/navigation'
import { LoginButton } from '~/features/misc'
import { getVideo } from '~/features/videos'
import routes from '~/lib/routes'
import { SearchParams } from '~/types'

export default async function Watch({ searchParams }: { searchParams: SearchParams }) {
  const { video: ids } = searchParams
  if (!ids) {
    redirect(routes.browse)
  }

  const id = Array.isArray(ids) ? ids[0] : ids
  const video = await getVideo({ id })
  if (!video.success) {
    redirect(routes.browse)
  }

  return (
    <div className="w-screen min-h-screen overflow-hidden bg-black">
      <header className="w-full fixed z-10 px-16 py-8">
        <div className="flex">
          <div className="flex items-center">
            <Link className="font-black text-2xl text-yellow" href={routes.landing}>
              Replay
            </Link>
          </div>
          <div className="ml-auto">
            <span className="inline-block mr-12">
              <Link className="text-white font-bold p-2 hover:text-yellow" href="/browse">
                Browse videos
              </Link>
            </span>
            <LoginButton />
          </div>
        </div>
      </header>

      <div className="px-16 mt-44">
        <div className="w-3/5 mb-4">
          <video controls autoPlay>
            <source
              src={`http://127.0.0.1:4000/videos/${video.data.repo}`}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="mb-8">
          <div className="text-white text-2xl font-bold mb-2">
            <h2>{video.data.title}</h2>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="w-12 h-12 bg-gray rounded-full"></div>
            </div>
            <div>
              <div className="">
                <h3 className="text-white font-medium">Unknown</h3>
                <span className="text-gray">10K followers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
