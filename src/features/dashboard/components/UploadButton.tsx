import Link from 'next/link'

export default function UploadButton() {
  return (
    <button className="group bg-yellow hover:bg-black inline-block px-8 py-2 rounded-full border-2 border-yellow">
      <Link className="flex items-center text-black group-hover:text-yellow" href="/new">
        <span className="font-bold">New</span>
      </Link>
    </button>
  )
}
