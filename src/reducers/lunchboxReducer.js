import { ADD_DRINK, ADD_CHIPS, ADD_SANDWICH  } from '../actions/lunchboxActions';
import { REMOVE_DRINK, REMOVE_CHIPS, REMOVE_SANDWICH } from '../actions/lunchboxActions';

const initialState = {
  drink: [],
  sandwich: [],
  chips: []
};

export function lunchboxReducer(state = initialState, action) {
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
