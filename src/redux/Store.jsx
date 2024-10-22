import { createStore } from 'redux'
import bookReducer from './BookReducer'

const store =   createStore(bookReducer)

export default store