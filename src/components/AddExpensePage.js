import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => { // by passing in an onSubmit prop here instead of within the ExpenseForm component directly, it makes ExpenseForm more reusable!
    this.props.addExpense(expense);
    this.props.history.push('/'); // push is accessed from the default props available via the Route component, setting a route of '/' which in this case is 'Dashboard'
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);