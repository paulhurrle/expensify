import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import { expenses } from '../fixtures/expenses';
import { toBuffer } from 'ip';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[0].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '-1' };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: 99,
    description: '99 problems',
    note: 'but being vegan ain\'t one of them',
    amount: 10000,
    createdAt: moment(),
  };
  const action = { type: 'ADD_EXPENSE', expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const note = 'I just edited my note!';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe(note);
});

test('should not edit expense if id not found', () => {
  const note = 'I just edited my note!';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});