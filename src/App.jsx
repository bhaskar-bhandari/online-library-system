
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './components/AppLayout'
import Home from './components/Home'
import NotFound from './components/NotFound'
import BrowseBooks from './components/BrowseBooks'
import BookDetails from './components/BookDetails'
import AddBook from './components/AddBook'



const router = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<NotFound/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'browseBooks',
        element:<BrowseBooks/>
      },
      {
        path:'books/:category',
        element:<BrowseBooks/>
      },
      {
        path:'book/:id',
        element:<BookDetails/>
      },
      {
        path:'addBook',
        element:<AddBook/>
      },
    ]
  }
])

function App() {

  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
