/**
 *
 * Tests for Jobs
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Jobs from '../index';

describe('<Jobs />', () => {
  it('should render an <section> tag', () => {
    const { container } = render(<Jobs />);
    expect(container.firstElementChild.tagName).toEqual('SECTION');
  });
});
