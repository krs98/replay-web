import dayjs, { Dayjs } from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { Video } from '../types'

dayjs.extend(duration)

type VideoProps = {
  video: Video
}

function timeSince(date: Dayjs) {
  const diff = dayjs().diff(date)
  const duration = dayjs.duration(diff)

  if (duration.years() > 1) {
    return `${duration.years()} years ago`
  }

  if (duration.years() > 0) {
    return `${duration.years()} year ago`
  }

  if (duration.months() > 1) {
    return `${duration.months()} months ago`
  }

  if (duration.months() > 0) {
    return `${duration.months()} month ago`
  }

  if (duration.weeks() > 1) {
    return `${duration.weeks()} weeks ago`
  }

  if (duration.weeks() > 0) {
    return `${duration.weeks()} week ago`
  }

  if (duration.days() > 1) {
    return `${duration.days()} days ago`
  }

  if (duration.days() > 0) {
    return `${duration.days()} day ago`
  }

  if (duration.minutes() > 1) {
    return `${duration.minutes()} minutes ago`
  }

  if (duration.minutes() > 0) {
    return `${duration.minutes()} minute ago`
  }

  if (duration.seconds() > 1) {
    return `${duration.minutes()} seconds ago`
  }

  return `${duration.seconds()} second ago`
}

export default function Video({ video }: VideoProps) {
  return (
    <div className="mx-4 mb-12">
      <div className="w-96 h-48 bg-gray-2 rounded-lg mb-4"></div>
      <div className="flex">
        <div className="w-12 h-12 bg-gray-2 rounded-full mr-4"></div>
        <div>
          <div className="mb-1.5 text-white">
            <h3 className="font-bold">{video.title}</h3>
          </div>
          <div className="text-gray">
            <div className="">Unknown</div>
            <div>
              <span>1M views</span>
              <span className="font-black mx-1.5"> · </span>
              <span>{timeSince(dayjs(video.uploaded_at))}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
