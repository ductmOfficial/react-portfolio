/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import Biography from 'components/Biography';
import Contact from 'components/Contact';
import Featured from 'components/Featured';
import Hero from 'components/Hero';
import Jobs from 'components/Jobs';
import Project from 'components/Project';
import Layout from 'containers/Layout';

import Wrapper from './Wrapper';

export default function HomePage() {
  return (
    <Layout>
      <Helmet>
        <meta name="description" content="A Duc Tran application homepage" />
      </Helmet>

      <Wrapper className="fill-height">
        <Hero />
        <Biography />
        <Jobs />
        <Featured />
        <Project />
        <Contact />
      </Wrapper>
    </Layout>
  );
}
