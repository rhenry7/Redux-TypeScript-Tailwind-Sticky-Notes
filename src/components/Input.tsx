import React, {useState} from 'react'


interface NoteInputProps {
    addNote(note: string): void; 
}

const Input:React.FC<NoteInputProps>= ({ addNote }) => {
    const [note, setNote] = React.useState('')
    
    const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
     // update note
     setNote(e.target.value)
        }

    const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
     addNote(note)
     setNote('')
                    }
    return (
        <div>
               <div className='font-display'>
                   <form onSubmit={handleClick}>
                   <input className='bg-yellow-200 focus: outline-none placeholder-yellow-400' onChange={handleChange} value={note} type='text' name='note' placeholder='Today I would like to...' />
     <button>+</button>
                   </form>
  
   </div>
        </div> 
    )
}

export default Input
