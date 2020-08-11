import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, addComment } = props;

  const wrappedAddComment = event => {
    addComment(event.target.previousSibling.previousSibling.value,
      event.target.previousSibling.value);
      // extremely hackish; relies on the entry fields being in a specific layout
  };

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(comment => 
        <Comment key={comment.id} comment={comment} />
      )}
      <input
        type="text"
        placeholder="Username"
      />
      <input
        type="text"
        placeholder="Enter your comment here"
      />
      <button onClick={wrappedAddComment}>Comment</button>
    </div>
  );
};

export default Comments;
