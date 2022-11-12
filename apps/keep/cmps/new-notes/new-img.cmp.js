export const newImg = {

    template: `
        <section class="new-note-form">
                <input v-model="newNote.title" placeholder="Title"></input>
                <input v-model="newNote.info.url" placeholder="Enter image URL..."></input>
                <button class="add-note-btn"  @click.prevent="addNote()">Add</button>
                
        </section>
    `,
    data() {
        return {
            newNote: {
                id: "",
                type: "note-img",
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
            this.newNote.info.url=''
            this.newNote.title=''
        },
        // clearText() {
        //     this.newNote.info.url = ""

        // }
    }

}
