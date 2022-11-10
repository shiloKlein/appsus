export const newNote = {


    template: `
        <section class="new-note flex flex-column">
                <textarea v-model="newNote.title" placeholder="Title"></textarea>
                <textarea v-model="newNote.txt" placeholder="Take a note..."></textarea>
                <button class="add-note" @click.prevent="addNote()">Add</button>
                
        </section>
    `,
    data() {
        return {
            newNote: {
                title: "",
                txt: '',
            }

        }
    },

    methods: {
        addNote() {
            console.log(this.newNote);
            this.$emit('add', this.newNote)
        },

    }

}
