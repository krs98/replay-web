import Link from 'next/link'
import { FiLock as Lock } from 'react-icons/fi'
import getRepositories from '../api/getRepositories'

export default async function RepositoryList() {
  const { data: repositories } = await getRepositories()

  return (
    <ul className="border border-gray-2 rounded-lg">
      {repositories.map(repo => (
        <li
          key={repo.id}
          className={`
            flex items-center p-4
            border-b border-gray-2 last:border-b-0
          `}
        >
          <span className="text-white font-medium">
            {repo.name} {repo.private && <Lock className="-mt-0.5 text-gray inline" />}
            <span className="text-gray font-normal"> · 142d ago</span>
          </span>

          <button
            className={`
              group px-4 py-1 ml-auto
              border-2 border-white rounded-full bg-white
              hover:bg-transparent
            `}
          >
            <Link
              className={`
                text-black group-hover:text-white font-medium tracking-wide
              `}
              href={`/new/import?repo=${repo.name}`}
            >
              Import
            </Link>
          </button>
        </li>
      ))}
    </ul>
  )
}
