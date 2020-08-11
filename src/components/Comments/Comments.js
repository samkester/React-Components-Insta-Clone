import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, addComment } = props;

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
      <button onClick={() => addComment("test name", "test comment")}>Comment</button>
    </div>
  );
};

export default Comments;
