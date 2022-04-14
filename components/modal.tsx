import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { isBrowser } from '../utils'

interface iProps {
  header: string
  isOpen: boolean
  setState: (state: boolean) => void
  children: React.ReactNode
}
const Modal = ({ header, isOpen, setState, children }: iProps) => {
  return isBrowser ? (
    <IonModal isOpen={isOpen} onDidDismiss={() => setState(false)}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>{header}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setState(false)}>
              <IonIcon name="close" slot="icon-only"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="px-4">{children}</div>
      </IonContent>
    </IonModal>
  ) : null
}

export default Modal
