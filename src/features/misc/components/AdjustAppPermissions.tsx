'use client'

export default function AdjustAppPermissions() {
  const provider = 'Github'

  function handleClickAdjustPermissions() {
    const url = `https://github.com/settings/installations/34602678`
    window.open(url, '_blank')
  }

  return (
    <p className="text-white">
      <span className="mr-1">Missing Git reporitory? </span>
      <span
        className="inline-flex items-center text-yellow font-bold cursor-pointer hover:underline"
        onClick={handleClickAdjustPermissions}
      >
        <span className="mr-1">Adjust {provider} App Permissions →</span>
      </span>
    </p>
  )
}
