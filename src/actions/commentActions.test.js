import { createComment, CREATE_COMMENT, deleteComment, DELETE_COMMENT } from "./commentActions";

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

  it('can delete a comment', () => {
    const result = deleteComment({
      post_index: 4,
      comment_index: 2
    });
    expect(result).toEqual({
      type: DELETE_COMMENT,
      payload: {
        post_index: 4,
        comment_index: 2
      }
    });
  });
});
