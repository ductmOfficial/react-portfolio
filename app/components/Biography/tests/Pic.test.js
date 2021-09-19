import React from 'react';
import { render } from 'react-testing-library';

import Pic from '../Pic';

describe('<Pic />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<Pic />);

    expect(container.firstElementChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const { container } = render(<Pic />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });
});
