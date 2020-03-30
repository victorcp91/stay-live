import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';

import translate from '../libs/language';

import { color } from '../libs/variables';
import countries from '../libs/countries';
import HamburguerIcon from '../assets/icons/Hamburguer';
import CloseIcon from '../assets/icons/Close';

const Filters = () => {
  const lang = useSelector((state) => state.settings.language);

  const [selectedCountry, setSelectedCountry] = useState();
  const [language, setSelectedLanguage] = useState();
  const [selectedCategories, setSelectedCategories] = useState(['all']);
  const [categories] = useState([
    { value: 'all' },
    {
      value: 'classes',
      subFilters: [
        { value: 'science&tecnology' },
        { value: 'music' },
        { value: 'cooking' },
        { value: 'exercises' },
        { value: 'dancing' },
        { value: 'style&beauty' },
        { value: 'languages' },
        { value: 'others' },
      ],
    },
    { value: 'doItYourself&tutorial' },
    { value: 'news&politics' },
    { value: 'style&beauty' },
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
    { value: 'interview' },
  ]);

  const [opened, setOpened] = useState(false);

  const languageList = useMemo(
    () => (
      <select id="language">
        <option value="all">{translate('all', lang)}</option>
        <option value="pt">{translate('portuguese', lang)}</option>
        <option value="en">{translate('english', lang)}</option>
        <option value="es">{translate('spanish', lang)}</option>
      </select>
    ),
    [lang]
  );

  return (
    <Container>
      <button
        type="button"
        className="menuButton"
        onClick={() => setOpened(!opened)}
      >
        {opened ? (
          <CloseIcon color={'white'} />
        ) : (
          <HamburguerIcon color={'white'} />
        )}
      </button>
      <ul className={`navigationMenu ${opened ? 'active' : ''}`}>
        <div className="languageSelector">
          <label for="language">{translate('language', lang)}:</label>
          {languageList}
        </div>
        {categories.map((filter) => (
          <li
            className={`${filter.subFilters ? 'mainItem' : ''}
              ${
                selectedCategories.length === 1 &&
                selectedCategories.includes(filter.value)
                  ? 'active'
                  : ''
              }
              ${
                filter.subFilters &&
                selectedCategories.length > 1 &&
                selectedCategories[0] === filter.value
                  ? 'childActive'
                  : ''
              }`}
          >
            {filter.subFilters ? (
              <>
                <button onClick={() => setSelectedCategories([filter.value])}>
                  {translate(filter.value, lang)}
                </button>
                <ul className="subMenu">
                  {filter.subFilters.map((subFilter) => (
                    <li
                      className={
                        selectedCategories.includes(filter.value) &&
                        selectedCategories.includes(subFilter.value)
                          ? 'active'
                          : ''
                      }
                    >
                      <button
                        onClick={() =>
                          setSelectedCategories([filter.value, subFilter.value])
                        }
                      >
                        {translate(subFilter.value, lang)}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <button onClick={() => setSelectedCategories([filter.value])}>
                  {translate(filter.value, lang)}
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
  min-width: 90vw;
  width: fit-content;
  position: fixed;
  z-index: 1;
  top: 48px;
  @media (min-width: 768px) {
    min-width: 337px;
    position: relative;
    top: 0;
  }
  .menuButton {
    position: absolute;
    top: -48px;
    height: 58px;
    margin: 0;
    width: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    @media (min-width: 768px) {
      display: none;
    }
  }
  .navigationMenu {
    position: fixed;
    right: 100%;
    width: 90%;
    top: 58px;
    transition: right 0.5s ease-in-out;
    &.active {
      right: 10%;
    }
    @media (min-width: 768px) {
      position: relative;
      right: unset;
      width: unset;
      top: 0;
    }
    background-color: ${color.green};
    padding: 0;
    margin: 0;
    color: ${color.white};
    list-style: none;
    height: calc(100vh - 58px);
    overflow-y: scroll;
    .languageSelector {
      font-size: 20px;
      padding: 0 30px;
      position: relative;
      display: inline;
      select {
        font-size: 20px;
        color: white;
        appearance: none;
        padding: 0.5em;
        background: rgba(0, 0, 0, 0.3);
        border: none;
        border-radius: 3px;
        padding: 10px 20px;
        font-size: 1em;
        margin: 40px 10px 40px 10px;

        &::-ms-expand {
          display: none;
        }
      }
    }

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
      &.childActive {
        &:before {
          width: 100%;
          background-color: ${color.lightOrange};
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
