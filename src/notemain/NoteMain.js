import React from "react";
//import Note from '../note/Note'
import NoteContext from "../NoteContext";
import { Link } from "react-router-dom";

//function handleDelete()

class NoteMain extends React.Component {
  static contextType = NoteContext;

  //     function handleDeleteRequest(deleteNote, noteId) {

  //     fetch(`http://localhost:9090/${notes}`), {
  //         method: 'DELETE',
  //         headers: {
  //             'content-type': 'application/json'
  //         }
  //     }
  // }

  render() {
    const routeNoteId = this.props.match.params.noteId;
    const note = this.context.notes.find((note) => note.id === routeNoteId);

    const currentFolder = note
      ? this.context.folders.find((folder) => folder.id === note.folderId)
      : {};

    return note ? (
      <>
        <div className="noteSidebar">
          <button onClick={() => this.props.history.goBack()}>Go back</button>
          <h2>{currentFolder.name}</h2>
        </div>
        <div className="noteCard">
          <h1>{note.name}</h1>
          <p>{note.modified}</p>
          <button>Delete Note</button>
        </div>
        <div className="content">{note.content}</div>
      </>
    ) : (
      <Link to="/">Could not display this note. Back to home</Link>
    );
  }
}

export default NoteMain;
