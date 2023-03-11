import { GetServerSidePropsContext } from 'next';
import { loginWithGithub } from "../api/loginWithGithub";
import BitbucketOAuthButton from '../components/BitbucketOAuthButton';
import GitHubOAuthButton from '../components/GitHubOAuthButton';
import GitLabOAuthButton from '../components/GitLabOAuthButton';

type QueryParams = 
  | { provider: 'github', code: string }
  | { provider?: never, code?: never }

export async function getServerSideProps({ query = {} }: GetServerSidePropsContext) {
  const { provider, code } = query as QueryParams
  if (provider === 'github') {
    const response = await loginWithGithub({ code })
    console.log({ response })
  }

  return {
    props: {}
  }
}

export default function Login() {
  return (
    <div>
      <div className="flex flex-col justify-content mt-64">
        <div className='font-black text-5xl mx-auto mb-10'>
          Log in to Replay
        </div>
        
        <div className="flex flex-col mx-auto">
          <GitHubOAuthButton />
          <GitLabOAuthButton />
          <BitbucketOAuthButton />
        </div>
      </div>
    </div>
  )
}
