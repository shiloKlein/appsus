import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <ul>
                <li class="grid" v-for="note in notes" :key="note.id">
                    <note-preview :note="note"/>
                    <section class="actions">
                        <button @click="remove(note.id)">x</button>
                    </section>
                </li>
            </ul>
        </section>
    `,
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },
    },
    components: {
        notePreview,
    }
}