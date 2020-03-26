import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { color } from '../libs/variables';

const Filters = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filters] = useState([
    { value: 'all' },
    {
      value: 'classes',
      subFilters: [
        { value: 'science&Ttecnology' },
        { value: 'music' },
        { value: 'cooking' },
        { value: 'exercises' },
        { value: 'dancing' },
        { value: 'style&beauty' },
        { value: 'language' },
        { value: 'others' }
      ]
    },
    { value: 'doItYourself&tutorial' },
    { value: 'news&politics' },
    { value: 'style&beauty' },
    { value: 'filme&animation' },
    { value: 'science&tecnology' },
    { value: 'music' },
    { value: 'pets&animals' },
    { value: 'comedy' },
    { value: 'cooking' },
    { value: 'gaming' },
    { value: 'bookClub' },
    { value: 'architecture&design' },
    { value: 'kids' },
    { value: 'culture' },
    { value: 'interview' }
  ]);

  return (
    <Container>
      <ul className="navigationMenu">
        {filters.map(filter => (
          <li
            className={`${filter.subFilters ? 'mainItem' : ''} ${
              filter.value === selectedFilter ? 'active' : ''
            }`}
          >
            {filter.subFilters ? (
              <>
                <button onClick={() => setSelectedFilter(filter.value)}>
                  {filter.value}
                </button>
                <ul className="subMenu">
                  {filter.subFilters.map(subFilter => (
                    <li
                      className={
                        filter.value === selectedFilter ? 'active' : ''
                      }
                    >
                      <button
                        onClick={() => setSelectedFilter(subFilter.value)}
                      >
                        {subFilter.value}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <button onClick={() => setSelectedFilter(filter.value)}>
                  {filter.value}
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.aside`
  background-color: ${color.green};
  min-width: 250px;
  width: fit-content;
  overflow-y: scroll;
  .navigationMenu {
    padding: 0;
    margin: 0;
    color: ${color.white};
    list-style: none;
    li {
      width: 100%;
      border-bottom: 1px solid ${color.darkGreen};
      background-color: ${color.green};
      transition: background-color 0.2s ease-in-out;
      position: relative;
      &:before {
        position: absolute;
        content: '';
        display: block;
        width: 0;
        height: 100%;
        transition: width 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        background-color: ${color.orange};
      }
      &.active {
        &:before {
          width: 100%;
        }
      }

      button {
        border: none;
        background: none;
        font-weight: bold;
        font-size: 16px;
        color: ${color.white};
        cursor: pointer;
        width: 100%;
        padding: 15px 30px;
        text-align: left;
        position: relative;
      }

      &:hover {
        background-color: ${color.darkGreen};
        width: 100%;
      }
    }
    .mainItem {
      position: relative;
      .subMenu {
        display: block;
        list-style: none;
        overflow: hidden;
        padding: 0;
        max-height: 0;
        transition: max-height 1s cubic-bezier(0.16, 1, 0.3, 1);
        li {
          background-color: ${color.lighterGreen};
          &:hover {
            background-color: ${color.lightGreen};
          }
        }
      }
      &:hover {
        border-bottom: none;
        .subMenu {
          max-height: 500px;
        }
      }
    }
  }
`;

export default Filters;
