import { FaGithub } from "react-icons/fa"
import { ghOAuthClientId } from "~/config"
import OAuthButton from "./OAuthButton"

export default function GitHubOAuthButton() {
  const handleClick = () => {
    const url = `https://github.com/login/oauth/authorize?client_id=${ghOAuthClientId}`
    window.open(url, '_blank')
  }

  return (
    <OAuthButton
      provider='GitHub'
      icon={<FaGithub />}
      className='bg-[#24292e] hover:bg-[#2d333b]'
      onClick={handleClick}
    />
  )
}

