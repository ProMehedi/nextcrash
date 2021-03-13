import Document, { Html, Main, Head, NextScript } from 'next/document'

export class CustomDoc extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='customClass'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDoc
