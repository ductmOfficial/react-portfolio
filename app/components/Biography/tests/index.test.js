/**
 *
 * Tests for Biography
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Biography from '../index';

describe('<Biography />', () => {
  it('should render an <section> tag', () => {
    const { container } = render(<Biography />);
    expect(container.firstElementChild.tagName).toEqual('SECTION');
  });

  it('should have a id attribute', () => {
    const { container } = render(<Biography />);
    const element = container.firstElementChild;
    expect(element.hasAttribute('id')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'about';
    const { container } = render(<Biography id={id} />);
    const element = container.firstElementChild;
    expect(element.id).toEqual(id);
  });

  it('render a heading', () => {
    const { getByText } = render(<Biography />);
    expect(getByText('About Me')).toBeTruthy();
  });

  it('the skill list', () => {
    const { getByText } = render(<Biography />);
    const skills = [
      'JavaScript (ES6+)',
      'Typescript',
      'ReactJS',
      'Vue JS',
      'HTML & (S)CSS',
      'Node.js',
    ];

    // eslint-disable-next-line no-plusplus
    for (let i = 0, len = skills.length; i < len; i++) {
      expect(getByText(skills[i])).toBeTruthy();
    }
  });
});
