import { mailService } from '../services/mail-service.js'
import mailPreview from './preview.cmp.js'



export default {
    name: 'mails-list',
    props:['mails'],
    template: `
        <section class="mail-list">
            <ul>
                <li v-for="(mail,idx) in mails">
                    <mail-preview :mail="mail"/>
                 </li>
                   


           
        </section>
    `,

    created() {
        this.getMails()
    },

    data() {
        return {
            mails: null,
            txt: 'mail'

        }
    },


    components: {
        mailPreview,
    }

}
