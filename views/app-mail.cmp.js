import newMail from '../cmps/new-mail.cmp.js'
import mailsList from '../cmps/mails-list.cmp.js'
import mailNav from '../cmps/mails-nav.cmp.js'


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
