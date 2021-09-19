/**
 *
 * Tests for ProjectItem
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import ProjectItem from '../index';

describe('<ProjectItem />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<ProjectItem />);
    expect(container.firstElementChild.tagName).toEqual('DIV');
  });
});
