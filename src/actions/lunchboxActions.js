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

export const REMOVE_DRINK = 'REMOVE_DRINK';
export const removeDrink = drink => {
  return {
    type: REMOVE_DRINK,
    payload: drink
  };
};

export const REMOVE_SANDWICH = 'REMOVE_SANDWICH';
export const removeSandwich = sandwich => {
  return {
    type: REMOVE_SANDWICH,
    payload: sandwich
  };
};

export const REMOVE_CHIPS = 'REMOVE_CHIPS';
export const removeChips = chips => {
  return {
    type: REMOVE_CHIPS,
    payload: chips
  };
};

