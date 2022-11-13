export default {
    template: `
        <section class="mail-nav flex flex-column">
            <button @click="onCompose">
           <img class="nav-icon" src="./assets/img/icons/pencil.svg" alt="" />
           <span class="mail-nav-txt">  new massege  </span></button>

            <router-link :to="'/mail/' + 'inbox'" class="mail-link folder-link"
            :class={clicked:isInboxClicked}
                @click="chooseFolder()"><i class="fa-solid fa-inbox nav-icon"></i>
                <span class="mail-nav-txt">  inbox  </span> </router-link>

              <router-link :to="'/mail/' + 'starred'" class="folder-link"
              :class={clicked:isStarredClicked}
                @click="chooseFolder()"><span class="nav-icon"><i class="fa-regular fa-star "></i></span>
                <span class="mail-nav-txt">  starred  </span> </router-link>

              <router-link :to="'/mail/' + 'sent'" class="folder-link"
              :class={clicked:isSentClicked}
                @click="chooseFolder()">
                <img class="nav-icon" src="./assets/img/icons/paper-plane.svg" />
                <span class="mail-nav-txt">  sent  </span> </router-link>
                
              <router-link :to="'/mail/' + 'trash'" class="folder-link"
                :class={clicked:isTrashClicked}
                @click="chooseFolder()"><i class="fa-solid fa-trash-can nav-icon"></i>
                <span class="mail-nav-txt">  trash  </span> </router-link>
             
            
        </section>
    `,

    data() {
        return {
                isInboxClicked:false,
                isStarredClicked:false,
                isSentClicked:false,
                isTrashClicked:false,
        }
    },
    created(){
        this.activeButton()
        },
    methods: {
        chooseFolder(folder) {
            setTimeout(()=>{
                this.$emit('folderChosen', folder)
            },0)
            this.activeButton(folder)
        },
        activeButton(){
            setTimeout(() => {
                const folder = this.$route.params.folder

                this.isInboxClicked= folder==='inbox' ? true:false
                this.isStarredClicked= folder==='starred' ? true:false
                this.isSentClicked= folder==='sent' ? true:false
                this.isTrashClicked= folder==='trash' ? true:false
            }, 0);
            
        },
        onCompose(){
            
            this.$emit('composeClicked', 'more')
        }
    },


}



// template: `
// <section class="mail-nav flex flex-column align-center">
//     <button @click="onCompose">
//     <i class="fa-light fa-pencil"></i>
//     new massege</button>
//     <ul class="folder-wrapper">
//       <router-link :to="'/mail/' + opt" v-for="(opt,idx) in navOptions"> 
//         <!-- <i :class="{icons[idx]}"> </i> -->
//          <li @click="chooseFolder(opt)">{{opt}}</li>
//     </router-link>
     
    
//         </ul>
// </section>
// `,
