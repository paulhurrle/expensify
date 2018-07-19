import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map((expense) => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

// define the higher order component here using the connect function
// connect takes a function as an argument that returns an object containing the component needs to access in the store
// export default the HOC
export default connect(mapStateToProps)(ExpenseList);