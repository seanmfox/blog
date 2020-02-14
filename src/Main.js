import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Switch, Route } from 'react-router-dom';
import PostPage from './PostPage';
import AllPosts from './AllPosts';
import CategoryPage from './CategoryPage';

const Main = () => {
  const sanityClient = require('@sanity/client');

  const client = sanityClient({
    projectId: 'm5567poz',
    dataset: 'production',
    useCdn: false
  });

  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getPosts = async () => {
    await client
      .fetch(
        `*[_type == "post"]{publishedAt, _createdAt, _id, _type, author,
           categories, slug, title, body[]{..., "asset": asset->}}`,
        {}
      )
      .then(resp => {
        setPosts(resp);
      });
  };

  const getCategories = async () => {
    await client.fetch('*[_type == "category"]', {}).then(resp => {
      setCategories(resp);
    });
  };

  useEffect(() => {
    getPosts();
    getCategories();
  }, []);

  return (
    <div className="flex-grow flex-shrink-0 flex mt-3 container">
      <div className="w-4/5">
        <Switch>
          <Route exact path="/">
            <AllPosts posts={posts} categories={categories} />
          </Route>
          <Route path="/post/:slug">
            <PostPage posts={posts} categories={categories} />
          </Route>
          <Route path="/categories/:slug">
            <CategoryPage posts={posts} categories={categories} />
          </Route>
        </Switch>
      </div>
      <div className="w-1/5">
        <Sidebar />
      </div>
    </div>
  );
};

export default Main;
