import React from 'react';
import { NavLink } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <NavLink to={`/edit/${id}/`}>
      <h3>{description}</h3>
    </NavLink>
    <ul>
      <li key={`${description}-${amount}`}>Amount: {amount}</li>
      <li key={`${description}-${createdAt}`}>Created: {createdAt}</li>
    </ul>
  </div>
);

export default ExpenseListItem;