/* eslint-disable react/no-unescaped-entities */
/**
 *
 * Hero
 *
 */

import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import config from 'utils/config';
import { loaderDelay, navDelay } from 'utils/constants';
import EmailLink from './EmailLink';
import Prefix from './Prefix';
import Subtitle from './Subtitle';
import Text from './Text';
import Title from './Title';
import Wrapper from './Wrapper';

function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <Prefix>Hi, my name is</Prefix>;
  const two = <Title>Duc Tran.</Title>;
  const three = <Subtitle>I build things for the web.</Subtitle>;
  const four = (
    <Text>
      I'm a software engineer based in Ho Chi Minh, VN specializing in building
      (and occasionally designing) exceptional websites, applications, and
      everything in between.
    </Text>
  );
  const five = (
    <EmailLink className="btn-big" href={`mailto:${config.email}`}>
      Get In Touch
    </EmailLink>
  );
  const items = [one, two, three, four, five];

  return (
    <Wrapper id="hero">
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </Wrapper>
  );
}

export default Hero;
