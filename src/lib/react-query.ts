import { DefaultOptions, QueryClient, UseMutationOptions } from "react-query";
import { AsyncReturnType } from 'type-fest'

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false
  }
}

export const queryClient = new QueryClient({ defaultOptions: queryConfig })

export type MutationConfig<Fn extends (arg: any) => any> = UseMutationOptions<
  AsyncReturnType<ReturnType<Fn>>,
  unknown, // TODO
  Parameters<Fn>[0]
>
