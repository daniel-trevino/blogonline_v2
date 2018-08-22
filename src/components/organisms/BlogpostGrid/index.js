import React from 'react';
import Postcard from '../../molecules/PostCard';

// Styles
import './BlogpostGrid.scss';

const arr = [1, 2, 3, 4];

const BlogpostGrid = () => (
  <div className="gridView">
    <div className="gridView__title">
      <h2>Latest Articles</h2>
    </div>

    <div className="container">
      <div className="row">
        {arr.map(() => (
          <div className="col-md-4">
            <Postcard />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BlogpostGrid;
