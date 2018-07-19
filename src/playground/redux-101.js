import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({ // if the incrementBy property of the object passed in (destructured here) is not specified, defaults to 1
  type: 'INCREMENT',
  incrementBy // the same as setting incrementBy to be equal to the value of the incrementBy property passed in
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({ // if the decrementBy property of the object passed in (destructured here) is not specified, default to 1
  type: 'DECREMENT',
  decrementBy // the same as setting decrementBy to be equal to the value of the incrementBy property passed in
});

const resetCount = () => ({ type: 'RESET' });

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

// Reducers
// 1. Reducers are pure functions - output is only determined by the input (state and action), does not use anything outside of the function scope, nor does it change anything outside of the function scope
// 2. Never change state or action, just read them and return an object that returns a new state

const countReducer = (state = { count: 0, }, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default: 
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => { // this function gets called whenever store changes, and it's return value stops subscribe
  console.log(store.getState());
}); 

store.dispatch(incrementCount());

// store.dispatch({ 
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 100 }));

store.dispatch(decrementCount())

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 1001 }));