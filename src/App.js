import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
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

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      notes: STORE.notes,
      folders: STORE.folders,
      // store: STORE
    }
  }

  addNote = (note) => {
    console.log(note)
    this.setState({
      notes: [...this.state.notes, note]
    })
  }
  
  addFolder = (folder) => {
    console.log('new folder: ', folder)
    this.setState({
      folders: [...this.state.folders, folder]
    })
  }

  deleteCard = (id) => {
    const newNoteList = this.state.notes.filter(note => note.id !== id)
    this.setState({
      notes: newNoteList
    })
  }

  render() {
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
            <NoteContext.Provider value={{
              // store: this.state.store,
              notes: this.state.notes, 
              folders: this.state.folders, 
              addNote: this.addNote,
              addFolder: this.addFolder,
              deleteCard: this.deleteCard,
              // handleSubmit: this.handleSubmit
            }}>
              <Route exact path='/' render={(routeProps) => 
                <Main 
                  {...routeProps} 
                  //notes={STORE.notes}
                />}
              />

              <Route path='/folder/:folderId' render={routeProps => 
                <Main 
                  {...routeProps} 
                  //notes={STORE.notes}
                  />}
              />

              <Route path='/note/:noteId' render={routeProps => 
                  <NoteMain
                    {...routeProps}
                    // notes={STORE.notes}
                    // folders={STORE.folders}
                  />}
              />

              <Route path='/noteForm' component={AddNoteForm}/>
              <Route path='/folderForm' component={AddFolderForm}/>
            </NoteContext.Provider>
          </Switch>
      </div>
    )
  }
}

export default App;