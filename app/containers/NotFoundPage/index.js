/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Helmet } from 'react-helmet';
import { navDelay } from 'utils/constants';

import Layout from 'containers/Layout';
import Button from './Button';
import Wrapper from './Wrapper';
import Title from './Title';
import Subtitle from './Subtitle';

import messages from './messages';

export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout>
      <Helmet title="Page Not Found" />

      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={500} classNames="fadeup">
            <Wrapper className="fillHeight">
              <Title>404</Title>
              <Subtitle>
                <FormattedMessage {...messages.header} />
              </Subtitle>
              <Button className="btn-big" to="/">
                Go Home
              </Button>
            </Wrapper>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Layout>
  );
}
