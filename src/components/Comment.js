
import React from 'react';

export default function Comment(props) {
  const { author: {name, avatar}, content} = props.data;

  return (
    <div className="commentView">
      <img className="commentAvatar" src={avatar} />
      <p className="comment">
        <span>{name}</span>
        {content}
      </p>
    </div>
  );
}