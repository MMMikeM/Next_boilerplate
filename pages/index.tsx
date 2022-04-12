import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hennops Revival Home</title>
      </Head>
      <main>
        <h1>Welcome to Hennops Revival project!</h1>
        <Link href="/new">Link to another page</Link>
      </main>
    </>
  )
}

export default Home
