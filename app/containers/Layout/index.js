/**
 *
 * Layout
 *
 */

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLocation } from 'containers/App/selectors';

import Loader from 'components/Loader';
import Head from 'components/Head';
import Email from 'components/Email';
import Header from 'components/Header';
import Social from 'components/Social';
import Footer from 'containers/Footer';
import Wrapper from './Wrapper';

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

export function Layout({ children, location }) {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'

      setTimeout(() => {
        const el = document.getElementById(id);

        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);

  return (
    <React.Fragment>
      <Head />

      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <Wrapper>
          <Header isHome={isHome} />
          <Social isHome={isHome} />
          <Email isHome={isHome} />

          <div id="content">
            {children}
            <Footer />
          </div>
        </Wrapper>
      )}
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Layout);
