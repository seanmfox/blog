import React from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';

const PostPage = props => {
  let { slug } = useParams();

  return (
    <div>
      {props.posts
        .filter(post => slug === post.slug.current)
        .map(post => (
          <Post
            post={post}
            key={post._id}
            categories={props.categories}
          />
        ))}
    </div>
  );
};

export default PostPage;
