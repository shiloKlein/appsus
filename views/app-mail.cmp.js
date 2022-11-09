import newMail from '../apps/mail/cmps/new-mail.cmp.js'
import mailsList from '../apps/mail/cmps/mails-list.cmp.js'
import mailNav from '../apps/mail/cmps/mail-folder-list.cmp.js'

import {mailService} from '../apps/mail/services/mail-service.js'



export default {
    template: `
        <section class="email-app">
            <h1>MAIL PAGE</h1>

            <new-mail/>
            <mails-list :mails="mails"/>
            <mail-nav/>
        </section>
    `,
    data() {
        return {
            mails: null
        }
    },
        methods: {

        getMails() {

            mailService.query()
                .then(mails => this.mails = mails)

        },
    },

    components: {
        newMail,
        mailsList,
        mailNav

    }
}
