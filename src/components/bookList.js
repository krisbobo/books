import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DisplayBooks from './displaybooks';
import { getBooks } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h2 id="head">Book List</h2>
        {books && books.map((book) => <DisplayBooks key={book.id} book={book} />)}
      </div>
      <div id="line" />
    </>
  );
};

export default BookList;
