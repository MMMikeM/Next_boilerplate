import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Modal from '../components/modal'
import { getPlatforms } from '@ionic/react'
import { IonButton } from '@ionic/react'
import { isBrowser } from '../utils'

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false)

  isBrowser && console.log('getPlatforms():', getPlatforms())

  return (
    <>
      <Head>
        <title>Hennops Revival Home</title>
      </Head>
      <h1>Welcome to Hennops Revival project!</h1>
      <Link href="/new">Link to another page</Link>
      <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
      <Modal header={'Butts'} isOpen={showModal} setState={setShowModal}>
        <h2 className="text-red-500 text-6xl">Hello!</h2>
        <h3>Subheading</h3>
        <p>This is the modal content</p>
      </Modal>
    </>
  )
}

export default Home
