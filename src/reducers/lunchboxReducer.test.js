import { lunchboxReducer } from './lunchboxReducer';
import { addDrink, addSandwich, addChips } from '../actions/lunchboxActions';

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
  it('can perform the addSandwich action', () => {
    const initState = {
      drink: [],
      sandwich: [],
      chips: []
    };
    const result = lunchboxReducer(initState, addSandwich('mayonnaise'));
    expect(result).toEqual({
      drink: [],
      sandwich: ['mayonnaise'],
      chips: []
    });
  });
  it('can perform the addChips action', () => {
    const initState = {
      drink: [],
      sandwich: [],
      chips: []
    };
    const result = lunchboxReducer(initState, addChips('Salty'));
    expect(result).toEqual({
      drink: [],
      sandwich: [],
      chips: ['Salty']
    });
  });
});
