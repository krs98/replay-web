import Link from 'next/link'
import { TbUpload } from 'react-icons/tb'

export default function UploadButton() {
  return (
    <button className="bg-white px-5 py-2 rounded-lg hover:bg-neutral-300">
      <Link className="flex items-center text-black" href="/new">
        <span className="font-medium">Upload...</span>
        <span className="ml-3 text-lg">
          <TbUpload />
        </span>
      </Link>
    </button>
  )
}
