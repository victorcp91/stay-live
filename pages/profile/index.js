import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { color } from '../../libs/variables';

import MyLives from '../../components/MyLives';

const Profile = () => {
  const history = [
    {
      id: 1,
      title: 'Britney Returns',
      description: 'My lonelyness is saving me',
      channel: 'youtube',
      link: 'https://youtube.com',
      startDate: '2020-03-26T23:12:45.678Z',
      endDate: '2020-03-26T23:55:45.678Z',
    },
    {
      id: 2,
      title: 'Britney Returns',
      description: 'My lonelyness is saving me',
      channel: 'youtube',
      link: 'https://youtube.com',
      startDate: '2020-03-26T22:12:45.678Z',
      endDate: '2020-03-26T23:12:45.678Z',
    },
    {
      id: 3,
      title: 'Britney Returns',
      description: 'My lonelyness is saving me',
      channel: 'youtube',
      link: 'https://youtube.com',
      startDate: '2020-03-27T22:12:45.678Z',
      endDate: '2020-03-27T23:12:45.678Z',
    },
    {
      id: 4,
      title: 'Britney Returns',
      description: 'My lonelyness is saving me',
      channel: 'youtube',
      link: 'https://youtube.com',
      startDate: '2020-03-29T22:12:45.678Z',
      endDate: '2020-03-29T23:12:45.678Z',
    },
    {
      id: 5,
      title: 'Britney Returns',
      description: 'My lonelyness is saving me',
      channel: 'youtube',
      link: 'https://youtube.com',
      startDate: '2020-03-29T23:12:45.678Z',
      endDate: '2020-03-29T23:12:45.678Z',
    },
  ];
  return (
    <>
      <Head>
        <title>StayHome - Profile</title>
      </Head>
      <Main>
        <Link href="/registerLive">
          <a className="addLive">Adicionar Live</a>
        </Link>
        <div className="lives">
          <div>
            <h2 className="listTitle">My saved lives</h2>
            <MyLives lives={history} />
          </div>
          <div>
            <h2 className="listTitle">My posted history</h2>
            <MyLives lives={history} />
          </div>
        </div>
      </Main>
    </>
  );
};

const Main = styled.main`
  margin-top: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .addLive {
    width: fit-content;
    padding: 5px 10px;
    border: 1px solid ${color.blue};
    color: ${color.blue};
    font-size: 25px;
    font-weight: bold;
    background: none;
    margin: 80px 0;
    text-decoration: none;
  }
  .lives {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    .listTitle {
      padding: 0 20px;
      color: ${color.dark1};
    }
  }
`;

export default Profile;
