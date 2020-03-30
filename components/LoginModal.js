import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import styled from 'styled-components';

import { registerUser } from '../store/actions/user';

import { color } from '../libs/variables';
import CloseIcon from '../assets/icons/Close';

const LoginModal = ({ close }) => {
  const dispatch = useDispatch();
  // Email
  // const login = (provider) => {
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then(function (result) {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       var token = result.credential.accessToken;
  //       // The signed-in user info.
  //       var user = result.user;
  //       console.log(token, user);
  //       // ...
  //     })
  //     .catch(function (error) {
  //       // Handle Errors here.
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // The email of the user's account used.
  //       var email = error.email;
  //       // The firebase.auth.AuthCredential type that was used.
  //       var credential = error.credential;
  //       console.log(errorCode, errorMessage, email, credential);
  //       // ...
  //     });
  // };

  const signIn = (provider) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const token = result.credential.accessToken;
        const user = result.user;
        const { uid, refreshToken, displayName, photoURL, email } = user;
        dispatch(
          registerUser({
            uid,
            refreshToken,
            displayName,
            photoURL,
            email,
          })
        );
        close();
      })
      .catch(function (error) {
        console.error(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  };

  const googleLogin = () => {
    if (firebase.apps.length) {
      const provider = new firebase.auth.GoogleAuthProvider();
      signIn(provider);
    }
  };

  const facebookLogin = () => {
    if (firebase.apps.length) {
      const provider = new firebase.auth.FacebookAuthProvider();
      signIn(provider);
    }
  };

  const twitterLogin = () => {
    if (firebase.apps.length) {
      const provider = new firebase.auth.TwitterAuthProvider();
      signIn(provider);
    }
  };

  return (
    <Container>
      <div className="modal">
        <button className="close" type="button" onClick={() => close()}>
          <CloseIcon color="white" />
        </button>
        <h3>Utilize algum login social:</h3>
        <ul className="socialList">
          <li>
            <button type="button" onClick={() => googleLogin()}>
              Google
            </button>
          </li>
          <li>
            <button type="button" onClick={() => facebookLogin()}>
              Facebook
            </button>
          </li>
          <li>
            <button type="button" onClick={() => twitterLogin()}>
              Twitter
            </button>
          </li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    width: 90vw;
    max-width: 500px;
    height: 100vh;
    max-height: 400px;
    background-color: ${color.blue};
    color: white;
    padding: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 15px solid white;
    position: relative;
    .close {
      position: absolute;
      border: none;
      background: none;
      right: 10px;
      top: 10px;
    }
    .socialList {
      list-style: none;
      color: white;
      padding: 0;
      margin: 0;
      button {
        border: none;
        background-color: white;
        color: ${color.blue};
        font-size: 18px;
        font-weight: bold;
        margin: 15px;
        padding: 10px 20px;
      }
    }
  }
`;

export default LoginModal;
