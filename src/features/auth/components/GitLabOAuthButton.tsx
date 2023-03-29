'use client'

import { FaGitlab } from 'react-icons/fa'
import OAuthButton from './OAuthButton'

export default function GitLabOAuthButton() {
  return (
    <OAuthButton
      provider="GitLab"
      icon={<FaGitlab />}
      className="bg-[#e24329] hover:bg-[#EF5828]"
    />
  )
}
