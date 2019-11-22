import React from 'react';
import PropTypes from 'prop-types';

function PostItem({ data }) {
  return (
    <div className="post-group">
      <header className="post-item">
        <div className="post-avatar">
          <img src={data.author.avatar} alt="" />
        </div>
        <div>
          <p className="author">{data.author.name}</p>
          <span className="date">{data.date}</span>
        </div>
      </header>
      <div className="divisor"></div>
      <div className="post-content">{data.content}</div>
      <div className="post-comments">
        {data.comments.map(comment => (
          <div key={comment.id} className="comment">
            <img className="comment-avatar" src={comment.author.avatar} />
            <div>
              <b>{comment.author.name}</b>
              <span>{comment.content}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostItem;
