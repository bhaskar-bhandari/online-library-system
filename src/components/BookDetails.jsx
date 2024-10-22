import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const BookDetails = () => {
    const {id} = useParams()
    const book = useSelector((state)=> state.books.find((book) => book.id === parseInt(id)))

    if (!book) return <h1>Book not found</h1>;
  return (
    <div className="book-details-container container">
            <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>Rating: {book.rating} / 5</p>
      <Link to="/browseBooks">Back to Browse</Link>
    </div>
  )
}

export default BookDetails
