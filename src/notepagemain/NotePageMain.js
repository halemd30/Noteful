import React from 'react'
import Note from '../note/Note'
import './NotePageMain.css'

export default function NotePageMain(props) {
    return (
        <section className='notePageMain'>
            <Note
                id={props.note.id}
                name={props.note.name}
                modified={props.note.modified}
            />
            <div className='notePageMain__content'>
                {props.note.content.split(/\n \r|\n/).map((para, i) =>
                    <p key={i}>{para}</p>
                )}
            </div>
        </section>
    )
}

NotePageMain.defaultProps = {
    note: {
        content: ''
    }
}