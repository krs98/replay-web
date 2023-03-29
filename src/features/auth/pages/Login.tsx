import Head from '~/components/Head'
import BitbucketOAuthButton from '../components/BitbucketOAuthButton'
import GitHubOAuthButton from '../components/GitHubOAuthButton'
import GitLabOAuthButton from '../components/GitLabOAuthButton'

export default function Login() {
  return (
    <>
      <Head title="Login" />

      <div
        className={`
        w-screen h-screen overflow-hidden bg-[#121212]
      `}
      >
        <div className="flex flex-col justify-content mt-64">
          <div className="font-black text-5xl mx-auto mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-700 py-2">
            Log in to Replay
          </div>

          <div className="flex flex-col mx-auto text-[#fccc03]">
            <GitHubOAuthButton />
            <GitLabOAuthButton />
            <BitbucketOAuthButton />
          </div>
        </div>
      </div>
    </>
  )
}
