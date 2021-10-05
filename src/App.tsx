import React from 'react';
import './assets/main.css';
import { useDispatch, useSelector } from 'react-redux';
import Input from './components/Input';
import addNote from './reducers/actions';
import { NotesState } from './reducers/notesReducer';

function App() {
  const notes = useSelector<NotesState, NotesState['notes']>(state => state.notes)
  const dispatch = useDispatch() 
  const onAddNote = (note:string) => {
    dispatch(addNote(note))
  }
  return (
   <>
   <div className='bg-yellow-200 flex justify-center p-10 text-8xl font-bold font-display'>
        <Input addNote={onAddNote} />
  </div> 
  
   
   <ul className='flex justify-left text-8xl pl-28 font-display'> 
     <li>
       {notes.map(
         (note) => {
           return <li key={note}>{note}</li>
         }
       )}
     </li>
     <hr></hr>
   </ul>


   </>
  );
}

export default App;
function dispatch(): (note: string) => void {
  throw new Error('Function not implemented.');
}

function action(action: any): (note: string) => void {
  throw new Error('Function not implemented.');
}

