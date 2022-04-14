import { IonApp, IonContent } from '@ionic/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { memo } from 'react'
import Header from '../components/header'

type Props = {
  children: React.ReactNode
}

const AppLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  return (
    <IonApp>
      <Header />
      <IonContent className="ion-padding" fullscreen>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <main style={{ padding: '4rem' }}>{children}</main>
          </motion.div>
        </AnimatePresence>
      </IonContent>
      {/* <Footer /> */}
    </IonApp>
  )
}

export default memo(AppLayout)
