import { createStore } from 'redux';
import notesReducer from './reducers/notesReducer'

//const initialState = {};

const store = createStore(
    notesReducer,
    //initialState
    
)

export default store;