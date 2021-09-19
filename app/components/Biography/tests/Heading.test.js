import React from 'react';
import { render } from 'react-testing-library';

import Heading from '../Heading';

describe('<Heading />', () => {
  it('should render an <h2> tag', () => {
    const { container } = render(<Heading />);
    expect(container.firstElementChild.tagName).toEqual('H2');
  });

  it('should have a class attribute', () => {
    const { container } = render(<Heading />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });
});
