import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [book,setBook] = useState({
    title: '',
    author: '',
    description: '',
    rating: '',
    category: '',
  })


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({...book,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', payload: { ...book, id: Date.now() } })
    navigate('/browseBooks');
  } 

  return (
   <form className="add-book-form container" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleChange} required />
      <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={book.description} onChange={handleChange} required />
      <input type="number" name="rating" placeholder="Rating" value={book.rating} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={book.category} onChange={handleChange} required />
      <button type="submit">Add Book</button>
   </form>
  )
}

export default AddBook
