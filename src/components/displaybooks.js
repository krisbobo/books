import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook } from '../redux/books/books';

const DisplayBooks = ({ book }) => {
  const {
    id,
    title,
    author,
    category,
  } = book;

  const dispatch = useDispatch();
  const [percentage, setPercentage] = useState(0);

  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => (count < 50 ? count + 1 : count));
  };

  const increasePercentage = () => {
    setPercentage((count) => (count < 100 ? count + 2 : count));
  };

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <div className="item-container flex">
      <div className="items flex">
        <h4>{category}</h4>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div className="buttons flex">
          <button type="button">Comments</button>
          <span> | </span>
          <button type="button" onClick={handleRemove}>Remove</button>
          <span> | </span>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress flex">
        <div className="percentage">
          <CircularProgressbar value={percentage} />
        </div>
        <div>
          <div className="percent">{`${percentage}%`}</div>
          <h4>Completed</h4>
        </div>
        <span className="VLine" />
        <div>
          <h4>CURRENT CHAPTER</h4>
          <h3>
            Chapter
            {counter}
          </h3>
          <button type="button" onClick={() => { increase(); increasePercentage(); }}>UPDATE PROGRESS</button>
        </div>
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
