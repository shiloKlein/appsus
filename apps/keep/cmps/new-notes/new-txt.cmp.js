export const newTxt = {


    template: `
        <section class="new-note-form">
                <input v-model="newNote.title" placeholder="Title"></input>
                <textarea v-model="newNote.info.txt" placeholder="Take a note..."></textarea>
                <button class="add-note-btn" @click.prevent="addNote()">Add</button>
                
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
