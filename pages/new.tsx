import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { dehydrate, QueryClient, useQuery } from 'react-query'

interface iPost {
  id: string
  title: string
  body: string
}

const getPosts = async (): Promise<iPost[]> => {
  return await fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=600'
  )
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['posts'], getPosts)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const New: NextPage = () => {
  const { data } = useQuery(['posts'], getPosts)
  return (
    <>
      <Head>
        <title>Data</title>
      </Head>
      <h1>You are on a page that has serverside data</h1>
      <Link href="/">Home</Link>
      {data?.map((post: iPost) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )
}

export default New
