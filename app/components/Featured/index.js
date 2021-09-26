/**
 *
 * Featured
 *
 */

import PropTypes from 'prop-types';
import FeaturedItem from 'components/FeaturedItem';
import React, { useEffect, useRef } from 'react';
import config from 'utils/config';
import sr from 'utils/sr';
import Heading from './Heading';
import Wrapper from './Wrapper';

function Featured({ projects = [] }) {
  const { srConfig } = config;
  const featuredProjects = projects.slice(0, 3);

  const revealTitle = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100)),
    );
  }, []);

  return (
    <Wrapper id="projects">
      <Heading className="number-heading" ref={revealTitle}>
        Some Things I’ve Built
      </Heading>
      <div>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter } = node;
            const { title } = frontmatter;

            return (
              <FeaturedItem
                key={title}
                node={node}
                // eslint-disable-next-line no-return-assign
                ref={el => (revealProjects.current[i] = el)}
              />
            );
          })}
      </div>
    </Wrapper>
  );
}

export default Featured;

Featured.propTypes = {
  projects: PropTypes.array,
};
