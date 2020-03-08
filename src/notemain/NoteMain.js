import React from 'react'
import Note from '../note/Note'
import NoteContext from '../NoteContext';

class NoteMain extends React.Component {
    
    render() {
        const routeNoteId = this.props.match.params.noteId
        const note = this.props.notes.find(note => 
            note.id === routeNoteId
        );
        
        const currentFolder = this.props.folders.find(folder => 
            folder.id === note.folderId
        )
        
        return (
            <NoteContext.Consumer>
                {(context) => 
                    <>
                        <div className='noteSidebar'>
                            <button>Go back</button>
                            <h2>{currentFolder.name}</h2>
                        </div>
                        <div className='noteCard'>
                            <h1>{note.name}</h1>
                            <p>{note.modified}</p>
                            <button>Delete Note</button>
                        </div>
                        <div className='content'>
                            {note.content}
                        </div>
                    </>
                }
            </NoteContext.Consumer>
        )
    }
}

export default NoteMain