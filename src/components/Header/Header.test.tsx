import React from 'react';
import { customRender } from 'custom-render';
import Header from './Header';

test('renders the header correctly', () => {
  const { getByTestId } = customRender(<Header />);
  const element = getByTestId('link-home');
  expect(element).toBeInTheDocument();
});
