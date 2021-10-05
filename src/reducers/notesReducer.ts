import { Action } from "./actions"


export interface NotesState { 
    notes: string[]
}

const initialState = {
    notes: []
}


const notesReducer = ( state:NotesState = initialState, action: Action ) => {
    // const { type: 'ADD_NOTE', payload } = action;
    switch(action.type) { 
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
            
        default: 
            return state 
    }
    
}

export default notesReducer

