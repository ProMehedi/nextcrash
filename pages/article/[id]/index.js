import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import { server } from '../../../config'

const SingleArticle = ({ article }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Meta title={`NextCrash - ${article.title}`} desc={article.body} />
      <div className='container'>
        <h3>
          {article.title} ({id})
        </h3>
        <p>{article.body}</p>
        <br />
        <Link href='/'>Go Back</Link>
      </div>
      <style jsx>
        {`
          .container {
            width: 960px;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)
  const article = await res.json()

  return { props: { article } }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/`)
  const article = await res.json()

  const ids = article.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return { paths, fallback: false }
}

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )
//   const article = await res.json()

//   return { props: { article } }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
//   const article = await res.json()

//   const ids = article.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return { paths, fallback: false }
// }

export default SingleArticle
