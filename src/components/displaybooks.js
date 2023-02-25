import React from 'react';
import style from './displaybook.module.css';

const DisplayBooks = (props) => (
  <div className={style.book}>
    <div className={style.aboutBook}>
      <p>{props}</p>
      <h2>{props}</h2>
      <a href="#head">{props}</a>
      <div className={style.bookAction}>
        <a href="#comments">Comments</a>
        {' '}
        |
        <a href="#remove">Remove</a>
        |
        <a href="#edit">Edit</a>
      </div>
    </div>

    <div className={style.progress}>
      <progress value={props} max="100" />
      <div className={style.progressDetail}>
        <h4>{props}</h4>
        <span>Completed</span>
      </div>
    </div>

    <div className={style.currentChapter}>
      <p>Current Chapter</p>
      <h4>{props}</h4>
      <button type="button">Update Progress</button>
    </div>
  </div>
);

export default DisplayBooks;
