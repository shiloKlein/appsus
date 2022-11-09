import { mailService } from '../services/mail-service.js'
import mailPreview from './preview.cmp.js'



export default {
    name: 'mails-list',
    template: `
        <section class="mail-list">
            <ul>
                <li v-for="(mail,idx) in mails">
                    <mail-preview :mail="mail"/>
                 </li>
                <!-- <li> -->
                    <!-- <router-link :to="'/mail/' + mail.id">for details</router-link> -->

                </li>
                <li> </li>
                <li> </li>
                <li> </li>
                </ul>

           
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
    methods: {

        getMails() {

            mailService.query()
                .then(mails => this.mails = mails)

        },
    },

    components: {
        mailPreview,
    }

}
