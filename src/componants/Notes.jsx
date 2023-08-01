import React, { useContext ,useEffect} from 'react'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import noteContext from '../context/Notes/noteContext';

export default function Notes() {
    const context = useContext(noteContext);
    const { notes, getNotes } = context;

    useEffect(() => {
        getNotes();
    }, [])

    return (
        <>
            <AddNote/>
            <div className='row my-3'>
                {
                    notes.map((note) => {
                        return (
                            <NoteItem note={note} key={note._id} />
                        )
                    })
                }
            </div>
        </>
    )
}
