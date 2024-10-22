import React from 'react'
import { Link } from 'react-router-dom';
  import './Home.css'

const Home = () => {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography'];
  const popularBooks = [
    { id: 1, title: 'Dune', category: 'Sci-Fi' },
    { id: 2, title: '1984', category: 'Fiction' }
  ];
  return (
    <div className="home-container container">
      <h1>Welcome to the Online Libraray</h1>
      <h2>Categories</h2>
      <ul>
        {categories.map((category)=>(
           <li key={category}>
            <Link to={`/books/${category.toLowerCase()}`}>{category}</Link>
          </li>
        ))}
      </ul>

        <h2>Popular Books</h2>
        <ul>
          {popularBooks.map((book)=>(
            <li key={book.id}>
              {book.title} - <Link to={`/book/${book.id}`}>view Details</Link>
            </li>
          ))}
        </ul>
      
    </div>
  )
}

export default Home
