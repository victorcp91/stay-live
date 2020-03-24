import App from "next/app";
import { useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/analytics";
import firebaseConfig from "../config/firebaseConfig";

import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    }
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
