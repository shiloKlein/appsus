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
                        <div class="subject">{{mail.subject}}</div>
                        <div class="short-content">{{mail.body}}</div>
                    <!-- <div class="mail-date"> -->
                        <!-- <div>{{mail.sentAt}}</div> -->
                        
                        <!-- <i class="fa-solid fa-trash-can" ></i> -->
                        <!-- </div> -->
                        <div class="mail-date">{{formattedDate}}</div>
                        <button @click.prevent="deleteMail(mail.id)">
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
        deleteMail(mailId) {
            this.$emit('delete', mailId)
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