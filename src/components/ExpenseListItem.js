import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'; // converts numbers to a desired format

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <NavLink to={`/edit/${id}/`}>
      <h3>{description}</h3>
    </NavLink>
    <ul>
      <li key={`${description}-${amount}`}>Amount: {numeral(amount / 100).format('$0,0.00')}</li>
      <li key={`${description}-${createdAt}`}>Created: {moment(createdAt).format('MMMM Do, YYYY')}</li>
    </ul>
  </div>
);

export default ExpenseListItem;