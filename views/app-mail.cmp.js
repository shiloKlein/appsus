import newMail from '../apps/mail/cmps/new-mail.cmp.js'
import mailsList from '../apps/mail/cmps/mails-list.cmp.js'
import mailNav from '../apps/mail/cmps/mail-nav.cmp.js'

import { mailService } from '../apps/mail/services/mail-service.js'



export default {
    template: `
        <section class="email-app flex">

            <mail-nav @folderChosen="filterByFolder"/>
            <mails-list :mails="mails"/>
            <new-mail/>
        </section>
    `,
    data() {
        return {
            mails: null
        }
    },

    created() {
        this.getMails()
    },

    methods: {

        getMails() {

            mailService.query()
                .then(mails => this.mails = mails)

        },
        filterByFolder(folder){
        console.log(folder);
        },
    },


    components: {
        newMail,
        mailsList,
        mailNav

    }
}
