const txt = {
    template: `
    <section class="txt">
        <h2>txt</h2>
    </section>
    `,
}
const img = {
    template: `
    <section class="img">
        <h2>img</h2>
    </section>
    `,
}
const video = {
    template: `
    <section class="video">
        <h2>video</h2>
    </section>
    `,
}
const todos = {
    template: `
    <section class="todos">
        <h2>todos</h2>
    </section>
    `,
}


import { noteService } from '../apps/keep/services/note.service.js'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

// import noteFilter from '../apps/keep/cmps/note-filter.cmp.js'
import noteList from '../apps/keep/cmps/note-list.cmp.js'

export default {
    template: `
    <section class="app-keep">
        
        <section class="note-type flex justify-between align-center">
            <h4>what's on your mind?</h4>
            <section class="note-type-btns">
             <button  @click="cmpTo('txt')">txt</button>
             <button  @click="cmpTo('img')">img</button>
             <button  @click="cmpTo('video')">video</button>
             <button  @click="cmpTo('todos')">todos</button>
            </section>
        </section>
            <component :is="cmpType" @action="handleAction">
            </component>
             <hr />
        <!-- <note-filter @filter="setFilter"/> -->
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
            cmpType: 'txt',
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
        noteSaved(note) {
            this.notes.push(note)
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
        txt,
        img,
        video,
        todos
    }
}