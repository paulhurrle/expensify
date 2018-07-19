import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'; // this is a css reset third party package
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Gas Bill', amount: 100, createdAt: -331000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Water Bill', amount: 75, createdAt: -1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 75, createdAt: -448000 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));