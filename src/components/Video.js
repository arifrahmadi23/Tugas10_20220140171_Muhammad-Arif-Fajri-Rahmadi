// src/components/Video.js
import React from 'react';
import Thumbnail from './Thumbnail'; // Pastikan Anda memiliki komponen Thumbnail
import LikeButton from './LikeButton'; // Pastikan Anda memiliki komponen LikeButton

function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}

export default Video;
    