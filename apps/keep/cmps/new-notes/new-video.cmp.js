export const newVideo = {

    template: `
        <section class="new-note-form">
                <input v-model="newNote.title" placeholder="Title"></input>
                <input v-model="newNote.info.url" placeholder="Enter video URL..."></input>
                <button class="add-note-btn" @click.prevent="addNote()">Add</button>
                
        </section>
    `,
    data() {
        return {
            newNote: {
                id: "",
                type: "note-video",
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
            this.newNote.title=''
            this.newNote.info.url=''
        },

    }

}
