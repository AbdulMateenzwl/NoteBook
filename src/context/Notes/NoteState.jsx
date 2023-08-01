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

        console.log("Adding a new note")
        const note = {
            "_id": "61322f119553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a0664",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
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
        console.log(json)

        setNotes(notes.filter((note) => { return note._id !== id }));
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // TO-DO API
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjMTA2MTM4NGU0NGZjYmVkYjM4ZTA3In0sImlhdCI6MTY5MDQ4MTQwM30.FLaKLIbip9XuxrWDey0TUlp1BNlxT_ZYXSMgmVuoFYs'
            },
            body: JSON.stringify(title, description, tag)

        });
        const json = response.json();
        // Login to edit the note
        for (let i = 0; i < notes.length; i++) {
            if (notes[i]._id === id) {
                notes[i].title = title;
                notes[i].description = description;
                notes[i].tag = tag;
                break;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState