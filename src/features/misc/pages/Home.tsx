import Link from 'next/link'
import Head from '~/components/Head'

export default function Home() {
  return (
    <>
      <Head title="Home" />

      <header className="max-w-full w-full fixed z-10 px-16 py-8">
        <div className="flex">
          <div className="flex items-center">
            <span className="font-black text-2xl text-[#fccc03]">Replay</span>
          </div>
          <div className="ml-auto">
            <span className="inline-block mr-12">
              <Link
                className={`
                  text-white font-bold p-2 hover:text-[#fccc03]
                `}
                href=""
              >
                Browse videos
              </Link>
            </span>
            <button
              className={`
                group
                border-2 border-[#fccc03] rounded-full bg-[#fccc03]
                hover:bg-transparent 
              `}
            >
              <Link
                className={`
                  text-[#121212] group-hover:text-[#fccc03] font-bold tracking-wide
                  inline-block px-8 py-2 
                `}
                href="/login"
              >
                Log in
              </Link>
            </button>
          </div>
        </div>
      </header>

      <div className="w-screen h-screen overflow-hidden bg-[#121212]">
        <div className="px-16 py-10 mt-44">
          <div>
            <div className="mb-7 max-w-md">
              <h3 className="text-white text-5xl font-black tracking-wide leading-[48px]">
                Share your Remotion videos
              </h3>
            </div>
            <div className="max-w-md mb-14">
              <p className="text-neutral-400 font-medium tracking-wider leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas ex
                a lacus efficitur sagittis. Proin nisl sapien, ultricies eu condimentum
                in, consectetur ac turpis.
              </p>
            </div>
            <div>
              <button
                className={`
                  group
                  border-2 border-[#fccc03] rounded-full bg-[#fccc03]
                  hover:bg-transparent 
                `}
              >
                <span
                  className={`
                    text-neutral-900 font-bold tracking-wide group-hover:text-[#fccc03]
                    inline-block px-16 py-3 
                  `}
                >
                  Get started
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
