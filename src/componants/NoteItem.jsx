import React from 'react'

export default function NoteItem(props) {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-1">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <i className='fa fa-trash-can mx-2'></i>
                    <i className='fa fa-edit mx-2'></i>
                </div>
            </div>
        </div>
    )
}