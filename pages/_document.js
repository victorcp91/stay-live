import Document, { Html, Head, Main, NextScript } from 'next/document';
import '../config/firebaseConfig';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
            rel="preload"
            as="font"
            crossOrigin=""
          />
          <style>{`
            html,
            body {
              margin: 0 !important;
              background-color: #eaf4f4;
            }
            * {
              box-sizing: border-box;
            }
            button,input {
              cursor: pointer;
              outline: none;
           }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            html,
            body {
              font-family: 'Roboto', sans-serif;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
