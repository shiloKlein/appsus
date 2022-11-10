
export default {
    template: `
        <section class="mail-nav">
            <button @click="onCompose">new massege</button>
            <ul>
              <router-link :to="'/mail/' + opt" v-for="opt in navOptions"> 
                 <li @click="chooseFolder(opt)">{{opt}}</li>
            </router-link>
             
            
                </ul>
        </section>
    `,

    data() {
        return {
            navOptions: ['inbox', 'starred', 'sent', 'trash'],
        }
    },
    methods: {
        chooseFolder(folder) {
            setTimeout(()=>{
                this.$emit('folderChosen', folder)
            },0)
        },
        onCompose(){
            
            this.$emit('composeClicked', 'more')
        }
    },


}
