import Link from 'next/link'
import { redirect, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { UploadVideoForm } from '~/features/misc'

export default function Import() {
  return (
    <div className="bg-black h-screen px-16">
      <div className="h-32"></div>
      <div className="flex">
        <div className="shrink-0 grow">
          <div className="mb-8">
            <Link className="text-gray" href="/new">
              ← Back
            </Link>
          </div>
          <div className="mb-4">
            <h3 className="text-white text-5xl font-black tracking-wide leading-[48px]">
              You&apos;re almost done
            </h3>
          </div>
          <p className="text-gray font-medium text-gray tracking-wide leading-8">
            Fill the following information to upload the video.
          </p>
        </div>
        <div className="basis-full pl-20">
          <div className="bg-black-2 border border-gray-2 rounded-lg p-8">
            <div className="border-b border-gray-2 pb-4 mb-8">
              <h3 className="text-white text-3xl font-black tracking-wide">
                Video Information
              </h3>
            </div>
            <Suspense fallback={<p>Loading...</p>}>
              <UploadVideoForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
