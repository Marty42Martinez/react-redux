import React from 'react';
import AllPosts from '../containers/posts/AllPosts';
import CreatePost from '../containers/posts/CreatePost';

export default function App() {
  return (
    <>
      <CreatePost />
      <AllPosts />
    </>
  );
}
