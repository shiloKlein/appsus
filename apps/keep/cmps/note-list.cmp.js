import notePreview from './note-preview.cmp'

export default {
    props: ['note'],
    template: `
        <section class="note-list">
            <ul>
                <li v-for="note in notes" :key="note.id">
                    <note-preview :note="car"/>
                    <section class="actions">
                        <router-link :to="'/keep/note/' + note.id">Details</router-link> |
                        <router-link :to="'/keep/note/edit/' + note.id">Edit</router-link> |
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