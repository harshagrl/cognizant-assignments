import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { title, body } = this.props;
    return (
      <div style={{ borderBottom: '1px solid #ccc', marginBottom: '15px', paddingBottom: '10px', textAlign: 'left' }}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
