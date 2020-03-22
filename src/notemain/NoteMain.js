import React from 'react'
import Note from '../note/Note'
import NoteContext from '../NoteContext';
import './NoteMain.css'

class NoteMain extends React.Component {
    static contextType = NoteContext
    
    goBack = () => {
        this.props.history.goBack()
    }

    render() {
        const routeNoteId = this.props.match.params.noteId
        const note = this.context.notes.find(note => 
            // console.log('notes: ', note)
            // create unique ID for added note
            note.id === routeNoteId
        );
        console.log('note main note: ', note.id)
        const currentFolder = this.context.folders.find(folder => 
            // console.log('folders: ', folder)
            // create unique ID for added folder
            folder.id === note.folderId
        );
        
        return (
            <NoteContext.Consumer>
                {(context) =>
                    <div className='noteMainContainer'>
                        <div className='buttonFolderContainer'>
                            <div className='goBackButton'>
                                <button onClick={this.goBack}>Go back</button>
                            </div>
                            <div className='noteFolder'>
                                <h2>{currentFolder.name}</h2>
                            </div>
                        </div>
                        <div className='noteMainBorder'>
                            <div className='noteCard'>
                                <button className='deleteNoteMain' onClick={() => context.deleteCard(note)}>Delete Note</button>
                                <h1>{note.name}</h1>
                                <p>{note.modified}</p>
                            </div>
                            <div className='content'>
                                {note.content}
                            </div>
                            <div className='noteMainUnderline1'></div>
                            <div className='noteMainUnderline2'></div>
                        </div>
                    </div>
                }
            </NoteContext.Consumer>
        )
    }
}

export default NoteMain