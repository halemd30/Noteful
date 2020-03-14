import React from 'react'
import NoteContext from '../NoteContext'
import './AddFolderForm.css'

class AddFolderForm extends React.Component {
  constructor() {
    super()
    this.state = {
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

    render() {
      return (
        <NoteContext.Consumer>
          {(context) => 
            <form className='addFolderForm' onSubmit={e => context.addFolder(e)}>
              <div className='folderFormBorder1'>
              <div className='folderFormBorder2'>
              <div className='folderFormBorder3'>
              <h2>Add a Folder</h2>
              <div className='formGroup'>
                <label htmlFor='folderName'>Name your folder:</label>
                <input type='text' className='folderName'
                  name='folderName' id='folderName' onChange={(e) => this.updateFolderName(e.target.value)}/>
              </div>
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