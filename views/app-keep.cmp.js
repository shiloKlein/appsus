


import { noteService } from '../apps/keep/services/note.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

// import noteFilter from '../apps/keep/cmps/note-filter.cmp.js'
import noteList from '../apps/keep/cmps/note-list.cmp.js'

import { newTxt } from '../apps/keep/cmps/new-notes/new-txt.cmp.js'
import { newImg } from '../apps/keep/cmps/new-notes/new-img.cmp.js'
import { newVideo } from '../apps/keep/cmps/new-notes/new-video.cmp.js'
import { newTodo } from '../apps/keep/cmps/new-notes/new-todo.cmp.js'

export default {
    template: `
    <section class="app-keep">
        <section class="add-note flex justify-center align-center">
            <h4>what's on your mind?</h4>
            <component :is="cmpType" @add="addNote"/>
           
        <section class="note-type-btns flex justify-between align-center">
                <section class="note-type-btns">
                 <button  @click="cmpTo('newTxt')">txt</button>
                 <button  @click="cmpTo('newImg')">img</button>
                 <button  @click="cmpTo('newVideo')">video</button>
                 <button  @click="cmpTo('newTodo')">todos</button>
                </section>
        </section>
        </section>
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
            cmpType: 'newTxt',
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
                    // console.log(note);
                })
                this.notes.unshift(newNote)
            },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        handleAction(ev) {
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
        newTxt,
        newImg,
        newVideo,
        newTodo
    }
}