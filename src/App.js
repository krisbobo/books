import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Categories from './components/categories';
import Books from './components/books';

const App = () => (
  <div className="main-container">
    <Header />
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Books />
        }
        />
        <Route
          exact
          path="/categories"
          element={(
            <div className="container">
              <Categories />
            </div>
          )}
        />
      </Routes>
    </div>
  </div>
);

export default App;
