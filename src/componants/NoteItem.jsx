import React,{useContext} from 'react'
import noteContext from '../context/Notes/noteContext';

export default function NoteItem(props) {
    const { note , updateNote} = props;
    const {deleteNote} = useContext(noteContext);
    return (
        <div className='col-md-3'>
            <div className="card my-1">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <i className='fa fa-trash-can mx-2' onClick={()=> {deleteNote(note._id)}}></i>
                    <i className='fa fa-edit mx-2' onClick={()=>{updateNote(note)}}></i>
                </div>
            </div>
        </div>
    )
}
