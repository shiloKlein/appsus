import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <ul>
                <li v-for="note in notes" :key="note.id">
                    <note-preview :note="note"/>
                    <section class="actions">
                        <router-link :to="'/note/' + note.id">Details</router-link> |
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