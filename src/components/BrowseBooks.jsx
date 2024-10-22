import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {Link, useParams } from 'react-router-dom'


const BrowseBooks = () => {
   const {category} = useParams()
   const books = useSelector((state) => state.books)
    const [search,setSearch] = useState('')

    const filteredBooks = books.filter((book)=> 
      (!category || book.category.toLowerCase() === category) &&
    (book.title.toLowerCase().includes(search.toLowerCase()) || 
     book.author.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="browse-books-container container" >
        <h1>Browse Books</h1>
        <input type="text" placeholder='search' value={search}  onChange={(e) => setSearch(e.target.value)}/>

       <ul>
        {
          filteredBooks.map((book)=>(
            <li key={book.id}>
              {book.title} by {book.author} - <Link to={`/book/${book.id}`}>View Details</Link>
            </li>
          ))
        }
       </ul>
      
    </div>
  )
}

export default BrowseBooks
