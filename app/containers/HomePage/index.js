/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { useContent } from 'hooks';

import Biography from 'components/Biography';
import Contact from 'components/Contact';
import Featured from 'components/Featured';
import Hero from 'components/Hero';
import Jobs from 'components/Jobs';
import Project from 'components/Project';
import Layout from 'containers/Layout';

import Wrapper from './Wrapper';

export default function HomePage() {
  const { projects } = useContent('projects');
  const { jobs } = useContent('jobs');

  return (
    <Layout>
      <Wrapper className="fill-height">
        <Hero />
        <Biography />
        <Jobs jobs={jobs} />
        <Featured projects={projects} />
        <Project projects={projects} />
        <Contact />
      </Wrapper>
    </Layout>
  );
}
