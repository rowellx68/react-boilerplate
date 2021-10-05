import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './Home';

test('renders correct elements', () => {
  const { getByText } = render(<HomePage/>);
  const element = getByText(/home page/i);

  expect(element).toBeInTheDocument();
});
