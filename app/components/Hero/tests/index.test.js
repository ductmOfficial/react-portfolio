/**
 *
 * Tests for Hero
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Hero from '../index';

describe('<Hero />', () => {
  it('should render an <section> tag', () => {
    const { container } = render(<Hero />);
    expect(container.firstElementChild.tagName).toEqual('SECTION');
  });
});
