import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonContent,
} from '@ionic/react'
import { AnimatePresence, motion } from 'framer-motion'
import { notificationsOutline } from 'ionicons/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

type Props = {
  children?: React.ReactNode
}

const AppLayout: React.FC<Props> = ({ children }) => {
  const [showNotifications, setShowNotifications] = useState(false)

  const router = useRouter()

  const handleExitComplete = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 })
    }
  }
  return (
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
            {children}
          </motion.div>
        </AnimatePresence>
      </IonContent>
    </IonApp>
  )
}

export default AppLayout
