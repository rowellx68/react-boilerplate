import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return <nav>
    <NavLink data-testid='link-home' to="/">Home</NavLink>
  </nav>;
};

export default Header;
