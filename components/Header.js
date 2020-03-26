import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/auth';
import Link from 'next/link';

import { color } from '../libs/variables';

const Header = () => {
  const login = provider => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(token, user);
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  };

  const googleLogin = () => {
    if (firebase.apps.length) {
      const provider = new firebase.auth.GoogleAuthProvider();

      login(provider);
    }
  };

  const facebookLogin = () => {
    if (firebase.apps.length) {
      const provider = new firebase.auth.FacebookAuthProvider();
      login(provider);
    }
  };

  const twitterLogin = () => {
    if (firebase.apps.length) {
      const provider = new firebase.auth.TwitterAuthProvider();
      login(provider);
    }
  };

  const openSocialLoginModal = () => {
    console.log('open');
  };

  return (
    <Container>
      <div>
        <Link href="/">
          <a>
            <h1>Stay Live</h1>
          </a>
        </Link>
        <button onClick={openSocialLoginModal}>Fazer login</button>
        {/* <button onClick={googleLogin}>Google</button>
        <button onClick={facebookLogin}>Facebook</button>
        <button onClick={twitterLogin}>Twitter</button> */}
      </div>
    </Container>
  );
};

const Container = styled.header`
  background-color: ${color.blue};
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 58px;
  z-index: 1;
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-itens: center;
    flex-direction: row;
    padding: 10px 0px;
    margin: 0 30px;
    color: ${color.white};
    a {
      text-decoration: none;
    }
    h1 {
      margin: 0;
      padding: 0;
      color: white;
    }
    button {
      border: 1px solid ${color.white};
      background: none;
      font-weight: bold;
      color: ${color.white};
    }
  }
`;

export default Header;
