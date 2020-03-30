import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'moment/locale/es';

import { color } from '../libs/variables';

const LivesList = ({ lives }) => {
  const language = useSelector((state) => state.settings.language);

  const orderedLives = useMemo(() => {
    return lives.sort((a, b) => a - b);
  }, lives);

  const groupLivesByDate = useMemo(() => {
    const dates = orderedLives.reduce((groups, live) => {
      const date = live.startDate.split('T')[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(live);
      return groups;
    }, {});

    const livesGroupedByDate = Object.keys(dates).map((date) => {
      return {
        date,
        lives: dates[date],
      };
    });

    return livesGroupedByDate;
  });

  return (
    <Container>
      {groupLivesByDate.map((group) => (
        <section>
          <time>{`${
            language === 'en'
              ? moment(group.date).format('MM-DD-YY')
              : moment(group.date).format('DD-MM-YY')
          }`}</time>{' '}
          | <time>{moment(group.date).locale(language).fromNow()}</time>
          <ul>
            {group.lives.map((live) => (
              <li className="live" key={live.id}>
                <a href={live.link} target="_blank">
                  <h3 className="title">{live.title}</h3>
                </a>
                <div className="description">{live.description}</div>
                <div className="time">
                  {moment(live.startDate).format('hh:mm')}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px;
  color: ${color.dark1};
  time {
    display: inline-block;
    font-weight: bold;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    margin-bottom: 40px;
    color: white;
    .live {
      display: flex;
      justify-content: space-between;
      alignitems: center;
      margin: 0;
      background-color: ${color.blue};
      padding: 30px 10px;
      @media (min-width: 768px) {
        padding: 15px 10px;
      }
      &:nth-child(2n + 1) {
        background-color: ${color.lighterGreen};
      }
      a {
        color: white;
      }
      .title {
        margin: 0;
        padding: 0;
      }
      .description,
      .title {
        width: 200px;
        font-size: 14px;
      }
      .time {
        width: 41px;
        font-size: 14px;
      }
    }
  }
`;

export default LivesList;
