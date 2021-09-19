/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components';
import TransitionStyles from 'styles/transitionStyles';
import Fonts from 'styles/font';
import mixins from 'styles/mixins';

const GlobalStyle = createGlobalStyle`
  ${Fonts};

  :root {
    --pallete-white: ${props => props.theme.pallete.common.white};

    --pallete-primary: ${props => props.theme.pallete.primary.main};
    --pallete-primary-dark: ${props => props.theme.pallete.primary.dark};
    --pallete-primary-light: ${props => props.theme.pallete.primary.light};
    --pallete-primary-lightest: ${props => props.theme.pallete.primary.lightest};
    --pallete-primary-shadow: ${props => props.theme.pallete.primary.shadow};

    --pallete-secondary: ${props => props.theme.pallete.secondary.main};
    --pallete-secondary-light: ${props => props.theme.pallete.secondary.light};
    --pallete-secondary-lightest: ${props => props.theme.pallete.secondary.lightest};

    --pallete-green: ${props => props.theme.pallete.green.main};
    --pallete-green-tint: ${props => props.theme.pallete.green.tint};

    --font-sans: ${props => props.theme.typography.fontFamily};
    --font-mono: ${props => props.theme.typography.fontMono};
  
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
  
    --border-radius: ${props => props.theme.shape.borderRadius}px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;
  
    --tab-height: 42px;
    --tab-width: 170px;
  
    --easing: ${props => props.theme.transitions.easing};
    --transition: all ${props => props.theme.transitions.duration} ${props => props.theme.transitions.easing};
  
    --hamburger-width: 30px;
  
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--pallete-secondary);
    color: var(--pallete-secondary-lightest);
  }

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--pallete-primary);
    color: var(--pallete-secondary);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  body.fontLoaded {
    font-family: var(--font-sans);
  }

  #app {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;
  
    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }
  
    &.fill-height {
      padding: 0 150px;
  
      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }
  
  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
  
    @media (max-width: 768px) {
      padding: 80px 0;
    }
  
    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--pallete-secondary-lightest);
    line-height: 1.1;
  }
  
  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }
  
  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }
  
  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;
  
    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--pallete-green);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;
  
      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }
  
    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--pallete-primary-lightest);
  
      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }
  
  img,
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  
  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }
  
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }
  
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
  
    &:hover,
    &:focus {
      color: var(--pallete-green);
    }
  
    &.inline-link {
      ${() => mixins.inlineLink};
    }
  }
  
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }
  
  input, textarea {
    border-radius: 0;
    outline: 0;
  
    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
  
  p {
    margin: 0 0 15px 0;
  
    &:last-child,
    &:last-of-type {
      margin: 0;
    }
  
    & > a {
      ${() => mixins.inlineLink};
    }
  
    & > code {
      background-color: var(--pallete-primary-light);
      color: var(--pallete-white);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }
  
  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--pallete-green);
        }
      }
    }
  }
  
  blockquote {
    border-left-color: var(--pallete-green);
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;
  
    p {
      font-style: italic;
      font-size: 24px;
    }
  }
  
  hr {
    background-color: var(--pallete-primary-lightest);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }
  
  code {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }
  
  #logo {
    color: var(--pallete-green);
  }
  
  .overline {
    color: var(--pallete-green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }
  
  .subtitle {
    color: var(--pallete-green);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }
  
    a {
      ${() => mixins.inlineLink};
      line-height: 1.5;
    }
  }
  
  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: var(--pallete-green);
  
    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }
  
    a {
      ${() => mixins.inlineLink};
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }
  
  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--pallete-green);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--pallete-primary-lightest);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }

  .btn-big {
    color: var(--pallete-green);
    background-color: transparent;
    border: 1px solid var(--pallete-green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--pallete-green-tint);
    }
    &:after {
      display: none !important;
    }
  }

  box-shadow {
    box-shadow: 0 10px 30px -15px var(--pallete-primary-shadow);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--pallete-primary-shadow);
    }
  }
  
  ${TransitionStyles};
`;

export default GlobalStyle;
