import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { defineCustomElements } from '@ionic/core/loader'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import '/styles'
import Head from 'next/head'

const handleExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [queryClient] = useState(() => new QueryClient())

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
          <ion-app>
            <ion-header translucent>
              <ion-toolbar>
                <ion-title>Hennops project stuff</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content fullscreen>
              <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={handleExitComplete}
              >
                <motion.div
                  style={{ padding: '4rem' }}
                  key={router.route}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <Component {...pageProps} key={router.route} />
                </motion.div>
              </AnimatePresence>
            </ion-content>
            <ion-footer>
              <ion-toolbar>
                <ion-title>Wow it's a footer</ion-title>
              </ion-toolbar>
            </ion-footer>
          </ion-app>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
