import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

const Wrapper: React.FC = ({ children }) => {
  return <Router>
    {children}
  </Router>;
};

export const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult => render(ui, { wrapper: Wrapper, ...options });
