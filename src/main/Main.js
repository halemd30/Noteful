import React from 'react'
import { Link } from 'react-router-dom'
import Note from '../note/Note'
//import AddNoteForm from '../addnoteform/AddNoteForm'
import './Main.css'
import SideBar from '../sidebar/SideBar'
import NoteContext from '../NoteContext'
// import { format } from 'date-fns'

class Main extends React.Component {
  static contextType = NoteContext

  render() {
    const routeFolderId = this.props.match.params.folderId
    let notes = this.context.notes
    if (routeFolderId) {
      notes = this.context.notes.filter(note => note.folderId === routeFolderId)
    }
    return ( 
      <NoteContext.Consumer>
        {(context) => 
          <>
            <div className='mainSidebar'>
              <SideBar {...this.props}/>
            </div>
            <section className='main'>
            <div className='notesTitle'>
              <h1>Notes</h1>
              <div className='notesUnderline1'></div>
              <div className='notesUnderline2'></div>
              <div className='notesUnderline3'></div>
            </div>
              <ul>
                {notes.map((note) => {
                  return (
                    <li key={note.id}>
                      <Note
                        id={note.id}
                        name={note.name}
                        modified={note.modified}
                      />
                    </li>
                  )
                })}
              </ul>
              <Link to='/noteForm'>
                <button className='addNoteButton' type='button'>Add Note</button>
              </Link>
            </section>
          </>
        }
      </NoteContext.Consumer>
    )
  }
}

export default Main