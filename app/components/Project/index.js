/**
 *
 * Project
 *
 */

import ProjectItem from 'components/ProjectItem';
import projectData from 'fixtures/projects.json';
import React, { useEffect, useRef, useState } from 'react';
import config from 'utils/config';
import sr from 'utils/sr';
import ArchiveLink from './ArchiveLink';
import Grid from './Grid';
import Heading from './Heading';
import MoreButton from './MoreButton';
import Wrapper from './Wrapper';

const GRID_LIMIT = 6;

function Project() {
  const { srConfig } = config;
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100)),
    );
  }, []);

  const firstSix = projectData.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projectData : firstSix;

  return (
    <Wrapper id="projects">
      <Heading ref={revealTitle}>Other Noteworthy Projects</Heading>
      <ArchiveLink
        className="inline-link"
        to="/archive"
        ref={revealArchiveLink}
      >
        view the archive
      </ArchiveLink>

      <Grid>
        {projectsToShow &&
          projectsToShow.map(({ node }, i) => {
            const { frontmatter } = node;
            const { title } = frontmatter;

            return (
              <ProjectItem
                key={title}
                node={node}
                // eslint-disable-next-line no-return-assign
                ref={el => (revealProjects.current[i] = el)}
                style={{
                  transitionDelay: `${
                    i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                  }ms`,
                }}
              />
            );
          })}
      </Grid>
      <MoreButton
        onClick={() => setShowMore(!showMore)}
        hidden={projectData.length <= GRID_LIMIT}
      >
        Show {showMore ? 'Less' : 'More'}
      </MoreButton>
    </Wrapper>
  );
}

export default Project;
