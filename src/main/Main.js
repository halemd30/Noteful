import React from 'react'
import { Link } from 'react-router-dom'
import AddNoteForm from '../addnoteform/AddNoteForm'
import SideBar from '../sidebar/SideBar'

class Main extends React.Component {
    render() {
      return (
        <div className='main'>
            
            <ul>
                {this.props.filteredNotes.map((note) => {
                    return (
                        <div key={note.id} className='note'>
                            <Link to={`/notes/${note.id}`}>{note.name}</Link>
                            <p>Date Modified: {note.modified}</p>
                            <button>Delete Note</button>
                        </div>
                    )
                })}
            </ul>
            <button onClick={() => <AddNoteForm />}>Add Note</button>
        </div>
      )
    }
  }

export default Main