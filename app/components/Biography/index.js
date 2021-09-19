/* eslint-disable react/no-unescaped-entities */
/**
 *
 * Biography
 *
 */

import React, { useEffect, useRef } from 'react';
import avatarJPG from 'images/avatar.jpg';
import config from 'utils/config';
import sr from 'utils/sr';

import Heading from './Heading';
import Inner from './Inner';
import Pic from './Pic';
import Text from './Text';
import Wrapper from './Wrapper';

function Biography() {
  const { srConfig } = config;
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'Typescript',
    'ReactJS',
    'Vue JS',
    'HTML & (S)CSS',
    'Node.js',
  ];

  return (
    <Wrapper ref={revealContainer} id="about">
      <Heading className="number-heading">About Me</Heading>
      <Inner>
        <Text>
          <div>
            <p>Hello! I'm Duc, a software engineer based in Ho Chi Minh, VN.</p>

            <p>
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performant
              experiences.
            </p>

            <p>
              Shortly after graduating from{' '}
              <a
                href="https://sgu.edu.vn/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Sai Gon University
              </a>
              , I joined the engineering team at{' '}
              <a
                href="https://imad.com.vn/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                IMAD Technology
              </a>{' '}
              where I work on a wide variety of interesting and meaningful
              projects on a daily basis.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </Text>
        <Pic>
          <div className="wrapper box-shadow">
            <img src={avatarJPG} alt="Avatar" className="img" />
          </div>
        </Pic>
      </Inner>
    </Wrapper>
  );
}

export default Biography;
