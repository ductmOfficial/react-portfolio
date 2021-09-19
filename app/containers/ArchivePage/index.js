/**
 *
 * ArchivePage
 *
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Table from 'components/Table';
import Layout from 'containers/Layout';
import projects from 'fixtures/projects.json';
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import config from 'utils/config';
import sr from 'utils/sr';

export function ArchivePage() {
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    if (sr) {
      sr.reveal(revealTitle.current, config.srConfig());
      sr.reveal(revealTable.current, config.srConfig(200, 0));
      revealProjects.current.forEach(
        (ref, i) => sr && sr.reveal(ref, config.srConfig(i * 10)),
      );
    }
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Archive</title>
        <meta name="description" content="Description of ArchivePage" />
      </Helmet>

      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">Archive</h1>
          <p className="subtitle">A big list of things I’ve worked on</p>
        </header>

        <Table>
          <table ref={revealTable}>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-mobile">Made at</th>
                <th className="hide-on-mobile">Built with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 &&
                projects.map(({ node }, i) => {
                  const {
                    date,
                    github,
                    external,
                    ios,
                    android,
                    title,
                    tech,
                    company,
                  } = node.frontmatter;
                  return (
                    <tr
                      key={title}
                      // eslint-disable-next-line no-return-assign
                      ref={el => (revealProjects.current[i] = el)}
                    >
                      <td className="overline year">{`${new Date(
                        date,
                      ).getFullYear()}`}</td>

                      <td className="title">{title}</td>

                      <td className="company hide-on-mobile">
                        {company ? <span>{company}</span> : <span>—</span>}
                      </td>

                      <td className="tech hide-on-mobile">
                        {tech.length > 0 &&
                          tech.map(item => (
                            <span key={item}>
                              {item}
                              {''}
                              {i !== tech.length - 1 && (
                                <span className="separator">&middot;</span>
                              )}
                            </span>
                          ))}
                      </td>

                      <td className="links">
                        <div>
                          {external && (
                            <a href={external} aria-label="External Link">
                              <FontAwesomeIcon
                                icon={['fas', 'external-link-alt']}
                              />
                            </a>
                          )}
                          {github && (
                            <a href={github} aria-label="GitHub Link">
                              <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                          )}
                          {ios && (
                            <a href={ios} aria-label="Apple App Store Link">
                              <FontAwesomeIcon icon={['fab', 'apple']} />
                            </a>
                          )}
                          {android && (
                            <a
                              href={android}
                              aria-label="Google Play Store Link"
                            >
                              PlayStore
                              <FontAwesomeIcon icon={['fab', 'google-play']} />
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Table>
      </main>
    </Layout>
  );
}

export default ArchivePage;
