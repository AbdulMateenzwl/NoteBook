import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import noteContext from '../context/Notes/noteContext';
import { useHistory } from 'react-router-dom';

export default function Notes(props) {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    let history = useHistory();
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" })

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getNotes()
        } else {
            props.showAlert("Please Login to access your notes.", "warning")
            history.push("/login");
        }
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const ref = useRef(null);

    const handleOnClick = (e) => {
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.etag);
        ref.current.click();
        props.showAlert("Updated Successfully", "success")
    }

    const onChange = (e) => {
        console.log('onChange');
        setNote({ ...note, [e.target.name]: e.target.value })
    }


    return (
        <>
            <AddNote showAlert={props.showAlert} />
            <button ref={ref} type="button" className=" d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" minLength={5} required onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} minLength={5} required onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} minLength={5} required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="submit" className="btn btn-primary" onClick={handleOnClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h2>Your Notes</h2>
                {
                    (notes.length > 0) ?
                        notes.map((note) => {
                            return (
                                <NoteItem note={note} updateNote={updateNote} showAlert={props.showAlert} key={note._id} />
                            )
                        }) : <label > There are no notes to display add some to show them here.</label>
                }
            </div>
        </>
    )
}