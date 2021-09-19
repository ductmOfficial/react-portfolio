/**
 *
 * Side
 *
 */

import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { loaderDelay } from 'utils/constants';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

function Side({ isHome, orientation, children, ...props }) {
  const [isMounted, setIsMounted] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timeout);
  }, [isHome]);
  return (
    <Wrapper {...props} orientation={orientation}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition
            classNames={isHome ? 'fade' : ''}
            timeout={isHome ? loaderDelay : 0}
          >
            {children}
          </CSSTransition>
        )}
      </TransitionGroup>
    </Wrapper>
  );
}

Side.propTypes = {
  isHome: PropTypes.bool,
  orientation: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Side;
