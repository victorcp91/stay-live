import Head from 'next/head';
import styled from 'styled-components';

import Filters from '../components/Filters';
import HightLights from '../components/HightLights';
import LivesList from '../components/LivesList';

const Home = () => {
  return (
    <>
      <Head>
        <title>StayHome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Filters />
        <div className="mainContent">
          <HightLights />
          <LivesList />
        </div>
      </Main>
    </>
  );
};

const Main = styled.main`
  margin-top: 58px;
  display: flex;
  flex: 1;
  align-content: stretch;
  height: calc(100vh - 58px);
  .mainContent {
    overflow-y: scroll;
    flex: 1;
  }
`;

export default Home;
