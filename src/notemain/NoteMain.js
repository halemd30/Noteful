import React from 'react'
import Note from '../note/Note'
import NoteContext from '../NoteContext';

//function handleDelete()

class NoteMain extends React.Component {
    static contextType = NoteContext

//     function handleDeleteRequest(deleteNote, noteId) {
    
//     fetch(`http://localhost:9090/${notes}`), {
//         method: 'DELETE',
//         headers: {
//             'content-type': 'application/json'
//         }
//     }
// }

    render() {
        const routeNoteId = this.props.match.params.noteId
        const note = this.context.notes.find(note => 
            // console.log('notes: ', note)
            // create unique ID for added note
            note.id === routeNoteId
        );
        
        const currentFolder = this.context.folders.find(folder => 
            // console.log('folders: ', folder)
            // create unique ID for added folder
            folder.id === note.folderId
        );
        
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