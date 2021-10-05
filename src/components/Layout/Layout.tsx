import React, { Fragment } from 'react';
import Header from 'components/Header/Header';

const Layout: React.FC = ({ children }) => {
  return <Fragment>
    <Header />
    {children}
  </Fragment>;
};

export default Layout;
