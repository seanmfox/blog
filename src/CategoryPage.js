import React from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';

const CategoryPage = props => {
  let { slug } = useParams();

  return (
    <div>
      {props.posts
        .filter(post =>
          post.categories
            .map(c => c._ref)
            .includes(
              props.categories.find(
                c => c.title.toLowerCase() === slug.toLowerCase()
              )._id
            )
        )
        .map(post => (
          <Post post={post} key={post._id} categories={props.categories} />
        ))}
    </div>
  );
};

export default CategoryPage;
