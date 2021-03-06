import App from 'next/app';
import { useEffect } from 'react';
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for we
import { Provider } from 'react-redux';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import firebaseConfig from '../config/firebaseConfig';
import '../libs/datetime.css';

import user from '../store/reducers/user';
import settings from '../store/reducers/settings';

import Header from '../components/Header';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user,
  settings,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

const loadYoutubeApi = () => {
  const script = document.createElement('script');
  script.src = 'https://apis.google.com/js/client.js';

  script.onload = () => {
    window.gapi.load('client', () => {
      window.gapi.client.setApiKey(process.env.apiKey);
      window.gapi.client.load('youtube', 'v3');
    });
  };

  document.body.appendChild(script);
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    }
    loadYoutubeApi();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
