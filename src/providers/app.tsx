import React from "react"
import { QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'

import { queryClient } from "~/lib/react-query"

type AppProviderProps = {
  children: React.ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <React.Suspense
      fallback={
        <div>
          Loading... (wip)
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
        {children}
      </QueryClientProvider>
    </React.Suspense>
  )
}
