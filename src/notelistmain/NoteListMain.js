import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../note/Note'
import CircleButton from '../circlebutton/CircleButton'
import './NoteListMain.css'

export default function NoteListMain(props) {
    return (
        <section className='noteListMain'>
            <ul>
                {props.notes.map(note => 
                    <li key={note.id}>
                        <Note 
                            id={note.id}
                            name={note.name}
                            modified={note.modified}
                        />
                    </li>
                )}
            </ul>
            <div className='noteListMain_buttonContainer'>
            <CircleButton
                tag={Link}
                to='/add-note'
                type='button'
                className='NoteListMain__add-note-button'
                >
                <FontAwesomeIcon icon='plus' />
                <br />
                Note
            </CircleButton>
            </div>
        </section>
    )
}

NoteListMain.defaultProps = {
    notes: []
}