import Head from 'next/head'

const Meta = ({
  title,
  keywords,
  desc,
  language,
  author,
  robots,
  charSet,
  contentType,
}) => {
  return (
    <Head>
      <meta charSet={charSet} />
      <meta name='title' content={title} />
      <meta name='description' content={desc} />
      <meta name='keywords' content={keywords} />
      <meta name='robots' content={robots} />
      <meta http-equiv='Content-Type' content={contentType} />
      <meta name='language' content={language} />
      <meta name='author' content={author} />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'NextCrash - Learning NextJS',
  desc: 'Learning the NextJS with React Crash Course',
  keywords: 'next, reactjs, nextjs',
  language: 'English',
  author: 'Mehedi Hasan',
  robots: 'index, follow',
  charSet: 'utf-8',
  contentType: 'text/html',
}

export default Meta
