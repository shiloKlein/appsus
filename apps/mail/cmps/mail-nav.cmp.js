export default {
    template: `
        <section class="mail-nav flex flex-column align-center">
            <button @click="onCompose">
            <i class="fa-light fa-pencil"></i>
            new massege</button>
            <ul class="folder-wrapper">
              <router-link :to="'/mail/' + opt" v-for="(opt,idx) in navOptions"> 
                <!-- <i :class="{icons[idx]}"> </i> -->
                 <li @click="chooseFolder(opt)">{{opt}}</li>
            </router-link>
             
            
                </ul>
        </section>
    `,

    data() {
        return {
            navOptions: ['inbox', 'starred', 'sent', 'trash'],
            icons:['class="fa-light fa-inbox-in"',
            'class="fa-regular fa-star"',
            'class="fa-light fa-inbox-out"',
            'class="fa-solid fa-trash-can',
    '']
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
