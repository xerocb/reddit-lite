import './App.css';
import React from 'react';
import HomePage from '../components/HomePage/HomePage';
import PostPage from '../components/PostPage/PostPage';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

function App() {
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