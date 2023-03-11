import React from 'react';
import { useSelector } from 'react-redux';
import DisplayBooks from './displaybooks';

const BookList = () => {
  const { books } = useSelector((state) => state.books);
  const bookData = books;

  return (
    <>
      <div className="container">
        {bookData.map((book) => <DisplayBooks key={bookData.item_id} book={book} />)}
      </div>
      <div id="line" />
    </>
  );
};

export default BookList;
