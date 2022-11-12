export const newImg = {

    template: `
        <section class="new-img flex flex-column">
                <textarea v-model="newNote.title" placeholder="Title"></textarea>
                <textarea v-model="newNote.info.url" placeholder="Enter image URL..."></textarea>
                <button class="add-note"  @click.prevent="addNote()">Add</button>
                
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
        },
        // clearText() {
        //     this.newNote.info.url = ""

        // }
    }

}
