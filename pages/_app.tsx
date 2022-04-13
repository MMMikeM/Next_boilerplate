import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { defineCustomElements } from '@ionic/core/loader'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import '/styles/variables.css'
import '/styles'
import Head from 'next/head'

import { ReactQueryDevtools } from 'react-query/devtools'
import AppLayout from '../layouts/app'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  )
  useEffect(() => {
    defineCustomElements(window)
  })

  return (
    <>
      <Head>
        <title>Hennops Revival</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <AppLayout>
            <Component {...pageProps} key={router.route} />
          </AppLayout>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
