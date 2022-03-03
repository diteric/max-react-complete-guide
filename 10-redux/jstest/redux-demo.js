const redux = require('redux');

// create a reducer to manipulate the data
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};

// register the reducer with a data store
const store = redux.createStore(counterReducer);

// create a store data subscriber to listen to the data change
const conterSubscriber = () => {
  console.log(store.getState());
};

// subscriber subscribe the store data change.
store.subscribe(conterSubscriber);

// trigger the data change, an action is dispatched
store.dispatch({ type: 'increment' });
