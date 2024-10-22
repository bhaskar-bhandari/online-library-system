const initialState = {
    books:[
        { id: 1, title: 'Dune', author: 'Frank Herbert', description: 'A sci-fi classic.', rating: 4.5, category: 'Sci-Fi' },
        { id: 2, title: '1984', author: 'George Orwell', description: 'Dystopian novel.', rating: 4.7, category: 'Fiction' }
    ]
}

const bookReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {...state, books:[...state.books,action.payload]}
    
        default:
           return state;
    }
}

export default bookReducer; 