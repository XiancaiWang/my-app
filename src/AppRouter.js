import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BlogListPage from './BlogListPage';
import BlogPostPage from './BlogPostPage';
import AboutPage from './AboutPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} index />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
