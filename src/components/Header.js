import React from 'react';
import { NavLink } from 'react-router-dom';  // Link and NavLink used for client-side routing

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Add an Expense</NavLink>
  </header>
);

export default Header;
