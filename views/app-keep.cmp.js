


import { noteService } from '../apps/keep/services/note.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

// import noteFilter from '../apps/keep/cmps/note-filter.cmp.js'
import noteList from '../apps/keep/cmps/note-list.cmp.js'

import { newNote } from '../apps/keep/cmps/new-notes/new-note.cmp.js'

export default {
    template: `
    <section class="app-keep">
        
        <section class="note-type flex justify-between align-center">
            <h4>what's on your mind?</h4>
            <section class="note-type-btns">
             <button  @click="cmpTo('newNote')">txt</button>
             <button  @click="cmpTo('imgNote')">img</button>
             <button  @click="cmpTo('videoNote')">video</button>
             <button  @click="cmpTo('todosNote')">todos</button>
            </section>
        </section>
            <component :is="cmpType" @add="addNote">
            </component>
             <hr />
        <!-- <note-filter @filter="setFilter"/> -->
         <!-- <new-note  @add="addNote"/> -->
        <note-list  @remove="removeNote" :notes="notes"/>
        <!-- :notes="notesToShow" -->
        
    </section>
    `,
    data() {
        return {
            notes: [],
            filterBy: {
                type: '',
            },
            cmpType: 'newNote',
        }
    },
    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
            })
    },
    methods: {
        cmpTo(cmp) {
            this.cmpType = cmp
        },
        removeNote(noteId) {
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex(note => note.id === noteId)
                    this.notes.splice(idx, 1)
                    showSuccessMsg(`note ${noteId} deleted`)
                })
                .catch(err => {
                    console.log('OOPS', err)
                    showErrorMsg('Cannot remove note')
                })

        },
        addNote(newNote) {
            noteService.addNote(newNote)
                .then(note => {
                    console.log(note);
                    this.notes.push(note)
                })
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        handleAction(ev) {
            console.log('Parenting is handling the action!', ev)
        }
    },
    computed: {
        // notesToShow() {
        //     const regex = new RegExp(this.filterBy.vendor, 'i')
        //     var notes = this.notes.filter(note => regex.test(note.type))
        //     // cars = cars.filter(car => car.maxSpeed > this.filterBy.minSpeed)
        //     return notes

        // }
    },
    components: {
        // noteFilter,
        noteList,
        newNote
        // imgNote,
        // videoNote,
        // todosNote
    }
}