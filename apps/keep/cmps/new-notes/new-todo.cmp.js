export const newTodo = {


    template: `
        <section class="new-note-form">
                <input v-model="newNote.info.label" placeholder="Lable..."></input>
                <textarea v-model="newNote.info.todos" placeholder="Enter comma separated list..."></textarea>
                <button class="add-note-btn" @click.prevent="addNote()">Add</button>
                
        </section>
    `,
    data() {
        return {
            newNote: {
                id: "",
                type: "note-todos",
                isPinned: true,
                title: "",
                info: {
                    txt: "",
                    url: "",
                    label: "",
                    todos: "",
                    style: {
                        backgroundColor: "#00d"
                    }
                }
            },

        }
    },

    methods: {
        addNote() {
            this.$emit('add', this.newNote)
            this.newNote.info.label=''
            this.newNote.info.todos=''
        },
    }

}
