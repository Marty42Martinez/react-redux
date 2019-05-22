import { lunchboxReducer } from './lunchboxReducer';
import { addDrink } from '../actions/lunchboxActions';

describe('lunchbox Reducer test', () => {
  it('can perform the addDrink action', () => {
    const initState = {
      drink: [],
      sandwich: [],
      chips: []
    };
    const result = lunchboxReducer(initState, addDrink('lemon'));
    expect(result).toEqual({
      drink: ['lemon'],
      sandwich: [],
      chips: []
    });
  });
});
