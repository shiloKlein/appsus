import { mailService } from '../services/mail-service.js'
import mailPreview from './mail-preview.cmp.js'



export default {
    name: 'mails-list',
    props: ['mails'],
    template: `
        <section class="mail-list">
            <ul>
                <li v-for="(mail,idx) in mails">
                    <mail-preview :mail="mail" @delete="deleteMail"/>
                 </li>
            </ul>
                   


           
        </section>
    `,



    data() {
        return {

        }
    },
    methods: {
        deleteMail(mailId){
        this.$emit('delete', mailId)
        }
        
    },


    components: {
        mailPreview,
    }

}
