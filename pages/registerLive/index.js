import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import DateTime from 'react-datetime';
import 'moment/locale/pt-br';
import 'moment/locale/es';
import axios from 'axios';

import { color } from '../../libs/variables';
import translate from '../../libs/language';

import MyLives from '../../components/MyLives';

const AddLive = () => {
  const language = useSelector((state) => state.settings.language);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [channelOrigin, setChannelOrigin] = useState('youtube');
  const [channel, setChannel] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTimer, setSearchTimer] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [datetime, setDatetime] = useState();

  const [category1, setCategory1] = useState();
  const [subcategory1, setSubCategory1] = useState();
  const [category2, setCategory2] = useState();
  const [subcategory2, setSubCategory2] = useState();
  const [category3, setCategory3] = useState();
  const [subcategory3, setSubCategory3] = useState();

  const handleFile = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setFile(event.target.files[0]);
  };

  const registerLive = () => {};

  const search = () => {
    if (channelOrigin === 'youtube') {
      gapi.client.youtube.search
        .list({
          part: 'snippet',
          q: searchTerm,
          type: 'channel',
        })
        .then(
          function (response) {
            // Handle the results
            console.log(response.result.items);
            setSearchResult(response.result.items);
          },
          function (err) {}
        );
    } else {
      axios
        .get(`https://www.instagram.com/${searchTerm}/?__a=1`)
        .then((response) => {
          setSearchResult([response.data.graphql.user]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  useEffect(() => {
    setSearchResult([]);
    if (searchTerm) {
      const timer = setTimeout(() => {
        search();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [searchTerm]);

  useEffect(() => {
    setSearchResult([]);
    setSearchTerm('');
  }, [channelOrigin]);

  return (
    <>
      <Head>
        <title>StayHome + Live</title>
      </Head>
      <Main onSubmit={() => {}}>
        <h2>{translate('liveInfo', language)}</h2>
        <div className="main-info">
          <div className="text-info">
            <input
              type="text"
              placeholder={translate('title', language)}
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
            <textarea
              placeholder={translate('description', language)}
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
          </div>
          <div className="channel-area">
            {channel ? (
              channelOrigin === 'youtube' ? (
                <div className="selected-channel">
                  <img
                    src={channel.snippet.thumbnails.high.url}
                    alt={channel.snippet.channelTitle}
                  />
                  <button className="delete" onClick={() => setChannel()}>
                    Remover
                  </button>
                </div>
              ) : (
                <div className="selected-channel">
                  <img
                    src={channel.profile_pic_url_hd}
                    alt={channel.full_name}
                  />
                  <button className="delete" onClick={() => setChannel()}>
                    Remover
                  </button>
                </div>
              )
            ) : (
              <>
                <select
                  className="channel-selector"
                  value={channelOrigin}
                  onChange={(e) => setChannelOrigin(e.currentTarget.value)}
                >
                  <option value="youtube">Youtube</option>
                  <option value="instagram">Instagram</option>
                </select>
                <div>
                  <span
                    className={channelOrigin === 'instagram' ? 'insta' : ''}
                  >
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder={
                        channelOrigin === 'youtube'
                          ? translate('youtubeChannelSearch', language)
                          : translate('instagramChannelSearch', language)
                      }
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.currentTarget.value)}
                    />
                  </span>
                </div>
                <ul>
                  {searchTerm &&
                    searchResult.map((item) => (
                      <li key={item.id.channelId}>
                        <button type="button" onClick={() => setChannel(item)}>
                          <div className="image-container">
                            <img
                              src={
                                channelOrigin === 'youtube'
                                  ? item.snippet.thumbnails.default.url
                                  : item.profile_pic_url
                              }
                              alt={
                                channelOrigin === 'youtube'
                                  ? item.snippet.channelTitle
                                  : item.full_name
                              }
                            />
                          </div>

                          <div className="channel-info">
                            <h3>
                              {channelOrigin === 'youtube' ? (
                                item.snippet.channelTitle
                              ) : (
                                <>
                                  {item.full_name}
                                  <span> @{item.username}</span>
                                </>
                              )}
                            </h3>
                            <p>
                              {channelOrigin === 'youtube'
                                ? item.snippet.description
                                : item.biography}
                            </p>
                          </div>
                        </button>
                      </li>
                    ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <p>{translate('selectCategories', language)}</p>
        <div className="category">
          <select
            value={category1}
            onChange={(e) => setCategory1(e.currentTarget.value)}
          >
            <option value="">{translate('category', language)}</option>
            <option value="1">option1</option>
            <option value="2">option2</option>
            <option value="3">option3</option>
          </select>
          <select
            value={subcategory1}
            onChange={(e) => setSubCategory1(e.currentTarget.value)}
          >
            <option value="">{translate('subcategory', language)}</option>
            <option value="1">option1</option>
            <option value="2">option2</option>
            <option value="3">option3</option>
          </select>
        </div>
        <div className="category">
          <select
            value={category2}
            onChange={(e) => setCategory2(e.currentTarget.value)}
          >
            <option value="">{translate('category', language)}</option>
            <option value="1">option1</option>
            <option value="2">option2</option>
            <option value="3">option3</option>
          </select>
          <select
            value={subcategory2}
            onChange={(e) => setSubCategory2(e.currentTarget.value)}
          >
            <option value="">{translate('subcategory', language)}</option>
            <option value="1">option1</option>
            <option value="2">option2</option>
            <option value="3">option3</option>
          </select>
        </div>
        <div className="category">
          <select
            value={category3}
            onChange={(e) => setCategory3(e.currentTarget.value)}
          >
            <option value="">{translate('category', language)}</option>
            <option value="1">option1</option>
            <option value="2">option2</option>
            <option value="3">option3</option>
          </select>
          <select
            value={subcategory3}
            onChange={(e) => setSubCategory3(e.currentTarget.value)}
          >
            <option value="">{translate('subcategory', language)}</option>
            <option value="1">option1</option>
            <option value="2">option2</option>
            <option value="3">option3</option>
          </select>
        </div>
        <label htmlFor="date">{translate('dateTime', language)}</label>
        <DateTime
          timeFormat={true}
          locale={language}
          value={datetime}
          onChange={setDatetime}
        />

        <button className="register-button" type="submit">
          {translate('registerLive', language)}
        </button>
      </Main>
    </>
  );
};

const Main = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 50px auto 200px auto;
  padding: 50px;
  color: ${color.dark1};
  .main-info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .text-info,
  .channel-area {
    display: flex;
    flex-direction: column;
    width: 45%;
    min-width: 300px;
    .selected-channel {
      text-align: center;
      img {
        width: 100%;
        height: auto;
      }
      .delete {
        border: none;
        font-size: 18px;
        color: ${color.red};
        text-decoration: underline;
        margin: 0 auto;
        background: none;
      }
    }
  }
  .channel-selector {
    background-color: white;
    margin-bottom: 30px;
  }
  .insta {
    position: relative;
    &:before {
      content: '@';
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
    input {
      padding-left: 25px;
    }
  }

  .channel-area {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        margin: 0;
        padding: 0;
      }
      button {
        margin: 0;
        padding: 0;
        text-align: left;
        display: flex;
        height: 80px;
        overflow: hidden;
        width: 100%;
        margin-bottom: 10px;
        background-color: ${color.lightGreen};
        border: none;
        color: ${color.dark2};
        .image-container {
          min-width: 80px;
          min-height: 80px;
          max-width: 80px;
          max-height: 80px;
          position: relative;
          img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .channel-info {
          padding: 5px;
          h3,
          p {
            margin: 0;
            padding: 0;
          }
          h3 {
            margin-bottom: 5px;
            font-size: 14px;
          }
          p {
            font-size: 12px;
          }
        }
      }
    }
  }
  h2 {
    margin-bottom: 50px;
  }
  input,
  label,
  textarea {
    width: 100%;
  }
  label {
    margin-bottom: 5px;
    font-size: 16px;
  }
  input,
  textarea,
  select {
    font-size: 16px;
    margin-bottom: 30px;
    padding: 10px 10px;
    border: none;
  }
  textarea {
    resize: none;
    height: 200px;
  }

  select {
    width: 200px;
    height: 40px;
    border-radius: 0;
    margin: 0;
  }

  label[for='date'],
  input[type='datetime-local'] {
    width: 350px;
  }
  .register-button {
    width: 100%;
    max-width: fit-content;
    padding: 10px 20px;
    border: 1px solid ${color.blue};
    color: ${color.blue};
    background: none;
    font-weight: bold;
    font-size: 20px;
    &:hover {
      border: 1px solid ${color.orange};
      color: ${color.orange};
    }
  }
  .form-control {
    width: 220px;
  }
  .rdtPicker {
    margin-top: -30px;
  }
  .category {
    padding: 10px 0;
    background-color: ${color.lighterGreen};
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 50px;
  }
`;

export default AddLive;
