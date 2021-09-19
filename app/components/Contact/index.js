/* eslint-disable react/no-unescaped-entities */
/**
 *
 * Contact
 *
 */

import React, { useEffect, useRef } from 'react';
import config from 'utils/config';
import sr from 'utils/sr';

import Wrapper from './Wrapper';
import EmailLink from './EmailLink';
import Overline from './Overline';
import Title from './Title';

function Contact() {
  const { srConfig, email } = config;
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Wrapper id="contact" ref={revealContainer}>
      <Overline className="number-heading">What’s Next?</Overline>
      <Title>Get In Touch</Title>
      <p>
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <EmailLink className="btn-big" href={`mailto:${email}`}>
        Say Hello
      </EmailLink>
    </Wrapper>
  );
}

export default Contact;
