/**
 *
 * Tests for Side
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Side from '../index';

describe('<Side />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<Side />);
    expect(container.firstElementChild.tagName).toEqual('DIV');
  });
});
