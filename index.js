import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// reducer
function reducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, amount: state.amount + 1 };
        default:
            return state;
    }
}

// store with middleware
const store = createStore(reducer, applyMiddleware(logger));

const history = [];

// global state
store.subscribe(() => {
    history.push(store.getState());
    console.log(history);
});

setInterval(() => {
    store.dispatch({ type: 'increment' });
}, 5000);
