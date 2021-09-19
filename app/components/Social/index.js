/**
 *
 * Social
 *
 */

import Side from 'components/Side';
import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from 'utils/config';

import Anchor from './Anchor';
import List from './List';
import ListItem from './ListItem';
import Wrapper from './Wrapper';

function Social({ isHome }) {
  const { socialMedia } = config;

  return (
    <Side isHome={isHome} orientation="left">
      <Wrapper>
        <List>
          {socialMedia &&
            socialMedia.map(({ url, name, prefix }) => (
              <ListItem key={`${url}`}>
                <Anchor
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={name}
                >
                  <FontAwesomeIcon icon={[prefix, name]} />
                </Anchor>
              </ListItem>
            ))}
        </List>
      </Wrapper>
    </Side>
  );
}

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
