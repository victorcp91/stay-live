import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { color } from '../libs/variables';

const HightLights = () => {
  const lives = [
    {
      title: 'Britney Returns',
      description: 'My lonelyness is saving me',
      img:
        'https://abrilsuperinteressante.files.wordpress.com/2020/02/si_britney_toxic_fb.jpg?quality=70&strip=info',
      channel: 'youtube',
      link: 'https://youtube.com',
    },
    {
      title: 'Britney Returns',
      description: 'My lonelyness is saving me',
      img:
        'https://abrilsuperinteressante.files.wordpress.com/2020/02/si_britney_toxic_fb.jpg?quality=70&strip=info',
      channel: 'youtube',
      link: 'https://youtube.com',
    },
    {
      title: 'Britney Returns',
      description: 'My lonelyness is saving me',
      img:
        'https://abrilsuperinteressante.files.wordpress.com/2020/02/si_britney_toxic_fb.jpg?quality=70&strip=info',
      channel: 'youtube',
      link: 'https://youtube.com',
    },
    {
      title: 'Britney Returns',
      description: 'My lonelyness is saving me',
      img:
        'https://abrilsuperinteressante.files.wordpress.com/2020/02/si_britney_toxic_fb.jpg?quality=70&strip=info',
      channel: 'youtube',
      link: 'https://youtube.com',
    },
    {
      title: 'Britney Returns',
      description: 'My lonelyness is saving me',
      img:
        'https://abrilsuperinteressante.files.wordpress.com/2020/02/si_britney_toxic_fb.jpg?quality=70&strip=info',
      channel: 'youtube',
      link: 'https://youtube.com',
    },
  ];
  return (
    <Container>
      {lives.map((live) => (
        <a href={live.link} className="live">
          <div className="imageContainer">
            <img
              src="https://abrilsuperinteressante.files.wordpress.com/2020/02/si_britney_toxic_fb.jpg?quality=70&strip=info"
              alt="britney-live"
              title="britney-live"
            />
          </div>
          <div className="textInfo">
            <h2 className="title">{live.title}</h2>
            <span className="channel">{live.channel}</span>
            <p className="description">{live.description}</p>
          </div>
        </a>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
  padding: 20px;
  position: relative;
  .live {
    margin: 0 0 40px 0;
    text-decoration: none;
    color: ${color.dark1};
    font-size: 12px;
    position: unset;
    box-shadow: 10px 10px 50px rgba(66, 129, 164, 0.4);
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: rgba(66, 129, 164, 0.3);
    transition: background-color 0.5s ease-in-out, transform 0.3s ease-in-out;
    @media (min-width: 768px) {
      width: 30%;
      margin: 1.5%;
    }
    .imageContainer {
      width: 100%;
      padding-top: 56.25%;
      overflow: hidden;
      position: relative;
      img {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transition: transform 1s ease-in-out;
      }
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: scale(1.01);
      img {
        transform: scale(1.02);
      }
    }
    .textInfo {
      min-height: 80px;
      overflow: hidden;
      padding: 10px 10px 20px 10px;
      .title {
        margin: 0 5px 0 0;
        padding: 0;
        display: inline-block;
      }
      .channel {
        color: ${color.orange};
        font-size: 12px;
        line-height: 8px;
        display: inline-block;
        font-weight: bold;
      }
      .description {
        margin: 5px 0 0 0;
        padding: 0;
        font-size: 14px;
      }
    }

    @media (min-width: 768px) {
      &:first-child {
        font-size: 16px;
        width: 63%;
        margin: 1.5%;
        .channel {
          color: ${color.orange};
          font-size: 14px;
        }
      }
    }
  }
`;

export default HightLights;
