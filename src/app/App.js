import './App.css';
import React, { useEffect } from 'react';
import HomePage from '../components/HomePage/HomePage';
import PostPage from '../components/PostPage/PostPage';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from '../features/posts/postsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(''));
  },[dispatch]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<HomePage />} />
        <Route path='/post/:id' element={<PostPage />} />
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;