export const ADD_DRINK = 'ADD_DRINK';
export const addDrink = drink => {
  return {
    type: ADD_DRINK,
    payload: drink
  };
};

