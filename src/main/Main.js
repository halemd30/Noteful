import React from 'react'
import { Link } from 'react-router-dom'
import Note from '../note/Note'
import AddNoteForm from '../addnoteform/AddNoteForm'
import './Main.css'
import SideBar from '../sidebar/SideBar'
//import { format } from 'date-fns'

class Main extends React.Component {
    render() {
      const routeFolderId = this.props.match.params.folderId
      let notes = this.props.notes
      if (routeFolderId) {
        notes = this.props.notes.filter(note => note.folderId === routeFolderId)
      }
      
      return (
        <>
          <div className='mainSidebar'>
            <SideBar {...this.props}/>
          </div>
          <section className='main'>
            
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
            <button onClick={() => <AddNoteForm />}>Add Note</button>
          </section>
        </>
      )
    }
  }



{/* <div key={note.id} className='noteList_note'>
    <Link to={`/note/${note.id}`}>{note.name}</Link>
    <p>Date Modified: {note.modified}
      <span className='date'> 
        {format(note.modified, 'dd-MM-yyyy')}
      </span>
    </p>
    <button>Delete Note</button>
</div> */}

export default Main