import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header';
import store from './redux/configureStore';
import Categories from './components/categories';
import Books from './components/books';

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
