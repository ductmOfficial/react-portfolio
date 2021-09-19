/**
 *
 * Tests for Table
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Table from '../index';

describe('<Table />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<Table />);
    expect(container.firstElementChild.tagName).toEqual('DIV');
  });
});
