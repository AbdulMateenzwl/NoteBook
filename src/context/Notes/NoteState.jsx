import react from 'react';
import NoteContext from './noteContext';
import { useState } from 'react';
const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "64c2baedde95ce9cca1e8f288",
            "user": "64c1061384e44fcbedb38e07",
            "title": "my title",
            "description": "please do something",
            "tag": "personal",
            "date": "2023-07-27T18:43:57.318Z",
            "__v": 0
        },
        {
            "_id": "64c77dfaaa4edfa6e6be9d11c",
            "user": "64c1061384e44fcbedb38e07",
            "title": "my title",
            "description": "please do something",
            "tag": "personal",
            "date": "2023-07-31T09:25:14.899Z",
            "__v": 0
        },
        {
            "_id": "64c77fb7aaedfa6e6be39d11f",
            "user": "64c1061384e44fcbedb38e07",
            "title": "note 1",
            "description": "note 1 is about testing",
            "tag": "personal",
            "date": "2023-07-31T09:32:39.175Z",
            "__v": 0
        },
        {
            "_id": "64c77dfaaa2edfa6e6be9d11c",
            "user": "64c1061384e44fcbedb38e07",
            "title": "my title",
            "description": "please do something",
            "tag": "personal",
            "date": "2023-07-31T09:25:14.899Z",
            "__v": 0
        },
        {
            "_id": "64c77fb7aaedfa566e6be9d11f",
            "user": "64c1061384e44fcbedb38e07",
            "title": "note 1",
            "description": "note 1 is about testing",
            "tag": "personal",
            "date": "2023-07-31T09:32:39.175Z",
            "__v": 0
        },
        {
            "_id": "64c77dfaaae45dfa6e6be9d11c",
            "user": "64c1061384e44fcbedb38e07",
            "title": "my title",
            "description": "please do something",
            "tag": "personal",
            "date": "2023-07-31T09:25:14.899Z",
            "__v": 0
        },
        {
            "_id": "64c77fb7aae32dfa6e6be9d11f",
            "user": "64c1061384e44fcbedb38e07",
            "title": "note 1",
            "description": "note 1 is about testing",
            "tag": "personal",
            "date": "2023-07-31T09:32:39.175Z",
            "__v": 0
        },
        {
            "_id": "64c77dfaaaed54fa6e6be9d11c",
            "user": "64c1061384e44fcbedb38e07",
            "title": "my title",
            "description": "please do something",
            "tag": "personal",
            "date": "2023-07-31T09:25:14.899Z",
            "__v": 0
        },
        {
            "_id": "64c77fb7aae34dfa634e6be9d11f",
            "user": "64c1061384e44fcbedb38e07",
            "title": "note 1",
            "description": "note 1 is about testing",
            "tag": "personal",
            "date": "2023-07-31T09:32:39.175Z",
            "__v": 0
        },
        {
            "_id": "64c77dfaaaed346fa634e6be9d11c",
            "user": "64c1061384e44fcbedb38e07",
            "title": "my title",
            "description": "please do something",
            "tag": "personal",
            "date": "2023-07-31T09:25:14.899Z",
            "__v": 0
        },
        {
            "_id": "64c77fb7aaedf4534a6e6be9d11f",
            "user": "64c1061384e44fcbedb38e07",
            "title": "note 1",
            "description": "note 1 is about testing",
            "tag": "personal",
            "date": "2023-07-31T09:32:39.175Z",
            "__v": 0
        }
    ];

    const [notes, setNotes] = useState(notesInitial)

    // Add a Note
    const addNote = (title, description, tag) => {
        // TO-DO
        const note = {
            "_id": "64c2baedde9665ce9cca1e8f288",
            "user": "64c1061384e44fcbedb38e07",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-07-27T18:43:57.318Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }
    // Delete a Note
    const deleteNote = () => {

    }
    // Edit a Note
    const editNote = () => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState