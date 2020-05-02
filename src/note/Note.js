import React from 'react'
import { Link } from 'react-router-dom'
import { notStrictEqual } from 'assert'
import './Note.css'
import NoteContext from '../NoteContext'
import PropTypes from 'prop-types'

class Note extends React.Component {
    render() {
      return (
        <NoteContext.Consumer>
          {(context) => 
          <>
            <button className='deleteNote' onClick={() => context.deleteNote(this.props.id)}>Delete Note</button>
            <Link to={`/note/${this.props.id}`}>
              <div className='noteList-note'>
                <h2>
                  {this.props.name} 
                </h2>
                <p>Date Modified: {this.props.modified}</p>             
              </div>
            </Link>
          </>
          }
        </NoteContext.Consumer>
      )
    }
  }

  Note.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    modified: PropTypes.string.isRequired
  }

  Note.defaultProps = {
    id: '',
    name: '',
    modified: '',
  }

export default Note