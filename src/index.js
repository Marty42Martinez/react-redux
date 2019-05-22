import { createStore } from 'redux';
import { ADD_DRINK, addDrink, ADD_CHIPS, addChips, ADD_SANDWICH, addSandwich } from './actions/lunchboxActions';
import { REMOVE_DRINK, removeDrink, REMOVE_CHIPS, removeChips, REMOVE_SANDWICH, removeSandwich } from './actions/lunchboxActions';
const initialState = {
  drink: [],
  sandwich: [],
  chips: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK: 
      return { ...state, drink: [...state.drink, action.payload] };
    case REMOVE_DRINK: 
      return { ...state, drink: state.drink.filter(item => item != action.payload) };
    case ADD_SANDWICH: 
      return { ...state, sandwich: [...state.sandwich, action.payload] };
    case REMOVE_SANDWICH: 
      return { ...state, sandwich: state.sandwich.filter(item => item != action.payload) };
    case ADD_CHIPS: 
      return { ...state, chips: [...state.chips, action.payload] };
    case REMOVE_CHIPS: 
      return { ...state, chips: state.chips.filter(item => item != action.payload) };
    case 'EMPTY_BOX':
      return { ...initialState };
    case 'FILL_BOX': 
      return {  
        drink: [...state.drink, action.payload.drink],
        sandwich: [...state.sandwich, action.payload.sandwich],
        chips: [...state.chips, action.payload.chips]
      };
    
    default: 
      return state;
  }
}
const store = createStore(reducer);

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

