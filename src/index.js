import { createStore } from 'redux';

const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK': 
      return { ...state, drink: action.payload };
    case 'REMOVE_DRINK': 
      return { ...state, drink: null };
    case 'ADD_SANDWICH': 
      return { ...state, sandwich: action.payload };
    case 'REMOVE_SANDWICH': 
      return { ...state, sandwich: null };
    case 'ADD_CHIPS': 
      return { ...state, chips: action.payload };
    case 'REMOVE_CHIPS': 
      return { ...state, chips: null };
    case 'EMPTY_BOX':
      return { ...initialState };
    case 'FILL_BOX': 
      return { ...state, 
        drink: action.payload.drink,
        sandwich: action.payload.sandwich,
        chips: action.payload.chips
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

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'Surge'
});

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'PB & Honey'
});

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'Zapps VooDoo'
});

store.dispatch({
  type: 'REMOVE_CHIPS',
});

store.dispatch({
  type: 'REMOVE_SANDWICH',
});

store.dispatch({
  type: 'REMOVE_DRINK',
});

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

