import Article from '../components/Article'
import { server } from '../config'

const Home = ({ articles }) => {
  return (
    <>
      <Article articles={articles} />
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: { articles },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/posts?_limit=10'
//   )
//   const articles = await res.json()

//   return {
//     props: { articles },
//   }
// }
