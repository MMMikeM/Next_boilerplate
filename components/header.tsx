import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
} from '@ionic/react'
import { notificationsOutline } from 'ionicons/icons'
import Link from 'next/link'
import { useState, memo } from 'react'

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          <h2>
            <Link href="/">Hennops Stuff</Link>
          </h2>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}
export default memo(Header)
