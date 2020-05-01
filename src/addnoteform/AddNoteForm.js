import React from 'react'
import NoteContext from '../NoteContext'
import ValidationError from '../ValidationError';

class AddNoteForm extends React.Component {
  static contextType = NoteContext;

    state = {
      noteName: {
        value: '',
        touched: false
      },
      noteDescription: {
        value: '',
      },
      folderDropdown: {
        value: '',
      }
    }

  handleInputChange = e => {
    console.log(e.target.name)
    console.log(e.target.value)
    this.setState({
      [e.target.name]: {
        value: e.target.value,
        touched: true
      }
    })
  }  
 
  handleSubmit = (e) => {
    e.preventDefault()
    const note = {
      name: this.state.noteName.value,
      content: this.state.noteDescription.value
    }
    this.context.addNote(note)
  }

  validateNoteName = () => {
    const noteName = this.state.noteName.value.trim()
    console.log(noteName)
    if (noteName.length === 0) {
      return 'A name is required'
    } 
  }

    render() {
      return (
        <NoteContext.Consumer>
          {(context) => 
            <form className='addNoteForm' onSubmit={(e) => this.handleSubmit(e)}>

              <div className='formGroup'>
                <label htmlFor='folderDropdown'>Select a folder:</label>
                
                <select name='folderDropdown' onChange={e => this.handleInputChange(e)} id='folderDropdown'>
                  {context.folders.map((folder) => 
                    <option value={folder.name} key={folder.id}>{folder.name}</option>
                  )}
                </select>
              </div>

              <div className='formGroup'>
                <label htmlFor='noteName'>Name your note: </label>
                <input type='text' className='noteName'
                  name='noteName' id='noteName' value={this.state.noteName.value} onChange={(e) => this.handleInputChange(e)}/>
                  {this.state.noteName.touched && (
                    <ValidationError message={this.validateNoteName}/>
                  )}  
              </div>

              <div className='formGroup'>
                <label htmlFor='noteDescription'>Description: </label>
                <input type='text' className='noteDescription'
                  name='noteDescription' id='noteDescription' value={this.state.noteDescription.value} onChange={(e) => this.handleInputChange(e)}/>
              </div>
              <button type='submit' className='submitButton'>Add Note</button>

            </form>
          }
        </NoteContext.Consumer>
      )
    }
  }

export default AddNoteForm