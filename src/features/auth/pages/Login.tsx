import BitbucketOAuthButton from '../components/BitbucketOAuthButton'
import GitHubOAuthButton from '../components/GitHubOAuthButton'
import GitLabOAuthButton from '../components/GitLabOAuthButton'

export default function Login() {
  return (
    <div
      className={`
        w-screen h-screen overflow-hidden bg-black
      `}
    >
      <div className="flex flex-col justify-content mt-64">
        <div className="mx-auto mb-10 py-2">
          <h3 className="font-black text-5xl text-white tracking-wide">
            Log in to Replay
          </h3>
        </div>

        <div className="flex flex-col mx-auto text-white">
          <GitHubOAuthButton />
          <GitLabOAuthButton />
          <BitbucketOAuthButton />
        </div>
      </div>
    </div>
  )
}
