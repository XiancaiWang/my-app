import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active">首页</NavLink>
      <NavLink to="/blog" activeClassName="active">博客</NavLink>
      <NavLink to="/about" activeClassName="active">关于我</NavLink>
    </nav>
  );
};

export default Navbar;
