import React from 'react';
import { withRouter, Route, Switch, Link } from 'react-router-dom';
import SideBar from './sidebar/SideBar';
import STORE from './STORE';
import './App.css';
import Main from './main/Main';
import NoteMain from './notemain/NoteMain';
import NoteContext from './NoteContext'
import AddNoteForm from './addnoteform/AddNoteForm'
import AddFolderForm from './addfolderform/AddFolderForm'
//import './assets/css/fonts.css'
import Note from './note/Note'
import NoteBoundary from './NoteBoundary';

class App extends React.Component {
static contextType = NoteContext

    state = {
      notes: [],
      folders: [],
    }

  addNote = (note) => {
    console.log(note)
    // post request to the server
    fetch(`http://localhost:9090/notes`, {
      method: 'POST',
      body: JSON.stringify(note)
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({
          notes: [...this.state.notes, note]
        })
        this.props.history.push('/')
      })
  }
  
  addFolder = (folder) => {
    console.log('new folder: ', folder)
    // post request to the server
    fetch('http://localhost:9090/folders', {
      method: 'POST',
      body: JSON.stringify(folder)
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({
          folders: [...this.state.folders, folder]
        })
        this.props.history.push('/')    
      })
    
  }

  deleteNote = (noteId) => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId)
    this.setState({
      notes: newNotes
    })
  }

  deleteFolder = (folderId) => {
    const newFolders = this.state.folders.filter(folder => folder.id !== folderId)
    this.setState({
      folders: newFolders
    })
  }

  componentDidMount() {
    // batch request?
    Promise.all([this.fetchData('folders'), this.fetchData('notes')])
      .then(res => res.json())
      .catch(err => console.log(err))
  }

  fetchData = type => {
    // type = 'notes' or 'folders'
    return fetch(`http://localhost:9090/${type}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          [type]: data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const contextValue = {
      notes: this.state.notes, 
      folders: this.state.folders, 
      addNote: this.addNote,
      addFolder: this.addFolder,
      deleteNote: this.deleteNote,
      deleteFolder: this.deleteFolder
    }

    console.log()   
    return (
      <div className='app'>
        <div className='titleContainer'>
          <h1 className='title'>
            <Link to={'/'}>Noteful</Link>
          </h1>
          <div className='titleCard1'></div>
          <div className='titleCard2'></div>
        </div>

          <Switch>
            <NoteContext.Provider value={contextValue}>
              <NoteBoundary>
                <Route 
                  exact path='/' 
                  component={Main}
                />
                <Route 
                  path='/folder/:folderId'
                  component={Main}
                />
                <Route 
                  path='/note/:noteId' 
                  component={NoteMain}
                />
                <Route 
                  path='/noteForm' 
                  component={AddNoteForm}
                />
                <Route 
                  path='/folderForm' 
                  component={AddFolderForm}
                />
              </NoteBoundary>
            </NoteContext.Provider>
          </Switch>
      </div>
    )
  }
}

export default withRouter(App);