import React from 'react';
import style from './addBook.module.css';

export default function AddBook() {
  return (
    <div className={style.addContainer}>
      <h2>Add New Book</h2>
      <form>
        <input type="text" placeholder="Insert title ..." />
        <select name="category">
          <option disabled selected className={style.myDisable}>Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
