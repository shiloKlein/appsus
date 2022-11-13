import { mailService } from '../services/mail-service.js'
import mailPreview from './mail-preview.cmp.js'



export default {
    name: 'mails-list',
    props: ['mails'],
    template: `
        <section class="mail-list">
        <input class="mail-search" v-model="searchTxt" type="text" placeholder="search for mail" @input="onSearch" />

            <ul class="mail-preview-container">
                <li v-for="(mail,idx) in mails">
                    <mail-preview :mail="mail" 
                    @delete="deleteMail"
                    @starred="starAdded"
                    @trashed="passToTrash"/>
                 </li>
            </ul>
                   
        </section>
    `,



    data() {
        return {
            searchTxt: ''
        }
    },
    methods: {
        deleteMail(mailId) {
            this.$emit('delete', mailId)
        },
        starAdded(mail) {
            this.$emit('starred', mail)
        },
        passToTrash(mail, mailId) {
            this.$emit('trashed', mail, mailId)
        },
        onSearch(){
        this.$emit('searched', this.searchTxt)
        }


    },


    components: {
        mailPreview,
    }

}
