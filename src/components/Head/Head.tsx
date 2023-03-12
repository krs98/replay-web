import NextHead from 'next/head'

type Props = {
  title: string
}

export default function Head({ title }: Props) {
  return (
    <NextHead>
      <title>{title} - Replay</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}
