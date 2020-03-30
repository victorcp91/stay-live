import Document, { Html, Head, Main, NextScript } from 'next/document';
import styled from 'styled-components';
import '../config/firebaseConfig';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <Body>
          <Main />
          <NextScript />
          <style jsx global>{`
            html,
            body {
              background-color: #eaf4f4;
              font-family: 'Roboto', sans-serif;
            }
            * {
              box-sizing: border-box;
            }
            button {
              cursor: pointer;
              outline: none;
            }
          `}</style>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
            rel="stylesheet"
          ></link>
        </Body>
      </Html>
    );
  }
}

const Body = styled.body`
  margin: 0;
  padding: 0;
`;

export default MyDocument;
