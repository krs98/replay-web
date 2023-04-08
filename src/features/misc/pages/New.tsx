import AdjustAppPermissions from '../components/AdjustAppPermissions'

export default async function New() {
  return (
    <div className="bg-black h-screen px-16">
      <div className="h-32"></div>
      <div>
        <div className="px-6">
          <div className="mb-20">
            <div className="mb-7">
              <h3 className="text-white text-5xl font-black tracking-wide leading-[48px]">
                Let's show your work
              </h3>
            </div>
            <p className="text-gray font-medium text-gray tracking-wide leading-8">
              To add a new video, import an existing Git repository.
            </p>
          </div>
          <div className="w-full border border-gray-2 rounded-lg p-8">
            <div>
              <div className="mb-2">
                <h4 className="text-white text-2xl font-black tracking-wide leading-[28px]">
                  Import Git Repository
                </h4>
              </div>
              <div>
                <AdjustAppPermissions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
