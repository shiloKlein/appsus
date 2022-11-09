import newMail from '../apps/mail/cmps/new-mail.cmp.js'
import mailsList from '../apps/mail/cmps/mails-list.cmp.js'
import mailNav from '../apps/mail/cmps/mail-folder-list.cmp.js'


export default {
	template: `
        <section class="email-app">
            <h1>MAIL PAGE</h1>

            <new-mail/>
            <mails-list/>
            <mail-nav/>
        </section>
    `,

    components:{
    newMail,
    mailsList,
    mailNav

    }
}
