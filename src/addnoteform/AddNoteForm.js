import React from 'react'
import NoteContext from '../NoteContext'

class AddNoteForm extends React.Component {
  static contextType = NoteContext;

    state = {
      noteName: '',
      noteDescription: ''
    }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }  
 
  handleSubmit = (e) => {
    e.preventDefault()
    const note = {
      name: this.state.noteName,
      content: this.state.noteDescription
    }
    this.context.addNote(note)
  }

    render() {
      return (
        <NoteContext.Consumer>
          {(context) => 
            <form className='addNoteForm' onSubmit={(e) => this.handleSubmit(e)}>
              <div className='formGroup'>
                <label htmlFor='noteName'>Name your note: </label>
                <input type='text' className='noteName'
                  name='noteName' id='noteName' value={this.state.noteName} onChange={(e) => this.handleInputChange(e)}/>
              </div>
              <div className='formGroup'>
                <label htmlFor='noteDescription'>Description: </label>
                <input type='text' className='noteDescription'
                  name='noteDescription' id='noteDescription' value={this.state.noteDescription} onChange={(e) => this.handleInputChange(e)}/>
              </div>
              <button type='submit' className='submitButton'>Add Note</button>
            </form>
          }
        </NoteContext.Consumer>
      )
    }
  }

export default AddNoteForm