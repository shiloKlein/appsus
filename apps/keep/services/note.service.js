import { utilService } from '../../../services/util.service.js'

import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    // getEmptyNote,
    getNextNoteId,
    addNote
}
function makeList(str) {

    var todosList = str.split(',')
    var todos = []
    for (var i = 0; i < todosList.length; i++) {
        var item = todosList[i]
        var res = { txt: item, doneAt: null }
        todos.push(res)
    }
    console.log("todos")
    console.log(todos)
    return todos

}



function addNote(note) {
    note = _createNote(note)
    console.log(note.type)
    console.log(note.info.todos)
    return storageService.post(NOTE_KEY, note)
}


function query() {
    return storageService.query(NOTE_KEY)
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

// function getEmptyNote() {
//     return {
//         id: "",
//         type: "note-txt",
//         isPinned: true,
//         title: "",
//         info: {
//             txt: ""
//         }
//     }
// }


function getNextNoteId(noteId) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            var idx = notes.findIndex(note => note.id === noteId)
            if (idx === notes.length - 1) idx = -1
            return notes[idx + 1].id
        })
}

function _createNotes() {
    let notes = storageService.query(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: "n101",
                type: "note-txt",
                isPinned: true,
                title: "we shure",
                info: {
                    txt: "send send the mother..."
                }
            },
            {
                id: "n102",
                type: "note-img",
                info: {
                    url: "../../../assets/img/1.JPG",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: "n103",
                type: "note-todos",
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", doneAt: null },
                        { txt: "Coding power", doneAt: 187111111 }
                    ]
                }
            }
        ]
        storageService.save(NOTE_KEY, notes)
    }
    return notes
}

function _createNote(note) {
    note.id = utilService.makeId()
    if (note.type === "note-todos")
        note.info.todos = makeList(note.info.todos)
    return note
}
