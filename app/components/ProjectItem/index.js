/**
 *
 * ProjectItem
 *
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import Description from './Description';
import Inner from './Inner';
import Links from './Links';
import TechList from './TechList';
import Title from './Title';
import Top from './Top';
import Wrapper from './Wrapper';

const ProjectItem = React.forwardRef(({ node, ...restProps }, ref) => {
  const { frontmatter, html } = node;
  const { external, title, tech, github } = frontmatter;

  return (
    <Wrapper ref={ref} key={title} tabIndex={0} {...restProps}>
      <Inner>
        <header>
          <Top>
            <div className="folder">
              <FontAwesomeIcon icon={['far', 'folder-open']} />
            </div>
            <Links>
              {github && (
                <a href={github} aria-label="GitHub Link">
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
              )}
              {external && (
                <a href={external} aria-label="External Link">
                  <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
                </a>
              )}
            </Links>
          </Top>
          <Title>{title}</Title>
          <Description dangerouslySetInnerHTML={{ __html: html }} />
        </header>
        <footer>
          <TechList>
            {tech.map(techItem => (
              <li key={techItem}>{techItem}</li>
            ))}
          </TechList>
        </footer>
      </Inner>
    </Wrapper>
  );
});

ProjectItem.propTypes = {
  node: PropTypes.object,
};

export default ProjectItem;
