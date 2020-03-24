import styled from "styled-components";
import firebase from "firebase/app";
import "firebase/auth";

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

  return (
    <Container>
      <h1>Stay Home</h1>
      <button onClick={googleLogin}>Google</button>
      <button onClick={facebookLogin}>Facebook</button>
      <button onClick={twitterLogin}>Twitter</button>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-itens: center;
  flex-direction: row;
  background-color: orange;
  width: 100%;
  padding: 10px 30px;
  h1 {
    margin: 0;
    padding: 0;
  }
  button {
    border: 1px solid black;
    background: none;
    font-weight: bold;
  }
`;

export default Header;
