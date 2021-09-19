/**
 *
 * Tests for Project
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Project from '../index';

describe('<Project />', () => {
  it('should render an <section> tag', () => {
    const { container } = render(<Project />);
    expect(container.firstElementChild.tagName).toEqual('SECTION');
  });
});
