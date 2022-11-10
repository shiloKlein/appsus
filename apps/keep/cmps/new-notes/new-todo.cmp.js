export const newTodo = {


    template: `
        <section class="new-todo flex flex-column">
                <textarea v-model="newNote.info.label" placeholder="Lable..."></textarea>
                <textarea v-model="newNote.info.todos" placeholder="Enter comma separated list..."></textarea>
                <button class="add-note" @click.prevent="addNote()">Add</button>
                
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
        },
    }

}
