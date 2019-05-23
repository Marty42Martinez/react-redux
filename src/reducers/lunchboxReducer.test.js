import { lunchboxReducer } from './lunchboxReducer';
import { addDrink, addSandwich, addChips, removeChips, removeSandwich } from '../actions/lunchboxActions';

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
  it('can perform the removeChips action', () => {
    const initState = {
      drink: [],
      sandwich: [],
      chips: ['delicious']
    };

    const result = lunchboxReducer(initState, removeChips('delicious'));
    expect(result).toEqual({
      drink: [],
      sandwich: [],
      chips: []
    });
  });
  it('can perform the removeSandwich action', () => {
    const initState = {
      drink: [],
      sandwich: ['Ham'],
      chips: []
    };

    const result = lunchboxReducer(initState, removeSandwich('Ham'));
    expect(result).toEqual({
      drink: [],
      sandwich: [],
      chips: []
    });
  });
});
