import Document, { Html, Head, Main, NextScript } from "next/document";
import "../config/firebaseConfig";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            html,
            body {
              margin: 0 !important;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
              background-color: #eaf4f4;
            }

            * {
              box-sizing: border-box;
            }
            button {
              cursor: pointer;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
