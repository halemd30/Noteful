import React from 'react'
import { Link } from 'react-router-dom'
import Note from '../note/Note'
import AddNoteForm from '../addnoteform/AddNoteForm'
//import { format } from 'date-fns'

class Main extends React.Component {
    render() {
      // const selectedNote = this.props.match.params.noteId  

      return (
        <section className='main'>
          <ul>
            {this.props.notes.map((note) => {
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