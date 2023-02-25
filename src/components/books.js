import React from 'react';
import AddBook from './addBook';
import BooksList from './bookList';

export default function Books() {
  return (
    <div>
      <BooksList />
      <hr />
      <AddBook />
    </div>
  );
}
