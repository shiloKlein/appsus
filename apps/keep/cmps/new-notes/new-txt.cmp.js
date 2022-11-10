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
