/**
 *
 * Tests for Contact
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Contact from '../index';

describe('<Contact />', () => {
  it('should render an <section> tag', () => {
    const { container } = render(<Contact />);
    expect(container.firstElementChild.tagName).toEqual('SECTION');
  });

  it('should have a id attribute', () => {
    const { container } = render(<Contact />);
    const element = container.firstElementChild;
    expect(element.hasAttribute('id')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'contact';
    const { container } = render(<Contact id={id} />);
    const element = container.firstElementChild;
    expect(element.id).toEqual(id);
  });
});
