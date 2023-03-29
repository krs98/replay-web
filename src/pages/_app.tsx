import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import AppProvider from '~/providers/app'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </AppProvider>
  )
}
