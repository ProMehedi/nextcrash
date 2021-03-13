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
  const res = await fetch(`${server}/api/articles`, {
    method: 'GET',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
      Accept: 'application/json; charset=UTF-8',
    },
  })
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
