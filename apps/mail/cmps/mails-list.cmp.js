import { mailService } from '../services/mail-service.js'
import mailPreview from './preview.cmp.js'



export default {
    template: `
        <section class="mail-list">
            <ul>
                <!-- <li v-for="(mail,idx) in mails">{{txt+" "+idx+1}} -->
                    <!-- <mail-preview v-if=""></mail-preview> -->
                <!-- </li> -->
                <li>
                    <!-- <router-link :to="'/mail/' + mail.id">for details</router-link> -->
                    <mail-preview/>
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
            mails: [],
            txt: 'mail'

        }
    },
    methods: {

        getMails() {
            console.log('get mails');
            const a = mailService.query()
                .then(a => console.log(a))

        },
    },

    components: {
        mailPreview,
    }

}
