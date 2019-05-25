import { createStore } from 'redux';
import { addDrink, addChips, addSandwich } from './actions/lunchboxActions';
import { removeDrink, removeChips, removeSandwich } from './actions/lunchboxActions';
import { lunchboxReducer } from './reducers/lunchboxReducer';

const store = createStore(lunchboxReducer);

store.subscribe(() => {
  const state = store.getState();
  console.log('UPDATED', state);
});

store.dispatch(addDrink('Surge'));

store.dispatch(addDrink('Dr. Pepper'));


store.dispatch(removeDrink('Surge'));

store.dispatch(addSandwich('PB & Honey'));

store.dispatch(addChips('Zapps'));

store.dispatch(removeChips('Zapps'));

store.dispatch(removeSandwich('PB & Honey'));

store.dispatch(removeDrink('Dr. Pepper'));

store.dispatch({
  type: 'FILL_BOX',
  payload: {
    drink: 'water',
    sandwich: 'bread',
    chips: 'the worst'
  }
});

store.dispatch({
  type: 'EMPTY_BOX'
});

