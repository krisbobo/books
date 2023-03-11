import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const DisplayBooks = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeBook(book.item_id));
  };

  return (
    <div className="items">
      <h3>{book.category}</h3>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <div className="buttons">
        <button type="button">Comments</button>
        <span> | </span>
        <button type="button" onClick={handleRemove}>Remove</button>
        <span> | </span>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

DisplayBooks.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default DisplayBooks;
