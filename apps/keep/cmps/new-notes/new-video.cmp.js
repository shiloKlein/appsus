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
                type: "",
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
            console.log(this.newNote.title, this.newNote.info.txt);
            this.$emit('add', this.newNote)
        },

    }

}
