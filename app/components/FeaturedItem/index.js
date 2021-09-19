/**
 *
 * FeaturedItem
 *
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import Content from './Content';
import Description from './Description';
import Image from './Image';
import Links from './Links';
import Overline from './Overline';
import TechList from './TechList';
import Title from './Title';
import Wrapper from './Wrapper';

const FeaturedItem = React.forwardRef(({ node }, ref) => {
  const { frontmatter, html } = node;
  const { external, title, tech, github, cover } = frontmatter;

  return (
    <Wrapper key={title} ref={ref}>
      <Content>
        <Overline>Featured Project</Overline>
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: html }} />
        <TechList>
          {tech && tech.map(techItem => <li key={techItem}>{techItem}</li>)}
        </TechList>
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
      </Content>
      <Image>
        <a href={external || (github || '#')}>
          <img src={cover} alt={title} className="img" />
        </a>
      </Image>
    </Wrapper>
  );
});

FeaturedItem.propTypes = {
  node: PropTypes.object,
};

export default FeaturedItem;
