import { getComments } from './commentSelectors';

describe('comment Selectors tests', () => {
  it('getComments will grab all comments for a post', () => {
    const state = {
      comments: {
        2: ['woot', 'u-go girl'],
        3: ['stunning', 'flabergasted']
      }
    };

    const comments = getComments(state, 3);
    expect(comments).toEqual([
      'stunning',
      'flabergasted'
    ]);
  });
});
