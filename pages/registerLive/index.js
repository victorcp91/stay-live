import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { color } from '../../libs/variables';

import MyLives from '../../components/MyLives';

const AddLive = () => {
  return (
    <>
      <Head>
        <title>StayHome - Register Live</title>
      </Head>
      <Main></Main>
    </>
  );
};

const Main = styled.main`
  margin-top: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AddLive;
