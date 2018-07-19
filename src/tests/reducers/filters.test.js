import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' }); // the action with type '@@INIT' is the default whenever redux store is initiated on a page, as seen in Redux dev tools
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount',
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const value = 'test';
  const action = { type: 'SET_TEXT_FILTER', text: value };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(value);
});

test('should set startDate filter', () => {
  const date = moment(0).add(3, 'years');
  const action = { type: 'SET_START_DATE', date: date }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(date);
});

test('should set endDate filter', () => {
  const date = moment(0).add(10, 'days');
  const action = { type: 'SET_END_DATE', date: date }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(date);
});