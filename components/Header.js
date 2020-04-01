import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';

import { color } from '../libs/variables';
import LoginModal from '../components/LoginModal';
import { unregisterUser } from '../store/actions/user';
import { setLanguage } from '../store/actions/settings';
import translate from '../libs/language';

const Header = () => {
  const user = useSelector((state) => state.user);
  const language = useSelector((state) => state.settings.language);

  const dispatch = useDispatch();

  const [loginModalOpened, setLoginModalOpened] = useState(false);

  const logout = () => {
    dispatch(unregisterUser());
  };

  const changeLanguage = (lang) => {
    dispatch(setLanguage(lang));
  };

  return (
    <>
      <Container>
        <div className="headerContent">
          <Link href="/">
            <a>
              <h1>Stay Live</h1>
            </a>
          </Link>

          <ul className="languages">
            <li>
              <button
                className={language === 'pt-br' ? 'active' : ''}
                type="button"
                onClick={() => changeLanguage('pt-br')}
              >
                <span className="desktop">Português</span>
                <span className="mobile">PT</span>
              </button>
            </li>
            <li>
              <button
                className={language === 'en' ? 'active' : ''}
                type="button"
                onClick={() => changeLanguage('en')}
              >
                <span className="desktop">English</span>
                <span className="mobile">EN</span>
              </button>
            </li>
            <li>
              <button
                className={language === 'es' ? 'active' : ''}
                type="button"
                onClick={() => changeLanguage('es')}
              >
                <span className="desktop">Español</span>
                <span className="mobile">ES</span>
              </button>
            </li>
          </ul>

          {user && user.uid ? (
            <div className="userMenu">
              <div className="userAvatar">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName} />
                ) : (
                  <span />
                )}
              </div>
              <ul className="userOptions">
                <li>
                  <Link href={`/profile`}>
                    <a>{translate('profile', language)}</a>
                  </Link>
                </li>
                <li>
                  <Link href={`/registerLive`}>
                    <a> {translate('addLive', language)}</a>
                  </Link>
                </li>
                <li>
                  <button onClick={logout} type="button">
                    {translate('logout', language)}
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <button onClick={() => setLoginModalOpened(true)}>
              {translate('login', language)}
            </button>
          )}
        </div>
      </Container>
      {loginModalOpened && (
        <LoginModal close={() => setLoginModalOpened(false)} />
      )}
    </>
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
  .headerContent {
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
      margin-left: 40px;
      display: flex;
      align-items: center;
      @media (min-width: 768px) {
        margin-left: 0;
      }
    }
    h1 {
      margin: 0;
      padding: 0;
      color: white;
      font-size: 20px;
      @media (min-width: 768px) {
        margin: 0 20px;
        font-size: 24px;
      }
    }
    button {
      border: 1px solid ${color.white};
      background: none;
      font-weight: bold;
      color: ${color.white};
    }
    .languages {
      list-style: none;
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      .desktop {
        display: none;
      }
      @media (min-width: 768px) {
        .mobile {
          display: none;
        }
        .desktop {
          display: inline-block;
        }
      }
      button {
        margin: 0 10px;
        @media (min-width: 768px) {
          margin: 0 20px;
        }
        font-weight: bold;
        font-size: 16px;
        border: none;
        &.active {
          color: ${color.orange};
        }
      }
    }
    .userMenu {
      position: relative;
      .userAvatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .userOptions {
        display: none;
        position: absolute;
        right: 0;
        top: 24px;
        list-style: none;
        background-color: ${color.green};
        padding: 10px 20px;
        text-align: center;
        font-size: 14px;
        li,
        a {
          white-space: nowrap;
          margin: 15px auto;
          text-align: center;
          text-decoration: none;
          color: white;
          width: fit-content;
        }
        button {
          font-size: 14px;
        }
      }
      &:hover {
        .userOptions {
          display: block;
        }
      }
    }
  }
`;

export default Header;
