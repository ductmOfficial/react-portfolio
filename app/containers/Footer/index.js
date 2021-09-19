import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from 'utils/config';

import SocialLinks from './SocialLinks';
import Wrapper from './Wrapper';
import Credit from './Credit';

function Footer() {
  const { socialMedia } = config;
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    // if (process.env.NODE_ENV !== 'production') {
    //   return;
    // }
    // fetch('https://api.github.com/repos/ductran-94-dev/portfolio')
    fetch('https://api.github.com/repos/bchiang7/v4')
      .then(response => response.json())
      .then(json => {
        // eslint-disable-next-line camelcase
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      // eslint-disable-next-line no-console
      .catch(e => console.error(e));
  }, []);

  return (
    <Wrapper>
      <SocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url, prefix }) => (
              <li key={`${url}`}>
                <a href={url} aria-label={name}>
                  <FontAwesomeIcon icon={[prefix, name]} />
                </a>
              </li>
            ))}
        </ul>
      </SocialLinks>

      <Credit tabIndex="-1">
        <a
          href="https://github.com/ductmOfficial/portfolio"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <div>Built by Duc Tran (Designed by Brittany Chiang)</div>

          {githubInfo.stars && githubInfo.forks && (
            <div className="github-stats" style={{ display: 'none' }}>
              <span>
                <FontAwesomeIcon icon={['fas', 'star']} />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <FontAwesomeIcon icon={['fas', 'code-branch']} />
                <span>{githubInfo.forks.toLocaleString()}</span>
              </span>
            </div>
          )}
        </a>
      </Credit>
    </Wrapper>
  );
}

export default Footer;
