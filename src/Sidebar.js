import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = props => {
  return (
    <div className="m-2">
      <div className="border border-gray-400 rounded shadow-lg pl-2 py-3">
        <h3 className="underline pb-2">Social Media</h3>
        <div className="social-media-icons">
          <p>
            Twitter:{' '}
            <a href="https://www.twitter.com/geekypghrunner" target="_blank">
              @GeekyPGHRunner
            </a>
          </p>
          <p>
            Instagram:{' '}
            <a href="https://www.instagram.com/geekypghrunner" target="_blank">
              @GeekyPGHRunner
            </a>
          </p>
        </div>
      </div>
      <div className="border border-gray-400 rounded shadow-lg pl-2 py-3 mt-4">
        <h3 className="underline pb-2">Recent Posts</h3>
        {props.posts[0].map(post => (
          <p key={post._id}>
            <Link to={`/post/${post.slug.current}`}>
              {post.title}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
