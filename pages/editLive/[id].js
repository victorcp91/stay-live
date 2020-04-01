import { useState } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import DateTime from 'react-datetime';
import 'moment/locale/pt-br';
import 'moment/locale/es';

import { color } from '../../libs/variables';
import translate from '../../libs/language';

import MyLives from '../../components/MyLives';

const AddLive = () => {
  const language = useSelector((state) => state.settings.language);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState();
  const [file, setFile] = useState();
  const [datetime, setDatetime] = useState();
  const [link, setLink] = useState();

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

  return (
    <>
      <Head>
        <title>StayHome - Live</title>
      </Head>
      <Main onSubmit={() => {}}>
        <h2>{translate('editLiveInfo', language)}</h2>
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
          <div className="image-area">
            {image ? (
              <>
                <img src={image} alt="preview" />
                <button
                  className="delete"
                  type="button"
                  onClick={() => {
                    setFile();
                    setImage();
                  }}
                >
                  {translate('clear', language)}
                </button>
              </>
            ) : (
              <>
                <label htmlFor="imageSelector">
                  {translate('selectImage', language)}
                </label>
                <input
                  type="file"
                  name="image"
                  id="imageSelector"
                  accept="image/jpg,image/png,image/jpeg,image/gif"
                  onChange={handleFile}
                />
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
          onChange={(e) => setDatetime(e.currentTarget.value)}
        />

        <input
          type="text"
          placeholder={translate('liveLink', language)}
          value={link}
          onChange={(e) => setLink(e.currentTarget.value)}
        />

        <button type="submit">{translate('save', language)}</button>
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
  .image-area {
    display: flex;
    flex-direction: column;
    width: 45%;
    min-width: 300px;
  }
  .image-area {
    img {
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: 200px;
      object-fit: contain;
    }
    input {
      color: transparent;
      padding: 0;
    }
    input::-webkit-file-upload-button {
      visibility: hidden;
    }
    input::before {
      content: 'Upload';
      display: inline-block;
      border: 1px solid ${color.blue};
      padding: 5px 8px;
      outline: none;
      white-space: nowrap;
      -webkit-user-select: none;
      cursor: pointer;
      text-shadow: 1px 1px #fff;
      font-weight: 700;
      font-size: 15px;
      color: ${color.blue};
      padding: 10px 15px;
    }
    .delete {
      border: none;
      font-size: 18px;
      color: ${color.red};
      text-decoration: underline;
      margin: 0 auto;
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
  button,
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
  button {
    width: 100%;
    max-width: fit-content;
    padding: 10px 20px;
    border: 1px solid ${color.blue};
    color: ${color.blue};
    background: none;
    font-weight: bold;
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
