import React from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style';

// Styles
import './PostCard.scss';

const PostCard = () => (
  <div className="postcard">
    <Card
      hoverable
      cover={(
        <img
          alt="example"
          src="https://images.fireside.fm/podcasts/images/b/bc7f1faf-8aad-4135-bb12-83a8af679756/cover_medium.jpg"
        />
)}
    >
      <div className="postcard__meta">
        <div className="postcard__date">21 Jan 2018</div>
        <div className="postcard__author">Daniel</div>
      </div>
    </Card>
  </div>
);

export default PostCard;
