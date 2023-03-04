import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function BooksList() {
  const [books] = useState([
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      currentChapter: 'Chapter 17',
      progress: 64,
    },
    {
      id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      currentChapter: 'Chapter 3: Lesson Learned',
      progress: 6,
    },
    {
      id: uuidv4(),
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Action',
      currentChapter: 'Chapter 17',
      progress: 0,
    },
  ]);
  return (
    <div>
      {
        books.map((book) => (
          <div key={book.id} className="container">
            <div className="book">
              <div className="aboutBook">
                <p>{book.category}</p>
                <h2>{book.title}</h2>
                <a href="#head">{book.author}</a>
                <div className="bookAction">
                  <a href="#comments">Comments</a>
                  {' '}
                  |
                  <a href="#remove">Remove</a>
                  |
                  <a href="#edit">Edit</a>
                </div>
              </div>

              <div className="progress">
                <progress value={book.progress} max="100" />
                <div className="progressDetail">
                  <h4>{book.currentChapter}</h4>
                  <span>Completed</span>
                </div>
              </div>

              <div className="currentChapter">
                <p>Current Chapter</p>
                <h4>{book.currentChapter}</h4>
                <button type="button">Update Progress</button>
              </div>
            </div>
          </div>
        ))
}
    </div>
  );
}
