import react from 'react';
import NoteContext from './noteContext';
import { useState } from 'react';
const NoteState = (props) => {
    const obj = {
        "name": "mateen",
        "class": "33"
    }
    const [state, setState] = useState(obj);
    const update = () => {
        setTimeout (() => {
            setState({
                "name":"Khadim",
                "class":"44"
            })
        },1000)
    }
    return (
        <NoteContext.Provider value={{state,update}}>{props.children}</NoteContext.Provider>
    );
};

export default NoteState