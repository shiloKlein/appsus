import { noteService } from '../apps/keep/services/note.service.js'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

// import noteFilter from '../apps/keep/cmps/note-filter.cmp.js'
import noteList from '../apps/keep/cmps/note-list.cmp.js'

export default {
    template: `
    <section class="app-keep">
        <!-- <note-filter @filter="setFilter"/> -->
        <router-link to="/keep/note/edit">Add a car</router-link>
        <note-list  @remove="removeNote"  />
        <!-- :notes="notesToShow" -->
    </section>
    `,
    data() {
        return {
            notes: [],
            filterBy: {
                type: '',

            },
        }
    },
    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
            })
    },
    methods: {
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
        setFilter(filterBy) {
            this.filterBy = filterBy
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
    }
}