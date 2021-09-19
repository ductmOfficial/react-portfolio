/**
 *
 * Layout
 *
 */

import Loader from 'components/Loader';
import Email from 'components/Email';
import Header from 'components/Header';
import Social from 'components/Social';
import Footer from 'containers/Footer';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLocation } from 'containers/App/selectors';

import Wrapper from './Wrapper';

export function Layout({ children, location }) {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

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
  }, [isLoading]);

  return (
    <React.Fragment>
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
