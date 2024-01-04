import React from "react"
import Sidebar from "./components/Sidebar.jsx"
import Editor from "./components/Editor.jsx"
import Split from "react-split"
import { nanoid } from "nanoid"
import { onSnapshot, addDoc, doc, deleteDoc } from "firebase/firestore"
import { notesCollection as notesColl, db } from './firebase.js'

export default function App() {
    const [notes, setNotes] = React.useState([])
    const [currentNoteId, setCurrentNoteId] = React.useState("")
    
    const currentNote = notes.find(note => note.id === currentNoteId) || notes[0]

        React.useEffect(() => {
            const unsubscribe = onSnapshot(notesColl, function(snapshot){
                // Sync up our local notes array with the snapshot data
                const notesArr = snapshot.docs.map(doc =>({
                    ...doc.data(),
                    id: doc.id
                }))
                setNotes(notesArr)
            })
            return unsubscribe
        }, [])

        React.useEffect(()=>{ 
            if(!currentNoteId){
                setCurrentNoteId(notes[0]?.id)
            }
        }, [notes])

    async function createNewNote() {
        const newNote = {
            body: "# Type your markdown note's title here"
        }
       const newNoteRef = await addDoc(notesColl, newNote)
        setCurrentNoteId(newNoteRef.id)
    }

    function updateNote(text) {
        setNotes(oldNotes => {
            const newArray = []
            for (let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if (oldNote.id === currentNoteId) {
                    // Put the most recently-modified note at the top
                    newArray.unshift({ ...oldNote, body: text })
                } else {
                    newArray.push(oldNote)
                }
            }
            return newArray
        })
    }

    async function deleteNote(noteId) {
        const docRef = doc(db, 'notes', noteId)
        await deleteDoc(docRef)
    }

    return (
        <main>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={notes}
                            currentNote={currentNote}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                        />
                        <Editor
                            currentNote={currentNote}
                            updateNote={updateNote}
                        />
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                </button>
                    </div>

            }
        </main>
    )
}