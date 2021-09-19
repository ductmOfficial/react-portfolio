/**
 *
 * Tests for Email
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Email from '../index';

describe('<Email />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<Email />);
    expect(container.firstElementChild.tagName).toEqual('DIV');
  });

  it('should have a orientation attribute', () => {
    const { container } = render(<Email />);
    const element = container.firstElementChild;
    expect(element.hasAttribute('orientation')).toBe(true);
  });
});
