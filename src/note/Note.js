import React from 'react'
import { Link } from 'react-router-dom'
import { notStrictEqual } from 'assert'

class Note extends React.Component {
  // const noteName = routeProps.match.params.id
  // find note name === noteName
  // find note folder

    render() {
      // const noteId = this.props.match.params.id
      // const noteName = this.props.notes.find(note => note.id === noteId)

      
      return (
        <div className='noteList'>
          <h1>
            <Link to={`/note/${this.props.id}`}>
              {this.props.name}
            </Link>
          </h1>
          <p>Date Modified: {this.props.modified}</p>
          <button>Delete Note</button>
        </div>
      )
    }
  }

export default Note