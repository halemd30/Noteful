import React from 'react'
import { NavLink } from 'react-router-dom'
import AddFolderForm from '../addfolderform/AddFolderForm'
import Main from '../main/Main'

class SideBar extends React.Component {
    render() {
        const selectedFolder = this.props.match.params.folderId
        const filteredNotes = this.props.notes.filter(note => note.folderId === selectedFolder)

      return (
        <>
            <div className='sideBar'>
                <ul>
                    {this.props.folders.map((folder) => {
                        return (
                            <li 
                                key={folder.id} 
                                className={`${selectedFolder === folder.id ? "selected-class" : ""}`}
                            >
                                <NavLink to=
                                    {`/folder/${folder.id}`}>{folder.name}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={() => <AddFolderForm />}>Add Folder</button>
            </div>
            <Main notes={filteredNotes}/>
        </>
      )
    }
  }

export default SideBar