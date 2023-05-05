import { Authenticate, Authenticating } from '~/features/auth'

export default function OAuth() {
  return (
    <>
      <Authenticate />
      <Authenticating />
    </>
  )
}
