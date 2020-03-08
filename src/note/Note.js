import React from 'react'
import { Link } from 'react-router-dom'
import { notStrictEqual } from 'assert'
import './Note.css'
import NoteContext from '../NoteContext'

class Note extends React.Component {
    render() {
      return (
        <NoteContext.Consumer>
          {(context) => 
            <div className='noteList-note'>
              <h1>
                <Link to={`/note/${this.props.id}`}>
                  {this.props.name}
                </Link>
              </h1>
              <p>Date Modified: {this.props.modified}</p>
              <button>Delete Note</button>
            </div>
          }
        </NoteContext.Consumer>
      )
    }
  }

export default Note