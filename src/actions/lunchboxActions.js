export const ADD_DRINK = 'ADD_DRINK';
export const addDrink = drink => {
  return {
    type: ADD_DRINK,
    payload: drink
  };
};

export const ADD_SANDWICH = 'ADD_SANDWICH';
export const addSandwich = sandwich => {
  return {
    type: ADD_SANDWICH,
    payload: sandwich
  };
};

export const ADD_CHIPS = 'ADD_CHIPS';
export const addChips = chips => {
  return {
    type: ADD_CHIPS,
    payload: chips
  };
};

