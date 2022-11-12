export const newVideo = {

    template: `
        <section class="new-video flex flex-column">
                <textarea v-model="newNote.title" placeholder="Title"></textarea>
                <textarea v-model="newNote.info.url" placeholder="Enter video URL..."></textarea>
                <button class="add-note" @click.prevent="addNote()">Add</button>
                
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
