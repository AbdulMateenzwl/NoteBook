import React,{useContext} from 'react'
import noteContext from '../context/Notes/noteContext';
import NoteItem from './NoteItem';

export default function Notes() {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <div className='row my-3'>
            {
                notes.map((note) => {
                    return (
                        <NoteItem note={note} key={note._id} />
                    )
                })
            }
        </div>
    )
}