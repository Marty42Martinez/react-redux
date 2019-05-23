import { createComment, CREATE_COMMENT } from "./commentActions";

describe('Comment Actions tests', () => {
  it('can create a comment', () => {
    const result = createComment({
      post_index: 1,
      body: 'Woah, how cool'
    });
    expect(result).toEqual({
      type: CREATE_COMMENT,
      payload: {
        post_index: 1,
        body: 'Woah, how cool'
      }
    });
  });
});
