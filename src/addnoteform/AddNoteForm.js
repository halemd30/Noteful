import React from 'react'
import NoteContext from '../NoteContext'

class AddNoteForm extends React.Component {
  static contextType = NoteContext;

  constructor() {
    super()
    this.state = {
      noteName: {
        value: ''
      },
      noteDescription: {
        value: ''
      }
    }
  }

  updateNoteName = (noteName) => {
    console.log(noteName)
    this.setState({
      noteName: {
        value: noteName
      }
    })
  }

  updateNoteDescription = (description) => {
    this.setState({
      noteDescription: {
        value: description
      }
    })
  }
 
  handleSubmit = (e) => {
    e.preventDefault()
    const note = {
      // id: unique id?
      name: this.state.noteName.value,
      content: this.state.noteDescription.value
    }
    this.context.addNote(note)
    // const { notes, folders } = this.state
    // console.log('new note: ', notes.value)
    // console.log('new folder: ', folders.value)
  }

    render() {
      return (
        <NoteContext.Consumer>
          {(context) => 
            <form className='addNoteForm' onSubmit={(e) => this.handleSubmit(e)}>
              <div className='formGroup'>
                <label htmlFor='noteName'>Name your note: </label>
                <input type='text' className='noteName'
                  name='noteName' id='noteName' onChange={(e) => this.updateNoteName(e.target.value)}/>
              </div>
              <div className='formGroup'>
                <label htmlFor='noteDescription'>Description: </label>
                <input type='text' className='noteDescription'
                  name='noteDescription' id='noteDescription' onChange={(e) => this.updateNoteDescription(e.target.value)}/>
              </div>
              <button type='submit' className='submitButton'>Add Note</button>
            </form>
          }
        </NoteContext.Consumer>
      )
    }
  }

export default AddNoteForm