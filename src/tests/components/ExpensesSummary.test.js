import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

it('should summarize 0 expenses', () => {
  const props = {
    expenseCount: 0,
    expensesTotal: 0,
  };
  expect(shallow(<ExpensesSummary {...props} />)).toMatchSnapshot();
});

it('should summarize one expense', () => {
  const props = {
    expenseCount: 1,
    expensesTotal: 98765,
  };
  expect(shallow(<ExpensesSummary {...props} />)).toMatchSnapshot();
});

it('should summarize multiple expenses', () => {
  const props = {
    expenseCount: 8,
    expensesTotal: 123456789,
  };
  expect(shallow(<ExpensesSummary {...props} />)).toMatchSnapshot();
});