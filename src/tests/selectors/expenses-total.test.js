import selectExpensesTotal from '../../selectors/expenses-total';
import { expenses } from '../fixtures/expenses';

it('should return 0 if no expenses', () => {
  const testExpenses = [];
  const total = selectExpensesTotal(testExpenses);
  expect(total).toBe(0);
});

it('should correctly add up a single expense', () => {
  const total = selectExpensesTotal([expenses[0]]);
  expect(total).toBe(195);
});

it('should return 0 if no expenses', () => {
  const total = selectExpensesTotal(expenses);
  expect(total).toBe(114195);
});