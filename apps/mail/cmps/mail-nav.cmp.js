
export default {
    template: `
        <section class="mail-nav">
            <button @click="onCompose">new massege</button>
            <ul>
                <li v-for="opt in navOptions"
            
                @click="chooseFolder(opt)">
                {{opt}}
                </li>
             
                </ul>
        </section>
    `,

    data() {
        return {
            navOptions: ['inbox', 'starred', 'sent', 'trash']
        }
    },
    methods: {
        chooseFolder(folder) {
            this.$emit('folderChosen', folder)
        },
        onCompose(){
            
            this.$emit('composeClicked', 'more')
        }
    },


}
