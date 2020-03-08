import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SideBar from './sidebar/SideBar';
import STORE from './STORE';
import './App.css';
import Main from './main/Main';
import NoteMain from './notemain/NoteMain';
import NoteContext from './NoteContext'
import Note from './note/Note'

class App extends React.Component {
  constructor() {
    super()
    this.state = STORE
  }

  addNote = (note) => {
    this.setState({
      notes: [...this.state.notes, note]
    })
  }
  
  addFolder = (folder) => {
    this.setState({
      folders: [...this.state.folders, folder]
    })
  }

  deleteCard = (id) => {
    const newNoteList = this.state.notes.filter(note => {
      if (id !== note.id) {
        return note
      }
    })
    this.setState({
      notes: newNoteList
    })
  }

  render() {
    
    return (
      <div className='app'>
        <h1 className='title'>
          <Link to={'/'}>Noteful</Link>
        </h1>

          <Switch>
            <NoteContext.Provider value={{
              store: this.state,
              folders: STORE.folders,
              notes: STORE.notes
            }}>
              <Route exact path='/' render={(routeProps) => 
                <Main {...routeProps} notes={STORE.notes}/>}
              />

              <Route path='/folder/:folderId' render={routeProps => 
                <Main {...routeProps} notes={STORE.notes}/>}
              />

              <Route path='/note/:noteId' render={routeProps => 
                  <NoteMain
                    notes={STORE.notes}
                    folders={STORE.folders}
                    {...routeProps}
                  />
                }
              />
            </NoteContext.Provider>
          </Switch>
      </div>
    )
  }
}

export default App;
