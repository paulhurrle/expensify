import React, { Component } from 'react';
import pluralize from 'pluralize';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export class ExpensesSummary extends Component {
  render() {
    const { expenseCount, expensesTotal } = this.props;

    return (
      <div>
        <h3>Viewing {expenseCount} {pluralize('expense', expenseCount)} totalling {numeral(expensesTotal / 100).format('$0,0.00')}</h3>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);