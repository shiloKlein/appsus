// import { mailService } from "../services/mail-service"


export default {
    name: 'preview',
    props: ['mail'],
    template: `
    
    <article class="mail-preveiw">
        <router-link :to="'/mail/details/' + mail.id" 
        class=" details-link  flex align-center">
            <div class="star" @click.prevent="StarClicked">
                <i v-if="!mail.isStarred" class="fa-regular fa-star"></i>
                <i v-else class="fa-solid fa-star"></i>
            </div>

            <div class="mail-address">{{mail.from}}</div>
            <div className="content">
                <div class="subject">{{mail.subject}}</div>
                <div class="short-content">{{mail.body}}</div>
            </div>

            <div class="mail-date">{{formattedDate}}</div>
            <button @click.prevent="deleteMail(mail,mail.id)">
                <i class="fa-solid fa-trash-can" ></i>
            </button>

        </router-link>
    
            </article>

    `,

    data() {
        return {

        }
    },
    methods: {
        deleteMail(mail, mailId) {
            setTimeout(() => {
                console.log(this.$route.params.folder)
                if (this.$route.params.folder === 'trash') {
                    this.$emit('delete', mailId)
                } else {
                    mail.isTrash = true
                    this.$emit('trashed', mail, mailId)
                }
            }, 0);
        },
        StarClicked() {
            this.mail.isStarred = !this.mail.isStarred
            this.$emit('starred', this.mail)
        },
    },
    computed: {
        formattedDate() {
            var options = { day: "numeric", month: "short" };
            return new Date(this.mail.sentAt).toLocaleDateString("en-US", options);
        }
    }
}