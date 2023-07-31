import react from 'react';
import NoteContext from './noteContext';
import { useState } from 'react';
const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "64c2baedde9ce9cca1e8f288",
            "user": "64c1061384e44fcbedb38e07",
            "title": "my title",
            "description": "please do something",
            "tag": "personal",
            "date": "2023-07-27T18:43:57.318Z",
            "__v": 0
        },
        {
            "_id": "64c77dfaaaedfa6e6be9d11c",
            "user": "64c1061384e44fcbedb38e07",
            "title": "my title",
            "description": "please do something",
            "tag": "personal",
            "date": "2023-07-31T09:25:14.899Z",
            "__v": 0
        },
        {
            "_id": "64c77fb7aaedfa6e6be9d11f",
            "user": "64c1061384e44fcbedb38e07",
            "title": "note 1",
            "description": "note 1 is about testing",
            "tag": "personal",
            "date": "2023-07-31T09:32:39.175Z",
            "__v": 0
        }
    ];

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState