import React from 'react';
import BookInput from './addBook';
import BookList from './bookList';

const Books = () => (
  <div className="book-column">
    <BookList />
    <BookInput />
  </div>
);

export default Books;
