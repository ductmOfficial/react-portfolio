/**
 *
 * Menu
 *
 */

import config from 'utils/config';
import { useOnClickOutside } from 'hooks';
import { KEY_CODES } from 'utils/constants';
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import HamburgerButton from './HamburgerButton';
import Sidebar from './Sidebar';
import Wrapper from './Wrapper';
import ResumeLink from './ResumeLink';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const wrapperRef = useRef();

  let menuFocusables;
  let firstFocusableEl;
  let lastFocusableEl;

  const setFocusables = () => {
    menuFocusables = [
      buttonRef.current,
      ...Array.from(navRef.current.querySelectorAll('a')),
    ];
    [firstFocusableEl] = menuFocusables;
    lastFocusableEl = menuFocusables[menuFocusables.length - 1];
  };

  const handleBackwardTab = e => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl.focus();
    }
  };

  const handleForwardTab = e => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      lastFocusableEl.focus();
    }
  };

  const onKeyDown = e => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setMenuOpen(false);
        break;
      }

      case KEY_CODES.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab(e);
        } else {
          handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  const onResize = e => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    setFocusables();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  return (
    <Wrapper>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div ref={wrapperRef}>
        <HamburgerButton
          onClick={toggleMenu}
          menuOpen={menuOpen}
          ref={buttonRef}
        >
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </HamburgerButton>

        <Sidebar
          menuOpen={menuOpen}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 1 : -1}
        >
          <nav ref={navRef}>
            {config.navLinks && (
              <ol>
                {config.navLinks.map(({ url, name }) => (
                  <li key={name}>
                    <Link to={url}>{name}</Link>
                  </li>
                ))}
              </ol>
            )}

            <ResumeLink className="btn-big" href="/resume.pdf">
              Resume
            </ResumeLink>
          </nav>
        </Sidebar>
      </div>
    </Wrapper>
  );
}

Menu.propTypes = {};

export default Menu;
