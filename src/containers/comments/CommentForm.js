import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    comment: ''
  }

  updateComment = ({ target }) => {
    this.setState({ comment: target.value });
  }

  render() {
    const { comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea value={comment} onChange={this.updateComment}></textarea>
        <button>Submit</button>
      </form>
    );
  }
}
