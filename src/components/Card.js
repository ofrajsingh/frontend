import React from 'react';

const Card = ({ imageUrl, caption }) => {
  return (
    <div className="post">
      <img src={imageUrl} alt="Post" className="post-image" />
      <p className="post-caption">{caption}</p>
    </div>
  );
}

export default Card;
