const txt = {
    template: `
    <section class="txt">
        <h2>txt</h2>
        <button @click="report">Go</button>
    </section>
    `,
    methods: {
        report() {
            this.$emit('action', 'Go')
        }
    }
}
const img = {
    template: `
    <section class="img">
        <h2>img</h2>
        <button @click="report">Do</button>
    </section>
    `,
    methods: {
        report() {
            this.$emit('action', 'Do')
        }
    }
}
const video = {
    template: `
    <section class="video">
        <h2>video</h2>
        <button @click="report">Go</button>
    </section>
    `,
    methods: {
        report() {
            this.$emit('action', 'Go')
        }
    }
}
const todos = {
    template: `
    <section class="todos">
        <h2>todos</h2>
        <button @click="report">Do</button>
    </section>
    `,
    methods: {
        report() {
            this.$emit('action', 'Do')
        }
    }
}


import { noteService } from '../apps/keep/services/note.service.js'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

// import noteFilter from '../apps/keep/cmps/note-filter.cmp.js'
import noteList from '../apps/keep/cmps/note-list.cmp.js'

export default {
    template: `
    <section class="app-keep">
        <!-- <note-filter @filter="setFilter"/> -->
        <note-list  @remove="removeNote"  :notes="notes"/>
        <!-- :notes="notesToShow" -->
         <hr />
            <select v-model="cmpType">
                <option>txt</option>
                <option>img</option>
                <option>video</option>
                <option>todos</option>
            </select>
            <component :is="cmpType" @action="handleAction">
            </component>
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