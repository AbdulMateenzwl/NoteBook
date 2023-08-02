import react from 'react';
import NoteContext from './noteContext';
import { useState } from 'react';
const NoteState = (props) => {

    const host = "http://localhost:5000";

    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial)


    // Get all Notes from the backend
    const getNotes = async () => {
        // TO-DO API
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjMTA2MTM4NGU0NGZjYmVkYjM4ZTA3In0sImlhdCI6MTY5MDQ4MTQwM30.FLaKLIbip9XuxrWDey0TUlp1BNlxT_ZYXSMgmVuoFYs'
            }

        });
        const json = await response.json();
        setNotes(json);
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // API Call 
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjMTA2MTM4NGU0NGZjYmVkYjM4ZTA3In0sImlhdCI6MTY5MDQ4MTQwM30.FLaKLIbip9XuxrWDey0TUlp1BNlxT_ZYXSMgmVuoFYs"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        setNotes(notes.concat(json))
    }

    // Delete a Note
    const deleteNote = async (id) => {
        // TO-DO API
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjMTA2MTM4NGU0NGZjYmVkYjM4ZTA3In0sImlhdCI6MTY5MDQ4MTQwM30.FLaKLIbip9XuxrWDey0TUlp1BNlxT_ZYXSMgmVuoFYs'
            }
        });
        const json = await response.json();

        setNotes(notes.filter((note) => { return note._id !== id }));
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // TO-DO API
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjMTA2MTM4NGU0NGZjYmVkYjM4ZTA3In0sImlhdCI6MTY5MDQ4MTQwM30.FLaKLIbip9XuxrWDey0TUlp1BNlxT_ZYXSMgmVuoFYs'
            },
            body: JSON.stringify({title, description, tag})

        });
        const json = response.json();
        let newNotes = JSON.parse(JSON.stringify(notes))
        // Login to edit the note
        for (let i = 0; i < newNotes.length; i++) {
            if (newNotes[i]._id === id) {
                newNotes[i].title = title;
                newNotes[i].description = description;
                newNotes[i].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState