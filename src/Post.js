import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

// import imageUrlBuilder from '@sanity/image-url';

const Post = props => {
  return (
    <article className="flex-1 post-container m-2">
      <p className="post-date pl-3">
        Posted {format(new Date(props.post.publishedAt), 'MMM d, yyyy')}
      </p>
      <div className="border border-gray-400 rounded shadow-lg p-3">
        <h1 className="post-title text-3xl">
          <Link to={`/post/${props.post.slug.current}`}>
            {props.post.title}
          </Link>
        </h1>
        <hr/>
        <h2 className="post-category">
          {props.categories
            .filter(c => props.post.categories.map(p => p._ref).includes(c._id))
            .map(l => l.title)}
        </h2>
        <BlockContent
          className="post-body"
          blocks={props.post.body}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
        />
      </div>
    </article>
  );
};

export default Post;
