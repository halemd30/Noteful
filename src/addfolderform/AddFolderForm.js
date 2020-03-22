import React from 'react'
import NoteContext from '../NoteContext'
import './AddFolderForm.css'
import { Link } from 'react-router-dom'

class AddFolderForm extends React.Component {
  static contextType = NoteContext

  constructor() {
    super()
    this.state = {
      folderId: '', // include empty unique ID here?
      folderName: {
        value: ''
      }
    }
  }

  updateFolderName = (folderName) => {
    console.log(folderName)
    this.setState({
      folderName: {
        value: folderName
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const folder = {
      //id: add unique id? 
      name: this.state.folderName.value
    }
    this.context.addFolder(folder)
  }

    render() {
      return (
        <NoteContext.Consumer>
          {(context) => 
            <form className='addFolderForm' onSubmit={e => this.handleSubmit(e)}>
              <div className='folderFormBorder1'>
              <div className='folderFormBorder2'>
              <div className='folderFormBorder3'>
              <h2>Add a Folder</h2>
              <div className='formGroup'>
                <label htmlFor='folderName'>Name your folder:</label>
                <input type='text' className='folderName'
                  name='folderName' id='folderName' onChange={(e) => this.updateFolderName(e.target.value)}/>
              </div>
              {/* Link to '/' when button is clicked */}
                <button type='submit' className='submitButton'>Add Folder</button>
              </div>
              </div>
              </div>
            </form>
          }
        </NoteContext.Consumer>
      )
    }
  }

export default AddFolderForm