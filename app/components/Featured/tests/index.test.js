/**
 *
 * Tests for Featured
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Featured from '../index';

describe('<Featured />', () => {
  it('should render an <section> tag', () => {
    const { container } = render(<Featured />);
    expect(container.firstElementChild.tagName).toEqual('SECTION');
  });

  it('render a heading', () => {
    const { getByText } = render(<Featured />);
    expect(getByText('Some Things I’ve Built')).toBeTruthy();
  });
});
