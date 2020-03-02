import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import { countNotesForFolder } from '../notes-helpers'
import './NoteListNav.css'

export default function NoteListNav(props) {
    return (
        <div className='noteListNav'>
            <ul className='noteListNav_List'>
                {props.folders.map(folder => 
                    <li key={folder.id}>
                        <NavLink
                            className='noteListNav_folderLink'
                            to={`/folder/${folder.id}`}
                        >
                            <span className='noteListNav_numNotes'>
                                {countNotesForFolder(props.notes, folder.id)}
                            </span>
                            {folder.name}
                        </NavLink>
                    </li>
                )}
            </ul>
            <div className='noteListNav_buttonWrapper'>
                <CircleButton
                    tag={Link}
                    to='/addFolder'
                    type='button'
                    className='noteListNav_addFolderButton'
                >
                    <FontAwesome icon='plus' />
                    <br />
                    Folder
                </CircleButton>
            </div>
        </div>
    )
}

NoteListNav.defaultProps = {
    folders: []
}