import { mailService } from "../services/mail-service.js";
import mailNav from '../cmps/mail-nav.cmp.js'
export default {
    template: `
    <section class="email-app flex">
        <mail-nav @folderChosen="getMails" 
            @composeClicked="compose"/>

        <section v-if="mail" class="mail-details">
            <div class="details-actions"> send  throw back to inbox </div>
            <div class="details-subject">{{mail.subject}}</div>
            <div class="details-from-container flex justify-between">
                <span class="details-from">{{mail.from}}</span>
                <span class="details-date">{{formattedDate}}</span>
            </div>
            <div class="details-body">{{mail.body}}</div>
        </section>
    </section>
    `,

    data() {
        return {
            mail: null
        }
    },
    created() {
        this.getMail()
        console.log(this.$router);
    },

    computed: {
        mailId() {
            console.log(this.$route.params.id);
            return this.$route.params.id
        },
        formattedDate() {
            var options = { day: "numeric", month: "short" };
            return new Date(this.mail.sentAt).toLocaleDateString("en-US", options);
        },
    },

    methods: {
        getMail() {
            mailService.get(this.mailId)
                .then(mail => {
                    console.log(mail);
                    this.mail = mail
                })
        },
    },
    components: {
        mailNav,
    }

}