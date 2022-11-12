export const newTxt = {


    template: `
        <section class="new-txt flex flex-column">
                <textarea v-model="newNote.title" placeholder="Title"></textarea>
                <textarea v-model="newNote.info.txt" placeholder="Take a note..."></textarea>
                <button class="add-note" @click.prevent="addNote()">Add</button>
                
        </section>
    `,
    data() {
        return {
            newNote: {
                id: "",
                type: "note-txt",
                isPinned: true,
                title: "",
                info: {
                    txt: "",
                    url: "",
                    label: "",
                    todos: [],
                    style: {
                        backgroundColor: "#00d"
                    }
                }
            }
        }
    },

    methods: {
        addNote() {
            this.$emit('add', this.newNote)
            this.newNote.info.txt=''
            this.newNote.title=''
        },

    }

}
