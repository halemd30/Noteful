import React from 'react'
import { NavLink } from 'react-router-dom'
import AddFolderForm from '../addfolderform/AddFolderForm'
import Main from '../main/Main'
import './SideBar.css'
import NoteContext from '../NoteContext'

class SideBar extends React.Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(context) => 
                    <>
                        <div className='sideBar'>
                            <ul>
                                {context.folders.map(folder => {
                                    return (
                                        <li key={folder.id}>
                                            <NavLink
                                                to={`/folder/${folder.id}`}
                                                activeStyle={{
                                                    color: 'red'
                                                }}
                                            >
                                                {folder.name}
                                            </NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                            <button onClick={() => <AddFolderForm />}>Add Folder</button>
                        </div>
                    </>
                }
            </NoteContext.Consumer>
        )
    }
}

export default SideBar






















































