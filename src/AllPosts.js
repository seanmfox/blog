import React from 'react';
import Post from './Post';

const AllPosts = props => {
  return (
    <div>
      {props.posts.map(post => (
        <Post post={post} key={post._id} categories={props.categories} />
      ))}
    </div>
  );
};

export default AllPosts;
