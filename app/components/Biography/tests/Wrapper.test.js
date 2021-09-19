import React from 'react';
import { render } from 'react-testing-library';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('should render an <section> tag', () => {
    const { container } = render(<Wrapper />);
    expect(container.firstElementChild.tagName).toEqual('SECTION');
  });
});
