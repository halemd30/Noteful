import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Note.css'

export default function Note(props) {
    return (
        <div className='Note'>
            <h2 className='noteTitle'>
                <Link to={`/note/${props.id}`}>
                    {props.name}
                </Link>
            </h2>
            <button className='noteDelete' type='button'>
                <FontAwesomeIcon icon='trash-alt' />
                {' '}
                remove
            </button>
            <div className='noteDates'>
                <div className='noteDates_modified'>
                    Modified
                    {' '}
                    <span className='date'>
                        {format(props.modifed, 'Do MMM YYYY')}
                    </span>
                </div>
            </div>
        </div>
    )
}