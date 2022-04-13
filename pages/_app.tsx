import { FC, ReactNode, useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence, AnimatePresenceProps, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { defineCustomElements } from '@ionic/core/loader'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import '/styles/variables.css'
import '/styles'
import Head from 'next/head'
import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { notificationsOutline } from 'ionicons/icons'
import Link from 'next/link'
import { ReactQueryDevtools } from 'react-query/devtools'

const handleExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

// This is to be replaced once the new version of framer-motion is released
const HackyAnimatePresence = AnimatePresence as unknown as FC<
  AnimatePresenceProps & { children: ReactNode }
>

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
  const [showNotifications, setShowNotifications] = useState(false)
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
          <IonApp>
            <IonHeader>
              <IonToolbar>
                <IonTitle>
                  <h2>
                    <Link href="/">Hennops Stuff</Link>
                  </h2>
                </IonTitle>
                <IonButtons slot="start">
                  <IonMenuButton />
                </IonButtons>
                <IonButtons slot="end">
                  <IonButton onClick={() => setShowNotifications(true)}>
                    <IonIcon icon={notificationsOutline} />
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" fullscreen>
              <IonHeader collapse="condense">
                <IonToolbar>
                  <IonTitle size="large">Feed</IonTitle>
                  Wtf
                </IonToolbar>
              </IonHeader>

              <HackyAnimatePresence
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
              </HackyAnimatePresence>
            </IonContent>
          </IonApp>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
