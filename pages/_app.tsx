import { useState } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import '/styles/tailwind.css'
import '/styles/variables.css'
import '@ionic/react/css/core.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

import AppLayout from '../layouts/app'

function MyApp({ Component, pageProps }: AppProps) {
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

  const router = useRouter()

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
