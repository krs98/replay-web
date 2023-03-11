import { FaBitbucket } from "react-icons/fa";
import OAuthButton from "./OAuthButton";

export default function BitbucketOAuthButton() {
  return (
    <OAuthButton
      provider='Bitbucket'
      icon={<FaBitbucket />}
      className='bg-[#0052cc] hover:bg-[#1668e2]'
    />
  )
}
