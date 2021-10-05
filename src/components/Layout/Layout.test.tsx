import React from 'react';
import { customRender } from 'custom-render';
import Layout from './Layout';

test('renders content correctly', () => {
  const { getByTestId } = customRender(<Layout>
    <p data-testid="sample-paragraph">This is an example paragraph</p>
  </Layout>);

  const element = getByTestId('sample-paragraph');
  expect(element).toBeInTheDocument();
});
