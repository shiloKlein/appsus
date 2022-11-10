export const newTodo = {


    template: `
        <section class="new-todo flex flex-column">
                <textarea v-model="newNote.info.label" placeholder="Lable..."></textarea>
                <textarea v-model="todoList" placeholder="Enter comma separated list..."></textarea>
                <button class="add-note" @click.prevent="addNote()">Add</button>
                
        </section>
    `,
    data() {
        return {
            newNote: {
                id: "",
                type: "",
                isPinned: true,
                title: "",
                info: {
                    txt: "",
                    url: "../../../assets/img/1.jpg",
                    label: "",
                    todos: [],
                    style: {
                        backgroundColor: "#00d"
                    }
                }
            },
            todoList: [],
        }
    },

    methods: {
        addNote() {
            console.log(this.newNote.title, this.newNote.info.txt);
            this.$emit('add', this.newNote)
        },

    }

}
