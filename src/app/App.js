import React from 'react';
import {Route, Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import NoteListNav from '../notelistnav/NoteListNav';
import NotePageNav from '../notepagenav/NotePageNav';
import NoteListMain from '../notelistmain/NoteListMain';
import NotePageMain from '../notepagemain/NotePageMain';
import STORE from '../STORE';
import {getNotesForFolder, findNote, findFolder} from '../notesHelper';
import './App.css';

class App extends React.Component {
  state = {
    notes: [],
    folder: []
  }

  renderNavRoutes() {
    const {notes, folders} = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => (
              <NoteListNav 
                folders={folders}
                notes={notes}
                {...routeProps}
              />
            )}
          />
        ))}
        <Route
          path='/note/:noteId'
          render={routeProps => {
            const {noteId} = routeProps.match.params;
            const note = findNote(notes, noteId) || {};
            const folder = findFolder(folders, note.folderId);
            return <NotePageNav {...routeProps} folder={folder} />;
          }}
        />
        <Route path='/addFolder' component={NotePageNav} />
        <Route path='/addNote' component={NotePageNav} />
      </>
    )
  }

  renderMainRoutes() {
    const {notes, folders} = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route 
            exact
            key={path}
            path={path}
            render={routeProps => {
              const {folderId} = routeProps.match.params;
              const notesForFolder = getNotesForFolder(notes, folderId);
              return (
                <NoteListMain 
                  {...routeProps}
                  notes={notesForFolder}
                />
              )
            }}
          />
        ))}
        <Route
          path='/note/:noteId'
          render={routeProps => {
            const {noteId} = routeProps.match.params;
            const note = findNote(notes, noteId);
            return (
              <NotePageMain 
                {...routeProps}
                note={note}
              />
            )
          }}
        />
      </>
    )
  }

  render() {
    return (
      <div className='app'>
        <nav className='appNav'>{this.renderNavRoutes()}</nav>
        <header className='appHeader'>
          <h1>
            <Link to={'/'}>Noteful</Link>
          </h1>
        </header>
        <main className='appMain'>{this.renderMainRoutes()}</main>
      </div>
    )
  }
}

export default App;
