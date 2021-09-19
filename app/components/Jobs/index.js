/* eslint-disable react/no-danger */
/**
 *
 * Jobs
 *
 */

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import config from 'utils/config';
import sr from 'utils/sr';
import { KEY_CODES } from 'utils/constants';
import jobsData from 'fixtures/jobs.json';

import Wrapper from './Wrapper';
import Heading from './Heading';
import Highlight from './Highlight';
import Inner from './Inner';
import TabButton from './TabButton';
import TabContent from './TabContent';
import TabList from './TabList';

function Jobs() {
  const [activeTabId, setActiveTabId] = useState(0);
  const revealContainer = useRef(null);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);

  useEffect(() => {
    sr.reveal(revealContainer.current, config.srConfig());
  }, []);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  useEffect(() => focusTab(), [tabFocus]);

  const onKeyDown = e => {
    if (e.key === KEY_CODES.ARROW_UP || e.key === KEY_CODES.ARROW_DOWN) {
      e.preventDefault();
      // Move up
      if (e.key === KEY_CODES.ARROW_UP) {
        setTabFocus(tabFocus - 1);
      }
      // Move down
      if (e.key === KEY_CODES.ARROW_DOWN) {
        setTabFocus(tabFocus + 1);
      }
    }
  };

  return (
    <Wrapper id="jobs" ref={revealContainer}>
      <Heading className="number-heading">Where I’ve Worked</Heading>
      <Inner>
        <TabList role="tablist" aria-label="Job tabs" onKeyDown={onKeyDown}>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { company } = node.frontmatter;

              return (
                <li key={`${company}`}>
                  <TabButton
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    // eslint-disable-next-line no-return-assign
                    ref={el => (tabs.current[i] = el)}
                    id={`tab-${i}`}
                    role="tab"
                    aria-selected={!!(activeTabId === i)}
                    aria-controls={`panel-${i}`}
                    tabIndex={activeTabId === i ? '0' : '-1'}
                  >
                    {company}
                  </TabButton>
                </li>
              );
            })}
          <Highlight activeTabId={activeTabId} />
        </TabList>

        {jobsData &&
          jobsData.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { title, url, company, range } = frontmatter;

            return (
              <CSSTransition
                key={`${url}`}
                in={activeTabId === i}
                timeout={250}
                classNames="fade"
              >
                <TabContent
                  id={`panel-${i}`}
                  role="tabpanel"
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeTabId !== i}
                  hidden={activeTabId !== i}
                >
                  <h3>
                    <span>{title}</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-link"
                      >
                        {company}
                      </a>
                    </span>
                  </h3>
                  <p className="range">{range}</p>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </TabContent>
              </CSSTransition>
            );
          })}
      </Inner>
    </Wrapper>
  );
}

export default Jobs;
