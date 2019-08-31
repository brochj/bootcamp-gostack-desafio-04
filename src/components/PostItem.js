
import React from 'react';
import Comment from './Comment';

export default function PostItem(props) {
  const { author, date, content, comments } = props;

  return (
    <div className="postItem">

      <div className="postHeader">
        <img className="postAvatar" src={author.avatar} />
        <div className="postDetails">
          <span id="postAuthor">{author.name}</span>
          <span id="postDate">{date}</span>
        </div>
      </div>


      <div className="postContent">
        <p>{content}</p>
      </div>

      <div className="separator" />

      <div className="postComments">
        {comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </div>

    </div>
  );
}

