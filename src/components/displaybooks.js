import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const DisplayBooks = ({ book }) => {
  const {
    id,
    title,
    author,
    category,
  } = book;

  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <div className="items">
      <h2>{category}</h2>
      <h2>{title}</h2>
      <h3>{author}</h3>
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
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default DisplayBooks;
