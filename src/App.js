import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogPostDetails from "./components/BlogPostDetails";
import Navbar from "./components/Navbar";
import About from "./components/About";
import BlogPostList from "./components/BlogPostList";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <BlogPostList />
      </>
    ),
  },
  {
    path: "/post/:id",
    element: (
      <>
        <Navbar />
        <BlogPostDetails />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
