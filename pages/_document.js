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
  margin: 0 !important;
  padding: 0 !important;
  background-color: #eaf4f4;
  font-family: 'Roboto', sans-serif;
  * {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
    outline: none;
  }
`;

export default MyDocument;
